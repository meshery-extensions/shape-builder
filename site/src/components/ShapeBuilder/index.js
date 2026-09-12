// /* global window */
import React, { useEffect, useRef, useState } from "react";
import { Wrapper, CanvasContainer, OutputBox, StyledSVG, CopyButton, CoordinateDisplay } from "./shapeBuilder.styles";
import { Button, Typography, Box, CopyIcon, Select, MenuItem, Slider, FormControl } from "@sistent/sistent";
import { SVG, extend as SVGextend } from "@svgdotjs/svg.js";
import draw from "@svgdotjs/svg.draw.js";

SVGextend(SVG.Polygon, draw);

const SCALE_PRESETS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3];
const MIN_SCALE = 0.1;
const MAX_SCALE = 3;
const MIN_POLYGON_POINTS = 3;

// Gap in px kept between the pointer and the coordinate readout.
const READOUT_GAP = 16;
// Decimal places shown in the readout.
const READOUT_PRECISION = 3;

/*
 * Maps a point in canvas pixels onto -1..1 relative to the canvas centre.
 * Note this is measured off the live element, whereas `showCytoArray` still
 * normalizes against a hardcoded 260px half-extent; the two agree only while
 * the canvas is 520px square, which it is not at most viewport widths. That
 * hardcoded divisor predates this feature and is left for a separate change so
 * the polygon output contract is not altered here.
 */
const normalizeToCanvas = (x, y, rect) => [
  (x - rect.width / 2) / (rect.width / 2),
  (y - rect.height / 2) / (rect.height / 2)
];

/*
 * Anchors the readout to whichever pair of container edges keeps it on screen.
 * Anchoring the far side with `right`/`bottom` means the readout never has to be
 * measured to know it will not be clipped near the canvas edge.
 */
const buildReadoutAnchor = (x, y, rect) => {
  const anchor = x > rect.width / 2
    ? { right: `${Math.round(rect.width - x + READOUT_GAP)}px` }
    : { left: `${Math.round(x + READOUT_GAP)}px` };

  if (y > rect.height / 2) {
    anchor.bottom = `${Math.round(rect.height - y + READOUT_GAP)}px`;
  } else {
    anchor.top = `${Math.round(y + READOUT_GAP)}px`;
  }

  return anchor;
};

const ShapeBuilder = () => {
  const boardRef = useRef(null);
  const polyRef = useRef(null);
  const keyHandlersRef = useRef({});
  const basePointsRef = useRef(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  const [showCopied, setShowCopied] = useState(false);
  const [scale, setScale] = useState(1);
  const [currentPreset, setCurrentPreset] = useState(1);

  // `null` whenever the pointer is off the canvas, so position and visibility
  // can never disagree.
  const [readout, setReadout] = useState(null);
  const [showCoordinates, setShowCoordinates] = useState(true);
  const readoutFrameRef = useRef(0);
  const pendingReadoutRef = useRef(null);

  const handleCopyToClipboard = async () => {
    if (!result.trim()) return;

    try {
      await navigator.clipboard.writeText(result);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const getPlottedPoints = (poly) => {
    if (!poly) return null;
    const plotted = poly.plot();
    const points = Array.isArray(plotted) ? plotted : plotted?.value;
    return Array.isArray(points) ? points : null;
  };

  const showCytoArray = () => {
    const poly = polyRef.current;
    if (!poly) return;

    try {
      const points = getPlottedPoints(poly);
      if (!points) throw new Error("Invalid or empty polygon points");

      const normalized = points
        .map(([x, y]) => [(x - 260) / 260, (y - 260) / 260])
        .flat()
        .join(" ");
      setResult(normalized);
      setError(null);
    } catch (err) {
      setError("Failed to extract and normalize polygon points.");
      console.error("showCytoArray error:", err);
    }
  };

  const applyScale = (newScale) => {
    const poly = polyRef.current;
    if (!poly) return;

    const points = getPlottedPoints(poly);
    if (!points || points.length === 0) return;

    if (!basePointsRef.current) {
      basePointsRef.current = points;
    }

    const basePoints = basePointsRef.current;

    const xs = basePoints.map(p => p[0]);
    const ys = basePoints.map(p => p[1]);
    const centerX = (Math.max(...xs) + Math.min(...xs)) / 2;
    const centerY = (Math.max(...ys) + Math.min(...ys)) / 2;

    const scaledPoints = basePoints.map(([x, y]) => {
      const dx = x - centerX;
      const dy = y - centerY;
      return [centerX + dx * newScale, centerY + dy * newScale];
    });

    poly.plot(scaledPoints);
    showCytoArray();
  };

  const cancelReadoutFrame = () => {
    if (readoutFrameRef.current) {
      window.cancelAnimationFrame(readoutFrameRef.current);
      readoutFrameRef.current = 0;
    }
    pendingReadoutRef.current = null;
  };

  // Pointer events fire faster than the browser paints, so coalesce them onto a
  // single animation frame rather than re-rendering once per event.
  const scheduleReadout = (next) => {
    pendingReadoutRef.current = next;
    if (readoutFrameRef.current) return;

    readoutFrameRef.current = window.requestAnimationFrame(() => {
      readoutFrameRef.current = 0;
      setReadout(pendingReadoutRef.current);
    });
  };

  // Pointer events cover mouse, pen and touch with one standard API supported by
  // every current browser; `currentTarget` is always the canvas the handler is
  // bound to, even when the event bubbles up from a drawn shape.
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const [normalizedX, normalizedY] = normalizeToCanvas(x, y, rect);

    scheduleReadout({
      anchor: buildReadoutAnchor(x, y, rect),
      x: normalizedX.toFixed(READOUT_PRECISION),
      y: normalizedY.toFixed(READOUT_PRECISION)
    });
  };

  // Covers pointerleave and pointercancel: a touch or pen stream that is taken
  // over by the browser never emits a leave, and would otherwise strand the
  // readout on screen.
  const hideReadout = () => {
    cancelReadoutFrame();
    setReadout(null);
  };

  const handleScaleChange = (newScale) => {
    const clampedScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
    setScale(clampedScale);

    const matchingPreset = SCALE_PRESETS.find(p => Math.abs(p - clampedScale) < 0.01);
    setCurrentPreset(matchingPreset || clampedScale);

    applyScale(clampedScale);
  };

  const handlePresetChange = (event) => {
    const newPreset = event.target.value;
    setCurrentPreset(newPreset);
    setScale(newPreset);
    applyScale(newPreset);
  };

  const handleSliderChange = (event, newValue) => {
    handleScaleChange(newValue);
  };

  const toggleCoordinates = () => {
    setShowCoordinates((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    const poly = polyRef.current;
    if (!poly) return;

    if (e.ctrlKey) {
      poly.draw("param", "snapToGrid", 0.001);
    }

    if (e.key === "Enter" || e.key === "Escape") {
      closeShape();
    }

    if (e.ctrlKey && e.key.toLowerCase() === "z") {
      const points = getPlottedPoints(poly);
      if (!points) return;
      poly.plot(points.slice(0, -1));
    }
  };

  const handleKeyUp = (e) => {
    const poly = polyRef.current;
    if (!poly || e.ctrlKey) return;
    poly.draw("param", "snapToGrid", 16);
  };

  const attachKeyListeners = () => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    keyHandlersRef.current = { handleKeyDown, handleKeyUp };
  };

  const detachKeyListeners = () => {
    const { handleKeyDown, handleKeyUp } = keyHandlersRef.current;
    if (handleKeyDown) document.removeEventListener("keydown", handleKeyDown);
    if (handleKeyUp) document.removeEventListener("keyup", handleKeyUp);
    keyHandlersRef.current = {};
  };

  const initializeDrawing = () => {
    if (!boardRef.current) {
      setError("Canvas reference not found");
      return;
    }

    try {
      const draw = SVG()
        .addTo(boardRef.current)
        .size("100%", "100%")
        .polygon()
        .draw()
        .attr({ stroke: "#00B39F", "stroke-width": 1, fill: "none" });

      draw.draw("param", "snapToGrid", 16);
      draw.on("drawstart", attachKeyListeners);
      draw.on("drawdone", detachKeyListeners);

      polyRef.current = draw;
      setError(null);
    } catch (err) {
      setError(`Failed to initialize drawing: ${err.message}`);
    }
  };

  const clearShape = () => {
    const poly = polyRef.current;
    if (!poly) return;

    poly.draw("cancel");
    poly.remove();
    detachKeyListeners();
    polyRef.current = null;
    basePointsRef.current = null;
    setResult("");
    setScale(1);
    setCurrentPreset(1);
    initializeDrawing();
  };

  const closeShape = () => {
    const poly = polyRef.current;
    if (!poly) return;

    poly.draw("done");
    const points = getPlottedPoints(poly);
    if (!points || points.length < MIN_POLYGON_POINTS) {
      clearShape();
      return;
    }

    poly.fill("#00B39F");
    basePointsRef.current = points;
    showCytoArray();
  };

  useEffect(() => {
    initializeDrawing();
    return () => {
      cancelReadoutFrame();
      detachKeyListeners();
      if (polyRef.current) {
        polyRef.current.draw("cancel");
        polyRef.current.remove();
        polyRef.current = null;
      }
    };
  }, []);

  return (
    <Wrapper>
      <CanvasContainer>
        <StyledSVG
          ref={boardRef}
          width="100%"
          height="100%"
          onDoubleClick={closeShape}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerMove}
          onPointerLeave={hideReadout}
          onPointerCancel={hideReadout}
        >
          <defs>
            <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#797d7a" strokeWidth="1" />
            </pattern>
          </defs>
          <rect className="grid" width="100%" height="100%" fill="url(#grid)" />
        </StyledSVG>

        {showCoordinates && readout && (
          /* Decorative, pointer-only overlay: keep it out of the a11y tree. */
          <CoordinateDisplay aria-hidden="true" style={readout.anchor}>
            X: {readout.x}, Y: {readout.y}
          </CoordinateDisplay>
        )}

        {error && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "red",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px"
          }}>
            {error}
          </div>
        )}
      </CanvasContainer>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 3, mb: 3, flexWrap: "wrap" }}>
        <Button variant="contained" onClick={clearShape}>Clear</Button>
        <Button variant="contained" onClick={closeShape}>Close Shape</Button>
        <Button
          variant="contained"
          onClick={toggleCoordinates}
          aria-pressed={showCoordinates}
        >
          {showCoordinates ? "Hide Coordinates" : "Show Coordinates"}
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 2 }}>
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select
              id="scale-preset-select"
              value={currentPreset}
              onChange={handlePresetChange}
              displayEmpty
              aria-label="Scale preset"
              sx={(theme) => ({
                color: theme.palette.mode === "dark" ? "#fff" : "inherit",
                "& .MuiSelect-icon": {
                  color: theme.palette.mode === "dark" ? "#fff" : "inherit",
                },
              })}
            >
              {SCALE_PRESETS.map((preset) => (
                <MenuItem key={preset} value={preset}>
                  {preset}×
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ width: 150, display: "flex", alignItems: "center", gap: 1 }}>
            <Slider
              value={scale}
              onChange={handleSliderChange}
              min={MIN_SCALE}
              max={MAX_SCALE}
              step={0.01}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value.toFixed(2)}×`}
              marks={SCALE_PRESETS.map(value => ({ value, label: "" }))}
              aria-label="Scale slider"
              sx={{ flexGrow: 1 }}
            />
          </Box>

          <Typography variant="body2" sx={{ minWidth: "50px", fontWeight: 500 }}>
            {scale.toFixed(2)}×
          </Typography>
        </Box>
      </Box>

      <OutputBox>
        <Typography variant="subtitle1" component="h6">
          Polygon Coordinates (SVG format):
        </Typography>
        <div style={{ position: "relative" }}>
          <textarea readOnly value={result} />
          {result.trim() && (
            <CopyButton
              onClick={handleCopyToClipboard}
              disabled={!result.trim()}
            >
              {showCopied ? (
                "Copied"
              ) : (
                <CopyIcon style={{ width: "20px", height: "20px" }} />
              )}
            </CopyButton>
          )}
        </div>
      </OutputBox>
    </Wrapper>
  );
};

export default ShapeBuilder;

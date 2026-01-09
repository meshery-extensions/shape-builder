// /* global window */
import React, { useEffect, useRef, useState } from "react";
import { Wrapper, CanvasContainer, OutputBox, StyledSVG, CopyButton } from "./shapeBuilder.styles";
import { Button, Typography, Box, CopyIcon, Select, MenuItem, Slider, FormControl } from "@sistent/sistent";
import { SVG, extend as SVGextend } from "@svgdotjs/svg.js";
import draw from "@svgdotjs/svg.draw.js";

SVGextend(SVG.Polygon, draw);

const SCALE_PRESETS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3];
const MIN_SCALE = 0.1;
const MAX_SCALE = 3;

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

  const handleKeyDown = (e) => {
    const poly = polyRef.current;
    if (!poly) return;

    if (e.ctrlKey) {
      poly.draw("param", "snapToGrid", 0.001);
    }

    if (e.key === "Enter" || e.key === "Escape") {
      poly.draw("done");
      poly.fill("#00B39F");
      showCytoArray();
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
    poly.fill("#00B39F");
    const points = getPlottedPoints(poly);
    if (points && points.length > 0) {
      basePointsRef.current = points;
    }
    showCytoArray();
  };

  useEffect(() => {
    initializeDrawing();
    return () => {
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
        >
          <defs>
            <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#797d7a" strokeWidth="1" />
            </pattern>
          </defs>
          <rect className="grid" width="100%" height="100%" fill="url(#grid)" />
        </StyledSVG>
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 2 }}>
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select
              id="scale-preset-select"
              value={currentPreset}
              onChange={handlePresetChange}
              displayEmpty
              aria-label="Scale preset"
              sx={{
                color: "#fff",
                "& .MuiSelect-icon": {
                  color: "#fff"
                }
              }}
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

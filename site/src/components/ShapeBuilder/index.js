// /* global window */
import React, { useEffect, useRef, useState } from "react";
import { Wrapper, CanvasContainer, OutputBox, StyledSVG } from "./shapeBuilder.styles";
import { Button, Typography, Box } from "@sistent/sistent";
import { SVG, extend as SVGextend } from "@svgdotjs/svg.js";
import draw from "@svgdotjs/svg.draw.js";

SVGextend(SVG.Polygon, draw);

const ShapeBuilder = () => {
  const boardRef = useRef(null);
  const polyRef = useRef(null);
  const keyHandlersRef = useRef({});
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

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

  const handleMaximize = () => {
    const poly = polyRef.current;
    if (!poly) return;

    const points = getPlottedPoints(poly);
    if (!points) return;
    const xs = points.map(p => p[0]);
    const ys = points.map(p => p[1]);

    const width = Math.abs(Math.max(...xs) - Math.min(...xs));
    const height = Math.abs(Math.max(...ys) - Math.min(...ys));

    poly.size(width > height ? 520 : undefined, height >= width ? 520 : undefined);
    poly.move(0, 0);
    showCytoArray();
  };

  const handleKeyDown = (e) => {
    const poly = polyRef.current;
    if (!poly) return;

    if (e.ctrlKey) {
      poly.draw("param", "snapToGrid", 0.001);
    }

    if (e.key === "Enter") {
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
    setResult("");
    initializeDrawing();
  };

  const closeShape = () => {
    const poly = polyRef.current;
    if (!poly) return;

    poly.draw("done");
    poly.fill("#00B39F");
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
        <StyledSVG ref={boardRef} width="100%" height="100%">
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

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3, mb: 3, flexWrap: "wrap" }}>
        <Button variant="contained" onClick={clearShape}>Clear</Button>
        <Button variant="contained" onClick={closeShape}>Close Shape</Button>
        <Button variant="contained" onClick={handleMaximize}>Maximize</Button>
      </Box>

      <OutputBox>
        <Typography variant="subtitle1" component="h6">
          Polygon Coordinates (SVG format):
        </Typography>
        <textarea readOnly value={result} />
      </OutputBox>
    </Wrapper>
  );
};

export default ShapeBuilder;

// gatsby-browser.js
export const onInitialClientRender = () => {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = () => {
        // Small delay to ensure SVG.js is fully initialized
        setTimeout(resolve, 100);
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  // Load SVG.js first, then load svg.draw.js after it's ready
  loadScript("/js/svg.min.js")
    .then(() => {
      // Ensure SVG.js is properly initialized
      if (window.SVG) {
        return loadScript("/js/svg.draw.min.js");
      } else {
        throw new Error("SVG.js failed to initialize");
      }
    })
    .catch((error) => {
      console.error("Error loading SVG libraries:", error);
    });
};

// gatsby-browser.js
export const onInitialClientRender = () => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };
  
    loadScript('/js/svg.min.js');
    loadScript('/js/svg.draw.min.js');
  };
  
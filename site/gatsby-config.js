const rawPrefix = process.env.PATH_PREFIX;
const pathPrefix =
  rawPrefix && String(rawPrefix).trim().length
    ? `/${String(rawPrefix).replace(/^\/+|\/+$/g, "")}`
    : undefined;

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  ...(pathPrefix != null ? { pathPrefix } : {}),
  siteMetadata: {
    title: "Meshery Shape Builder",
    siteUrl: "https://shapes.meshery.io",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Meshery Shape Builder",
        short_name: "Shapes",
        start_url: "/",
        background_color: "#3c494f",
        theme_color: "#00b39f",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png",
      },
    },
  ],
};


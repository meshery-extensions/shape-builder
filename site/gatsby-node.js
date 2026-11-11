exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  // fallbacks for node core modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    process: require.resolve("process/browser"),
    url: require.resolve("url/"),
  };

  // Gatsby's built-in eslint-webpack-plugin passes legacy (eslintrc) options
  // that ESLint 10 rejects, which breaks `gatsby develop`. Linting is handled
  // by `npm run checklint` / CI with eslint.config.mjs instead.
  config.plugins = config.plugins.filter(
    (plugin) => plugin.constructor.name !== "ESLintWebpackPlugin"
  );

  actions.replaceWebpackConfig(config);
};

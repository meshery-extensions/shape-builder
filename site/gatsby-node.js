exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  // fallbacks for node core modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    process: require.resolve("process/browser"),
    url: require.resolve("url/"),
  };

  actions.replaceWebpackConfig(config);
};

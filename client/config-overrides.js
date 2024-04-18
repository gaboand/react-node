module.exports = function override(config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http")
    };
    return config;
  };
  
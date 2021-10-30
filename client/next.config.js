module.exports = {
  // Enable hot reloading
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  experimantal: {
    concurrentFeatures: true,
    serverComponents: true,
  },
};

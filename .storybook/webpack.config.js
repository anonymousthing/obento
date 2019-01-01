const defaultConfig = require('../config/webpack.config.dev');

module.exports = (baseConfig, env, config) => {
  config.module.rules = defaultConfig.module.rules;
  config.resolve.extensions = [
    ...config.resolve.extensions,
    ...defaultConfig.resolve.extensions,
  ];

  return config;
};

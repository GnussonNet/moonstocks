module.exports = {
  reactStrictMode: true,
};

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./'],
          prependData: `@import "./styles/imports.scss";`,
      }
  }
  return defaultConfig;
}
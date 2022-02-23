const {override, addWebpackAlias, addLessLoader} = require("customize-cra");
const path = require("path");

module.exports = override(
  addLessLoader({
    lessOptions: {
      localIdentName: '[local]--[hash:base64:5]'
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  config => config
)

const {override, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(
  // addLessLoader({
  //   lessOptions: {
  //     javascriptEnabled: true,
  //     sourceMap: false
  //   }
  // }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  config => config
)

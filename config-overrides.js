const {override, addWebpackAlias, addLessLoader} = require("customize-cra");
const path = require("path");

module.exports = override(
  addLessLoader({
    lessOptions:{
      paths: [path.resolve(__dirname, "src/")],
      javascriptEnabled: true,
      sourceMap: true
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  config => config
)

const {override, addWebpackAlias, addLessLoader, fixBabelImports} = require("customize-cra");
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
  fixBabelImports('import',{
    libraryName: '@alex_xu/react-loading',
    libraryDirectory: 'es',
    camel2DashComponentName: false,
    style: true,
  }),
  config => config
)

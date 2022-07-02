const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app){
  app.use(createProxyMiddleware('/api', {
    target: 'http://120.79.121.94:8001/', //'https://elm.cangdu.org/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }))
}

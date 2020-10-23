module.exports = {
    //配置别名
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
  devServer: {
/*    open: true, //浏览器自动打开页面
    host: 'localhost', //如果是真机测试，就使用这个IP
    port: 8080,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）*/
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://123.207.32.32:8000/',
  //    target: 'http://39.99.177.49:8080/',
        changeOrigin: true,//设置是否跨域
        ws:true,
        pathRewrite:{
          '^/api':'/'
        }
      }
    }
  }
}

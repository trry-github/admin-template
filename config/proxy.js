// 本地代理配置请求域名
const urlData = {
    test: 'http://192.168.3.35:8081/',
    other: 'http://192.168.3.179:8081',
    daily: 'https://ksh-api.yaomaitong.net/',
    // daily: "https://ksh-api.yaomaitong.cn/",
    dev: 'http://api-dev.yaomaitong.pro/',
    // dev: 'https://192.168.3.205:8081/',
    publish: 'https://ksh-api.yaomaitong.cn/',
    pre: 'https://ksh-api.yaomaitong-pre.cn/'
}
let url = urlData[process.env.NODE_ENV] || urlData['dev']
module.exports = {
    '/gateway/qxs-api': {
        // 将www.exaple.com印射为/apis
        target: url, // 接口域名
        changeOrigin: true, // 是否跨域
        secure: false,
        pathRewrite: {
            '^/gateway/qxs-api': '/qxs-api/' // 需要rewrite的,
            // "^/qxs-api": "/35/qxs-api" //需要rewrite的,
        }
    },
    '/gateway/mall': {
        //   以'/api'开头的请求会被代理进行转发
        target: url, //   要发向的后台服务器地址
        changeOrigin: true,
        pathRewrite: {
            '^/gateway/mall': '/mall/'
        }
    },
    '/gateway/knowledge-mall': {
        // 将www.exaple.com印射为/apis
        target: url, // 接口域名
        changeOrigin: true, // 是否跨域
        secure: false,
        pathRewrite: {
            '^/gateway/knowledge-mall': '/knowledge-mall/' // 需要rewrite的,
        }
    },
    '/gateway/ksh-api': {
        // 将www.exaple.com印射为/apis
        target: urlData['dev'], // 接口域名
        changeOrigin: true, // 是否跨域
        secure: false,
        pathRewrite: {
            '^/gateway/ksh-api': '/ksh-api/'
        }
    }
}

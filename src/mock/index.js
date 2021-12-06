
// 导入mockjs
// 具体mock配置请参考 http://mockjs.com
const Mock = require('mockjs')
const mockContext = require.context('./modules', true, /\.js$/)
mockContext.keys().forEach(v => {
    mockContext(v).default.forEach(item => {
        if (process.env.NODE_ENV === 'development' && item?.isOpen && process.env.VUE_APP_OPEN_MOCK) {
            Mock.mock(item.url, item.method, item.response)
        }
    })
})

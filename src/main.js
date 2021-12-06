import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import store from './store'
import router from './router'

import '@/assets/styles/element-theme.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
// 注册 element-plus icons
import * as ElementPlusIcons from '@element-plus/icons'
for (let key in ElementPlusIcons) {
    app.component(`ElIcon${key}`, ElementPlusIcons[key])
}

// 自动加载全局组件
import { createComponent } from '@/components/autoRegister'
createComponent(app)

// 自动加载 svg 图标
const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// 自定义指令
import directive from '@/util/directive'
directive(app)

// 全局变量（$api、$dayjs ...）
import globalProperties from '@/util/global.properties'
globalProperties(app)

// mock
import './mock/index.js'

// 全局样式
import '@/assets/styles/globals.scss'

app
    .use(store)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn
    }).mount('#app')

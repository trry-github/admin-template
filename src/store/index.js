import { createStore, createLogger } from 'vuex'

const modules = {}
const modulesContext = require.context('./modules', true, /(.js)$/)
modulesContext.keys().forEach(path => {
    const storeModel = modulesContext(path).default
    modules[path.slice(2, -3)] = storeModel
})

export default createStore({
    modules: modules,
    strict: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})

import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import res from './modules/res'
import index from './modules/index'
import article from './modules/article'

import createLogger from '../plugins/store-logger/logger'

Vue.use(Vuex)

let debug = process.env.NODE_ENV !== 'production'
debug = false
export default new Vuex.Store({
  modules: {
    common,
    res,
    article,
    index
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

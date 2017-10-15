import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
//import * as actions from './actions'
//import * as getters from './getters'
import auth from './modules/auth'
import createLogger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  //getters,
  modules: {
    auth
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
  plugins: [
    createPersistedState({
      paths: ['auth.token', 'auth.user'],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})
import * as types from './../mutation-types'
import { API_URL } from './../../actions'
import axios from 'axios';

// initial state
const state = {
  isAuthenticated: false,
  error: '',
  token: '',
  user: {},
  profile: {}
}

const getters = {
  isAuthenticated: state => !!state.token
}

const actions = {
  loginLocal ({ commit }, { email, password }) {
    commit(types.FETCHING)
    axios.post(`${API_URL}/auth/login`, { email, password })
      .then((response) => {
        commit(types.AUTH_USER, response.data)
        commit(types.NOT_FETCHING)
      })
      .catch((error) => {
        commit(types.AUTH_ERROR, { error  })
        commit(types.NOT_FETCHING)
      });
  },

  logout ({ commit }) {
    commit(types.UNAUTH_ERROR, { '' })
  }
}

const mutations = {
  [types.AUTH_USER] (state, { token, user }) {
    state.error = ''
    state.token = token
    state.user = user
    state.isAuthenticated = true
  },

  [types.UNAUTH_USER] (state, { error }) {
    state.error = error
    state.token = ''
    state.user = {}
    state.isAuthenticated = false
  },

  [types.AUTH_ERROR] (state, { error }) {
    state.error = error
  },

  [types.GET_PROFILE] (state, { profile }) {
    state.profile = profile
  },

  [types.UPDATE_PROFILE] (state, { profile }) {
    state.profile = profile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
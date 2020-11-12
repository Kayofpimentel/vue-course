import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    focusedComponent: "Inicio"
  },
  getters: {
    getComponent(state) {
      return state.focusedComponent
    }
  },
  mutations: {
    setComponent(state, payload) {
      state.focusedComponent = payload
    }
  },
  actions: {},
})

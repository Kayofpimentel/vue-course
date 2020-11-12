import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    focusedComponent: "Inicio"
  },
  getters: {
    focusedComponent(state) {
      return state.focusedComponent
    }
  },
  mutations: {
    changeFocus(state, payload) {
      state.focusedComponent = payload
    }
  },
  actions: {},
})

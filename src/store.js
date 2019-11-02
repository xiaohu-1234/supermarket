import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '',
    imgPath: ''
  },
  mutations: {
    setPath(state, path) {
      state.path = path;
    },
    setimgPath(state, path) {
      state.imgPath = path;
    }
  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savePinModal: false,
    selectedPin: {},
    allBoards: [],
    boardsUpdate: false,
    showInfo: false
  },
  mutations: {
    ToggleModal (state, data) {
      state.savePinModal = data
    },
    PinSelected (state, data) {
      state.selectedPin = data
    },
    OnAllBoards (state, data) {
      state.allBoards = data
    },
    BoardsUpdate (state, data) {
      state.boardsUpdate = data
      if (data) {
        state.allBoards = []
      }
    },
    ToggleInfo (state, data) {
      state.showInfo = data
    }
  },
  actions: {
    TOGGLE_MODAL ({commit, state}, data) {
      commit('ToggleModal', data)
    },
    SELECTED_PIN ({commit, state}, data) {
      commit('PinSelected', data)
    },
    ALL_BOARDS ({commit, state}, data) {
      commit('OnAllBoards', data)
    },
    ON_BOARDSUPDATE ({commit, state}, data) {
      commit('BoardsUpdate', data)
    },
    TOGGLEINFO ({commit, state}, data) {
      commit('ToggleInfo', data)
    }
  },
  getters: {
    modalStatus (state) {
      return state.savePinModal
    }
  }
})

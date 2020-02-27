import axios from 'axios'

export default {
  namespaced: true,
  state: {
    diceResults: [],
    isLoading: false,
    error: null
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    getResults (state) {
      return state.diceResults
    }
  },
  actions: {
    addNewResult ({ commit }, diceResult) {
      commit('CREATING_DICE')
      return axios.post('/api/dice_results', diceResult)
        .then(response => {
          commit('CREATING_DICE_SUCCESS', response)
        })
        .catch(e => {
          commit('CREATING_DICE_ERROR', e)
        })
    },
    deleteResult ({ commit }, diceResultId) {
      commit('DELETING_DICE')
      return axios.delete(diceResultId)
        .then(response => {
          commit('DELETING_DICE_SUCCESS', response)
        })
        .catch(e => {
          commit('DELETING_DICE_ERROR', e)
        })
    }
  },
  mutations: {
    'CREATING_DICE' (state) {
      state.isLoading = true
      state.error = null
    },
    'CREATING_DICE_SUCCESS' (state, diceResult) {
      state.isLoading = false
      state.error = null
      state.diceResults.push(diceResult)
    },
    'CREATING_DICE_ERROR' (state, error) {
      state.isLoading = false
      state.error = error
    },
    'DELETING_DICE' (state) {
      state.isLoading = true
      state.error = null
    },
    'DELETING_DICE_SUCCESS' (state) {
      state.isLoading = false
      state.error = null
      state.diceResults.splice(-1, 1)
    },
    'DELETING_DICE_ERROR' (state, error) {
      state.isLoading = false
      state.error = error
    }
  }
}

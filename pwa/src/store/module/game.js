import axios from 'axios'

export default {
  namespaced: true,
  state: {
    games: [],
    currentGame: null,
    isLoading: false,
    error: null
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    currentGame (state) {
      return state.currentGame
    }
  },
  actions: {
    addNewGame ({ commit }, game) {
      commit('CREATING_GAME')
      return axios.post('/api/games', game)
        .then(result => {
          commit('CREATING_GAME_SUCCESS', result.data)
        })
        .catch(e => {
          commit('CREATING_GAME_ERROR', e)
        })
    },
    load ({ commit }, gameId) {
      commit('LOADING_GAME')
      return axios.get('/api/games/' + gameId)
        .then(result => {
          commit('LOADING_GAME_SUCCESS', result.data)
        })
        .catch(e => {
          commit('LOADING_GAME_ERROR', e)
        })
    }
  },
  mutations: {
    'CREATING_GAME' (state) {
      state.isLoading = true
      state.error = null
    },
    'CREATING_GAME_SUCCESS' (state, game) {
      state.isLoading = false
      state.error = null
      state.games.push(game)
      state.currentGame = game
    },
    'CREATING_GAME_ERROR' (state, error) {
      state.isLoading = false
      state.error = error
    },
    'LOADING_GAME' (state) {
      state.isLoading = true
      state.error = null
    },
    'LOADING_GAME_SUCCESS' (state, game) {
      state.isLoading = false
      state.error = null
      state.currentGame = game
    },
    'LOADING_GAME_ERROR' (state, error) {
      state.isLoading = false
      state.error = error
    }
  }
}

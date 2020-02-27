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
    games (state) {
      return state.games
    },
    currentGame (state) {
      return state.currentGame
    }
  },
  actions: {
    loadAll ({ commit }) {
      commit('LOADING_ALL_GAMES')
      return axios.get('/api/games')
          .then(result => {
            commit('LOADING_ALL_GAMES_SUCCESS', result.data['hydra:member'])
          })
          .catch(e => {
            commit('LOADING_ALL_GAMES_ERROR', e)
          })
    },
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
    'LOADING_ALL_GAMES' (state) {
      state.isLoading = true
      state.error = null
    },
    'LOADING_ALL_GAMES_SUCCESS' (state, games) {
      state.isLoading = false
      state.error = null
      state.games = games
    },
    'LOADING_GAME' (state) {
      state.isLoading = true
      state.error = null
    },
    'LOADING_GAME_SUCCESS' (state, game) {
      state.isLoading = false
      state.error = null
      state.currentGame = game
      //set game results
      this.dispatch('dice/setResults', game.diceResults)
    },
    'LOADING_GAME_ERROR' (state, error) {
      state.isLoading = false
      state.error = error
    }
  }
}

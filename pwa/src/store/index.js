import Vue from 'vue'
import Vuex from 'vuex'
import Game from './module/game'
import Dice from './module/dice'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    game: Game,
    dice: Dice
  }
})

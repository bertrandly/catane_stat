<template>
  <div class="container">

    <div class="text-left">
      <router-link
              :to="{ name: 'gameList'}"
              class="btn btn-secondary btn-sm"
      >
        <b-icon-arrow-left></b-icon-arrow-left>
        Retour à la liste des parties
      </router-link>
    </div>

    <loading :active.sync="isLoading" :is-full-page="fullPageLoading"></loading>

    <div v-if="currentGame">
      <h3 class="m-5">{{ currentGame.name }}</h3>

      <!--buttons-->
      <div class="row">
        <div class="col-3 p-2 mb-2" v-for="index in possibilities" :key="index">
          <b-button block variant="warning" @click="addDice(index)">
            {{ index }}
          </b-button>
        </div>

        <div class="col-3 p-2 mb-2">
          <b-button block variant="warning" @click="cancelLast()">
            X
          </b-button>
        </div>
      </div>

      <!--chart-->
      <div v-if="results.length > 0">
        <!--Résultats-->
        <h2>Résultats:</h2>
        <dice-result v-bind:key="index" v-for="(result, index) in results" v-bind:result="result">
        </dice-result>

        <h2 class="mt-4">Répartitions:</h2>
        <pure-vue-chart
                :points=stats
                :show-values="true"
                :show-y-axis="true"
                :show-x-axis="true"
                :height="200"
        />
      </div>
    </div>

  </div>
</template>

<script>
// https://github.com/djaxho/pure-vue-chart?ref=madewithvuejs.com
import DiceResult from './DiceResult'
import PureVueChart from 'pure-vue-chart'

export default {
  name: 'DiceResultList',
  components: { DiceResult, PureVueChart },
  data () {
    return {
      possibilities: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      //results: [],
      stats: []
    }
  },
  created () {
    this.$store.dispatch('game/load', this.$route.params.gameId)
      .then(() => {
        //let currentGame = this.$store.getters['game/currentGame']
        //this.results = currentGame.diceResults
        this.updateStat()
      })
  },
  /* accessible depuis le template */
  computed: {
    currentGame () {
      return this.$store.getters['game/currentGame']
    },
    results () {
      return this.getResults()
    },
  },
  methods: {
    getResults () {
      return this.$store.getters['dice/getResults']
    },
    addDice (result) {
      let currentGame = this.$store.getters['game/currentGame']
      let dice = {
        'number': result,
        'game': currentGame['@id']
      }

      this.$store.dispatch('dice/addNewResult', dice)
        .then(() => {
          //this.results.push(dice)
          this.updateStat()
        })
    },
    cancelLast () {
      let results = this.getResults();
      const lastResult = results[results.length - 1]
      this.$store.dispatch('dice/deleteResult', lastResult['@id'])
        .then(() => {
          //this.results.splice(-1, 1)
          this.updateStat()
        })
    },
    updateStat () {
      let results = this.getResults();
      this.stats = new Array(12).fill(0)
      for (let i = 0; i < results.length; i++) {
        let result = results[i]
        this.stats[result.number - 1] += 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1{
    text-transform: uppercase;
  }
</style>

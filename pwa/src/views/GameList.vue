<template>
  <div class="container">
  <h1>Parties</h1>

    <div class="col-12 mb-4 ">
      <router-link
              :to="{ name: 'new-game'}"
              class="btn btn-success"
      >
        Démarrer une nouvelle partie
      </router-link>
    </div>
  <div v-if="games.length > 0">
    <p>ou charger une des <span>{{games.length}}</span> parties enregistrées</p>
    <b-card class="col-12 mb-1" v-for="game in games" :key="'game-'+game.id">
      <b-card-title>{{game.name }}</b-card-title>
      <b-card-text>{{game.createdAt  | formatDate }}</b-card-text>
      <router-link
              :to="{ name: 'game', params: { gameId: game.id }}"
              class="btn btn-primary"
      >
       Voir
      </router-link>
    </b-card>
  </div>

  </div>
</template>

<script>

export default {
  name: 'gameList',
  components: {
  },
  created () {
    this.$store.dispatch('game/loadAll')
  },
  computed: {
    games () {
      return this.$store.getters['game/games']
    },
  },
}
</script>

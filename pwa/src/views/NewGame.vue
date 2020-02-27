<template>
  <div class="about">
    <h1>Nouvelle partie</h1>

    <loading :active.sync="isLoading" :is-full-page="fullPageLoading"></loading>

    <b-card class="col-12 col-md-6 mx-auto mb-1 text-left">
      <b-form>
        <b-form-group label="Nom:" label-for="name">
          <b-form-input type="text" id="name" v-model="form.name">
            <b-form-invalid-feedback>
              Le nom est obligatoire
            </b-form-invalid-feedback>
          </b-form-input>
        </b-form-group>

        <b-form-group label="Date:" label-for="createdAt">
          <datetime type="datetime"  id="createdAt" v-model="form.createdAt">
            <b-form-invalid-feedback>
              La date est obligatoire
            </b-form-invalid-feedback>
          </datetime>
        </b-form-group>

        <button type="button" class="btn btn-primary" v-on:click="onSubmit"
                :disabled="isLoading || invalidForm">
          Commencer
        </button>

      </b-form>
    </b-card>



  </div>
</template>

<script>

import Loading from 'vue-loading-overlay'

export default {
  name: 'NewGame',
  components: { Loading },
  data: () => {
    return {
      fullPageLoading: true,
      form: {
        name: '',
        createdAt: new Date()
      }
    }
  },
  created () {
    this.form.createdAt = this.getNow()
  },

  computed: {
    isLoading () {
      return this.$store.getters['game/isLoading']
    },
    invalidForm () {
      return !this.form.name
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.$store.dispatch('game/addNewGame', this.form)
        .then(() => {
          // redirect to 'game' page
          let currentGame = this.$store.getters['game/currentGame']
          this.$router.push({ name: 'game', params: { gameId: currentGame.id } })
        })
    },
    getNow: function () {
      const today = new Date()
      return today.toISOString()
    }
  }
}
</script>

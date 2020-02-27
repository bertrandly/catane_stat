<template>
  <div class="about">
    <h1>This is new page</h1>

    <loading :active.sync="isLoading" :is-full-page="fullPageLoading"></loading>

    <b-form>
      <b-form-group>
        <b-form-input type="text" id="name" v-model="form.name">
          <b-form-invalid-feedback>
            Le nom est obligatoire
          </b-form-invalid-feedback>
        </b-form-input>
        <datetime type="datetime"  id="createdAt" v-model="form.createdAt">
          <b-form-invalid-feedback>
            La date est obligatoire
          </b-form-invalid-feedback>
        </datetime>
      </b-form-group>

      <button type="button" class="btn btn-primary" v-on:click="onSubmit"
              :disabled="isLoading || invalidForm">
        Save
      </button>

    </b-form>
    <p>
      le nom est {{this.form.name}}
    </p>
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
        .then(result => {
          // redirect to 'game' page
          let currentGame = this.$store.getters['game/currentGame']
          this.$router.push({ name: 'dice', params: { gameId: currentGame.id } })
        })
    },
    getNow: function () {
      const today = new Date()
      return today.toISOString()
    }
  }
}
</script>

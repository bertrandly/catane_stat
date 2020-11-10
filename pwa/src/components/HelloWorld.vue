<template>
  <div class="hello">
    <h1 class="my-4">{{ msg }}</h1>
    <p>
      Amis de Catane et des statistiques, utiliser cette application pour savoir si oui ou non... vous n'avez vraiment pas de chance aux dés
    </p>
    <p>
      <router-link
              :to="{ name: 'new-game'}"
              class="btn btn-success"
      >
        Démarrer une nouvelle partie
      </router-link>
    </p>

    <p class="mt-5">
      <b-button size="sm" @click="toogleDark()">
        Basculer en mode sombre
      </b-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data () {
    return {
      darkMode: false
    }
  },
  methods: {
    toogleDark() {
      this.darkMode = !this.darkMode
      const el = document.body;
      if(this.darkMode){
        el.classList.add('dark');
      }else{
        el.classList.remove('dark');
      }

    }
  }
}
</script>



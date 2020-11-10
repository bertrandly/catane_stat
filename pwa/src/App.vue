<template>
  <div id="app">

    <Offline @detected-condition="handleConnectivityChange">
    </Offline>

    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/games">Jeux</router-link> |
      <router-link to="/about">A propos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  body.dark{
    background-color: #1b1b1b;
  }
  .dark #app,
  .dark #nav a{
    color: ghostwhite;
  }
  .dark .list-group-item{
    background-color: slategrey;
  }
  .dark .list-group-item-action{
    color: ghostwhite;
  }
</style>

<script>
  import Offline from  'v-offline'
  export  default {
    components: { Offline },
    mounted () {},
    methods: {
      handleConnectivityChange (status) {
        if (!status) { this.toast('b-toaster-top-full') }
      },
      toast (toaster, append  =  false) {
        this.$bvToast.toast('Vous n\'êtes pas connecté à l\'internet. Veuillez activer le réseau pour pouvoir accéder aux données', {
          title:  'Connexion',
          toaster: toaster,
          solid:  true,
          appendToast: append
        })
      }
    }
  }
</script>



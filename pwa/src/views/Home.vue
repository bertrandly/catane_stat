<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/catane.jpg">
    <HelloWorld msg="Bienvenue sur l'application Catane"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

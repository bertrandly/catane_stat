<template>
  <div class="dice-result">
    {{ result.number }}
  </div>
</template>

<script>
export default {
  name: 'DiceResult',
  props: ['result'],
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dice-result{
  border: 1px solid #fbac36;
  min-width: 20px;
  min-height: 20px;
  margin: 1px;
  display: inline-block;
}
</style>

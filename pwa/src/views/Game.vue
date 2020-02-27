<template>
  <div class="diceResultList">
    <DiceResultList/>
  </div>
</template>

<script>
// @ is an alias to /src
import DiceResultList from '@/components/DiceResultList.vue'

export default {
  name: 'diceResultList',
  components: {
    DiceResultList
  }
}
</script>

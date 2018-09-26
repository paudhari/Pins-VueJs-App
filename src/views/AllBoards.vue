<template>
  <div class="container-fluid">
    <div class="row" v-if="getAllBoards.length">
      <single-board v-for="(board, index) in getAllBoards" :key="index" :boardObj="board"/>
    </div>
    <div class="loading" v-else>
      Loading All Boards...
    </div>
  </div>
</template>
<script>
import SingleBoard from '../components/SingleBoard.vue'

export default {
  name: 'AllBoards',
  components: {
    SingleBoard
  },
  computed: {
    getAllBoards() {
      return this.$store.state.allBoards
    }
  }
}
</script>
<style lang="scss" scoped>
  .loading{
    text-align: center;
    font-weight: bold;
  }
</style>



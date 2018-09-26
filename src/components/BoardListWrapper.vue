<template>
  <div class="boardsListWrapper">
    <div class="boardsList">
      <ul class="listWrapper" v-if="getAllBoards.length > 0">
        <board-list v-for="(board, index) in getAllBoards" :key="index" :boardInfo="board" />
      </ul>
      <div v-else>
        Loading...
      </div>
    </div>
    <div class="createBoard">
      <button class="btn" @click="handleCreate">
        Create Board
      </button>
    </div>
  </div>
</template>
<script>
import BoardList from './BoardList';

export default {
  name: 'BoardListWrapper',
  components: {
    BoardList
  },
  methods: {
    handleCreate() {
      this.$emit('createBoard');
    }
  },
  computed: {
    getAllBoards() {
      return this.$store.state.allBoards
    }
  }
}
</script>


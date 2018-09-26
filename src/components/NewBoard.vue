<template>
  <div class="newBoard">
    <label>
      Name <br/>
      <input type="text" class="form-control" placeholder="New Name" v-model="boardName">
    </label>
    <div class="newBoardBtn">
      <button type="button" class="btn btn-light" id="cancel" @click="handleCancel">Cancel</button>
      <button type="button" class="btn btn-light" id="saveBtn" :disabled="!saveBtn" @click="handleCreate">Create</button>
    </div>
  </div>
</template>
<script>
import Boards from '../service/Boards'

export default {
  name: 'NewBoard',
  data() {
    return {
      boardName:'',
      saveBtn: false,
    }
  },
  methods: {
    handleCancel() {
      this.$emit('cancelPin')
    },
    async handleCreate() {
      try {
        const payload = {name: this.boardName}
        const data = await Boards.createBoard(payload)
        this.handleCancel()
        this.boardName = ''
        this.$store.dispatch('ON_BOARDSUPDATE', true)
      } catch(error) {
        console.log('=-=-=-==-=-=-=-=-=-Error=-=-=-=-=-')
        console.log(error)
        console.log('=-=-=-==-=-=-=-=-=-Error=-=-=-=-=-')
      }
    }
  },
  watch: {
    boardName(val1) {
      if(val1.trim() !== ''){
        this.saveBtn = true;
      } else {
        this.saveBtn = false;
      }
    }
  }
}
</script>


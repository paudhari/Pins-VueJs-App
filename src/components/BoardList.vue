<template>
  <li class="boardName" @click="boardSelected">
    <div class="boardImg">
      
    </div>
    <div class="bName">
      {{boardInfo.name}}
    </div>
    <div class="selectBoard">
      <button class="btn" @click="boardSelected">Save</button>
    </div>
  </li>
</template>
<script>
import Boards from '../service/Boards'

export default {
  name: 'BoardList',
  props: {
    boardInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    async boardSelected() {
      try {
        const payLoad = this.$store.state.selectedPin
        const id = this.boardInfo.id
        const data = await Boards.savePin(id, payLoad)
        this.$store.dispatch('TOGGLE_MODAL', false);
        this.$store.dispatch('TOGGLEINFO', true);
        console.log(data)
      } catch(error) {
        console.log('=-=-=-==-=-=-=-=-=-Error=-=-=-=-=-')
        console.log(error)
        console.log('=-=-=-==-=-=-=-=-=-Error=-=-=-=-=-')
      }
    }
  }
}
</script>
<style lang="scss">
  .boardName{
    display: flex;
    flex-direction: row;
    width: 100%;
    cursor: pointer;
    margin-bottom: 15px;
    &:hover {
      & .btn {
        display: block;
      }
    }
  }
  .bName{
    flex:1;
    text-align: left;
    padding-left: 10px;
    display: flex;
    align-items: center;
    color:#000;
  }
  .boardImg{
    width: 36px;
    height: 36px;
    background: #efefef;
    border-radius: 5px;
  }
  .selectBoard{
    & .btn{
      background: #bd081c;
      color:#fff;
      font-weight: bold;
      height: 36px;
      display: none;
    }
  }
</style>



<template>
  <modal-wrapper :show="show" :on-close="close">
    <div class="modal-content">
      <div class="closeBtn">
          <button type="button" class="close" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      <div class='pinPreview'>
        <div class="pintCard pintCard1">
          <div class="pincardImg1">
            <img :src="selectedPin.image_url" :alt="selectedPin.image_key">
          </div>
          <div class="pindescription">
            {{selectedPin.description}}
          </div>
        </div>
      </div>
      <div class="board">
        <div class="modal-header">
          <h5 class="modal-title" >Choose board</h5>
        </div>
        <board-list-wrapper v-if="!newPin" @createBoard="newPin = true"/>
        <new-board v-else @cancelPin="newPin = false"/>
      </div>
    </div>
  </modal-wrapper>
</template>
<script>
import ModalWrapper from './modal/ModalWrapper.vue';
import BoardListWrapper from './BoardListWrapper.vue';
import NewBoard from './NewBoard.vue';

export default {
  name: 'Savepin',
  components: {
    ModalWrapper,
    BoardListWrapper,
    NewBoard
  },
  props: {
    show: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      newPin: false,
      pinSelected: {},
    }
  },
  beforeDestroy() {
    this.$store.dispatch('SELECTED_PIN', {});
  },
  methods: {
    close() {
      this.$store.dispatch('TOGGLE_MODAL', false)
    }
  },
  computed: {
    selectedPin() {
      return this.$store.state.selectedPin
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/style/mixin.scss";
  .modal-content{
    display:flex;
    flex-direction: column;
    height: 100%;
    @include breakpoint-min(calc-rem(767)){
      flex-direction: row;
    }
  }
  .pinPreview,{
    padding: 15px;
    flex:1;
    @include breakpoint-min(calc-rem(767)){
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }
  .board{
    border-left: 1px solid #efefef;
    position: relative;
    flex:3;
    @include breakpoint-min(calc-rem(767)){
      flex:1;
    }
  }
  .boardsListWrapper{
    position: absolute;
    top: 63px;
    bottom: 0;
    width: 100%;
  }
  .boardsList{
    position: absolute;
    top:0px;
    bottom: 63px;
    width: 100%;
    overflow-y:auto;
    padding: 10px;
  }
  .createBoard{
    position: absolute;
    bottom: 0;
    height: 63px;
    width: 100%;
    border-top:1px solid #efefef;
    & .btn {
      width: 100%;
      height: 100%;

      &:before{
        content: '+';
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .listWrapper{
    padding: 0;
    margin: 0;
  }
  .newBoard{
    padding: 10px;
    text-align: left;
    & label {
      width: 100%;
    }
  }
  .newBoardBtn{
    display: flex;
    justify-content: space-between;
  }
  #saveBtn {
    background: #bd081c;
    color:#fff;
  }
  .pintCard1{
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    @include breakpoint-min(calc-rem(767)) {
      width: 80%;
      margin: auto;
      flex-direction: column;
    }
  }
  .pincardImg1{
    width: 100px;
    height: 100px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    @include breakpoint-min(calc-rem(767)) {
      width: 100%;
      height: auto;
      max-height: 300px
    }

    & img{
      width: 100%;
      position: absolute;
      top:0;
      left: 0;
      @include breakpoint-min(calc-rem(767)) {
        width: 100%;
        position: relative;
        top:0;
      }
    }
  }
  .pindescription{
    flex:1;
    padding-left: 15px;
    font-size: 14px;
    text-align: left;
    @include breakpoint-min(calc-rem(767)) {
      font-weight: bold
    }
  }
</style>

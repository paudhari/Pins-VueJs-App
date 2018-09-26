<template>
  <transition name="modalW">
    <div class="modal" @click="close" v-if="show" role="dialog" >
      <div class="modal-dialog" role="document" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'ModalWrapper',
    props: ['show', 'onClose'],
    methods: {
      close() {
        this.onClose();
      }
    },
    mounted() {
      document.addEventListener('keydown', (e) => {
        if (this.show && e.keyCode === 27) {
          this.onClose();
        }
      })
    }
  }
</script>
<style lang="scss">
@import "../../assets/style/mixin.scss";
.modal{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: block;
}
.modal-dialog{
  height: 500px;
  @include breakpoint-min(calc-rem(767)){
    max-width: 650px;
  }
}
.modalW-enter-active, .modalW-leave-active {
  transition: all .2s ease-in
}
.modalW-enter, .modalW-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.closeBtn{
  position: absolute;
  z-index: 111;
  right:10px;
  top:10px;
}
</style>


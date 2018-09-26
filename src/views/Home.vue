<template>
  <div class="container-fluid">
    <pins-wrapper />
    <savepin :show="show"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import PinsWrapper from '../components/pins/PinsWrapper';
import Savepin from '../components/Savepin';
export default {
  name: 'home',
  components: {
    PinsWrapper,
    Savepin,
  },
  data() {
    return {
      show: true,
    }
  },
  created() {
    this.show = this.modalStatus
  },
  computed: {
    ...mapGetters([
      'modalStatus'
    ])
  },
  watch: {
    modalStatus(val) {
      console.log(`=-=-=-=-=-=${val}=-=-=-=-=-=-=`)
      this.show = val;
    }
  }
}
</script>
<style lang="scss">
@import "../assets/style/mixin.scss";
.masonry {
  padding: 0;
  column-gap: 1.5em;
  font-size: .85em;

  @include breakpoint-min(calc-rem(400)) {
    column-count: 2;
  }
  @include breakpoint-min(calc-rem(700)) {
    column-count: 2;
  }
  @include breakpoint-min(calc-rem(900)) {
    column-count: 3;
  }
  @include breakpoint-min(calc-rem(1100)) {
    column-count: 5;
  }
}
.pins{
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-bottom: 10px;
}
.pintCard{
  padding: 10px;
  background: rgba(0,0,0,.05);
  border-radius: 5px;
  position: relative;
  display: block;
  cursor: zoom-in;
  margin-bottom: 10px;
  &:hover .savePinBtn{
    display: block;
  }
}
.savePinBtn{
  position: absolute;
  border: none;
  background: #bd081c;
  color:#fff;
  font-weight: bold;
  z-index: 1;
  right: 20px;
  top:20px;
  display: none;
}
.pintCardImg{
  width: 100%;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  & img{
    width: 100%;
  }
}
.pinCardTitleWrapper{
  font-weight: bold;
  color:#555;
  text-align: left;
  margin-top: 10px;
  font-size: 14px;
}
</style>


<template>
  <div class="masonry">
    <template v-if="pinsArray.length">
      <pin-card v-for="(pin, index) in pinsArray" :key="index" :cardInfo="pin"/>
    </template>
    <div class="loading" v-else>
      Loading Pins...
    </div>
  </div>
</template>
<script>
import PinCard from '../components/pins/PinCard';
import Boards from '../service/Boards';

export default {
  name: 'AllPins',
  components: {
    PinCard
  },
  data() {
    return {
      pinsArray: [],
      boardId: null,
    }
  },
  created() {
    this.boardId = this.$route.params.id;
    this.getAllPins();
  },
  methods: {
    async getAllPins() {
      try {
        const data = await Boards.getPins(this.boardId);
        this.pinsArray = data.data.pins;
      } catch(error) {
        console.log('==-==-=-=-=-=-Error=-=-=-=-=-=');
        console.log(error);
        console.log('==-==-=-=-=-=-Error=-=-=-=-=-=');
      }
    }
  }
}
</script>
<style lang="scss">
  .loading{
    text-align: center;
    font-weight: bold
  }
</style>


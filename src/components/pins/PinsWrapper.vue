<template>
  <div class="masonry">
    <pin-card v-for="(pin, index) in samplePins" :key="index" :cardInfo="pin"/>
  </div>
</template>
<script>
import PinCard from './PinCard';
import samplePins from '../../model/samplePins';
export default {
  name: 'PinsWrapper',
  components: {
    PinCard
  },
  data() {
    return {
      samplePins
    }
  }
}
</script>


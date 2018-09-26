<template>
  <div class="pins">
    <div class="pintCard" @click="handleCardlClick">
      <button class="btn savePinBtn" @click.stop="savePin">Save</button>
      <div class="pintCardImg">
        <img :src="cardInfo.image_url" :alt="cardInfo.image_key">
      </div>
      <div class="pinCardTitleWrapper">
        {{cardInfo.description}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pinCard',
  props: {
    cardInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    handleCardlClick() {
      console.log('card is clicked');
    },
    savePin() {
      console.log('Save pin btn is clicked');
      console.log(this.cardInfo.id);
      this.$store.dispatch('SELECTED_PIN', this.cardInfo);
      this.$store.dispatch('TOGGLE_MODAL', true);
    }
  }
}
</script>


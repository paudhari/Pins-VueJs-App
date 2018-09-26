<template>
  <div class="col-sm-4">
    <div class="pins">
      <div class="pintCard" @click="gotPin">
        <div class="pinCardImgWrapper">
          <div class="imgWrapper">
            <template v-if="getPinsLength">
              <img :src="getBoardImg" alt="">
            </template>
          </div>
        </div>
        <div class="pinCardTitleWrapper">
          {{boardObj.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingleBoard',
  props: {
    boardObj: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    gotPin() {
      this.$router.push({name:'pins', params: { id: this.boardObj.id }})
    }
  },
  computed: {
    getPinsLength() {
      let length = 0;
      if(this.boardObj.pins && this.boardObj.pins.length) {
        length = this.boardObj.pins.length;
      }
      return length
    },
    getBoardImg() {
      return this.boardObj.pins[0].hosted_image_url;
    }
  }
}
</script>
<style lang="scss" scoped>
  .pintCard{
  padding: 10px;
  background: rgba(0,0,0,.05);
  border-radius: 5px;
  position: relative;
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
}
  .pinCardImgWrapper{
    position: relative;
    width: 100%;
    padding-top: 100%;

    & .imgWrapper{
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: grey;
    }

    & img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
</style>



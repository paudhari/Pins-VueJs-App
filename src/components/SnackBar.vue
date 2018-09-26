<template>
  <div id="snackbar" v-if="infoStatus">Pin Saved!</div>
</template>
<script>
export default {
  name: 'SnackBar',
  data() {
    return{
      isShowing: true,
    }
  },
  mounted() {
    
  },
  computed: {
    infoStatus() {
      return this.$store.state.showInfo;
    }
  },
  watch: {
    infoStatus(val) {
      if(val) {
        setTimeout(() => {
          this.$store.dispatch('TOGGLEINFO', false);
        },2000)
      }
    }
  }
}
</script>
<style scoped>
/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
    min-width: 150px;
    margin-left: -125px;
    background-color: #353a40;
    position:relative;
    color: #fff;
    text-align: center;
    border-radius: 25px;
    padding: 16px;
    position: fixed;
    z-index: 1000;
    bottom: 20px;
    left: 0;
    right: 0;
    max-width: 300px;
    display: inline-block;
    margin: 0 auto;
    border:1px solid #fff;
}
</style>



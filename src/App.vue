<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <router-link to="/" >Home</router-link>
      <router-link to="/allboards" >All Boards</router-link>
    </nav>
    <router-view/>
    <snack-bar />
  </div>
</template>
<script>
import Boards from './service/Boards'
import SnackBar from './components/SnackBar.vue';
export default {
  components: {
    SnackBar
  },
  created() {
    console.log('=-=-=-=-=-=-=App is created =-=-=-=-=-=');
    this.getAllBoards();
  },
  methods: {
    async getAllBoards() {
      try {
        const data = await Boards.getAllBoards();
        this.$store.dispatch('ALL_BOARDS', data.data.boards);
        this.$store.dispatch('ON_BOARDSUPDATE', false);
      } catch(error) {
        console.log(error)
      }
    }
  },
  computed: {
    boardUpdate() {
      return this.$store.state.boardsUpdate
    }
  },
  watch: {
    boardUpdate(val) {
      if(val){
        this.getAllBoards();
      }
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/style/mixin.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 95%;
  margin: 3em auto;
  @include breakpoint-min(calc-rem(1280)){
    width: 1260px;
  }
}
.navbar {
  margin: 0 15px 15px 15px;
  border-radius: 5px;
  justify-content: flex-start;
  & a{
    color:#fff;
    font-weight: bold;
    margin-right: 15px;
  }
}
</style>

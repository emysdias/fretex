<template>
  <div id="home">
    <NavBar />
    <div class="home-box">
      <BestTransport />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import BestTransport from '../components/BestTransport.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    BestTransport
  }
}
</script>

<style scoped lang="scss">

@import "../utils/colors.scss";
.home-box {
  margin: 0 auto;
  margin-top: 30px;
  width: 60%;
  box-shadow: 0px 0px 10px $black;
  border-radius: 20px;
}
</style>

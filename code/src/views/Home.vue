<template>
  <div id="home">
    <NavBar />
    <div class="home-box">
      <BestTransportBox />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import BestTransportBox from '../components/BestTransportBox.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    BestTransportBox
  }
}
</script>

<style scoped lang="scss">
@import "../utils/colors.scss";

.home-box {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 60%;
  box-shadow: 0px 0px 10px $black;
  border-radius: 20px;
}

@media (max-width: 1200px) {
  .home-box {
    width: 85%;
  }
}
</style>

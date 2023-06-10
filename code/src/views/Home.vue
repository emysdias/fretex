<template>
  <div id="home">
    <NavBar />
    <div class="container">
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

<style></style>

<template>
  <div class="box">
    <b-navbar>
      <b-navbar-brand>
        <i class="fas fa-truck"></i>
        <b>{{ appName }}</b>
      </b-navbar-brand>
    </b-navbar>

    <div class="aligned-components">
      <AnalyzeTrasportsBox />
      <div class="result-box">
        Nenhum dado selecionado
      </div>
    </div>

  </div>
</template>

<script>
import { BNavbar, BNavbarBrand } from 'bootstrap-vue'
import AnalyzeTrasportsBox from './AnalyzeTrasportsBox.vue'

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    AnalyzeTrasportsBox,
  },
  data() {
    const appName = ''

    return {
      appName,
    }
  },
  created() {
    this.appName = 'Melhor Frete'
  },
}
</script>

<style scoped lang="scss">
@import "../utils/colors.scss";

#icon {
  width: 35px;
}

.navbar {
  background-color: $green-water;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.navbar-brand {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.navbar-brand>b {
  margin-left: 20px;
}

.aligned-components {
  padding: 20px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.aligned-components>.box{
  width: 38%;
}

.result-box {
  width: 58%;
  text-align: center;
  margin: auto;
}
</style>

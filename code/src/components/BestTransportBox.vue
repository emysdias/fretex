<template>
  <div>
    <b-navbar>
      <b-navbar-brand>
        <i class="fas fa-truck"></i>
        <b>{{ appName }}</b>
      </b-navbar-brand>
    </b-navbar>

    <div class="aligned-components">
      <AnalyzeTrasportsBox @dataReturned="captureData" />
      <div v-if="isEmpty(bestPriceFreight) && isEmpty(fastestFreight)" class="result-box">
        Nenhum dado selecionado
      </div>
      <div v-else class="right-aligned-components">
        <ValueCards :transportData="bestPriceFreight" :title="'Frete com menor valor'" />
        <ValueCards :transportData="fastestFreight" :title="'Frete mais rápido'" />

        <button @click="makeDataEmpty">Limpar</button>
      </div>
    </div>

  </div>
</template>

<script>
import { BNavbar, BNavbarBrand } from 'bootstrap-vue'
import AnalyzeTrasportsBox from './AnalyzeTrasportsBox.vue'
import ValueCards from './ValueCards.vue'

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    AnalyzeTrasportsBox,
    ValueCards,
  },
  data() {
    const appName = ''
    const bestPriceFreight = {}
    const fastestFreight = {}

    return {
      appName,
      bestPriceFreight,
      fastestFreight
    }
  },
  created() {
    this.appName = 'Melhor Frete'
  },

  methods: {
    captureData(bestPriceFreight, fastestFreight) {
      this.bestPriceFreight = bestPriceFreight
      this.fastestFreight = fastestFreight
    },

    isEmpty(obj) {
      return Object.keys(obj).length === 0;
    },

    makeDataEmpty(){
      this.bestPriceFreight = {}
      this.fastestFreight = {}
    }
  }
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

.aligned-components>.box {
  width: 55%;
}

.right-aligned-components {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  justify-content: center;
}

.right-aligned-components>button {
  border: none;
  background-color: $green-water;
  display: flex;
  margin: auto;
  margin-top: 20px;
  width: 40%;
  justify-content: center;
  height: 35px;
  align-items: center;
  margin-bottom: 150px;
  border-radius: 5px;
}

.result-box {
  text-align: center;
  margin: auto;
}
</style>

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
        <br />
        <ValueCards :transportData="fastestFreight" :title="'Frete mais rápido'" />
        <div class="clean-button">
          <button @click="makeDataEmpty">Limpar</button>
        </div>
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

    makeDataEmpty() {
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
}

.aligned-components>.box {
  width: 40%;
}

.right-aligned-components {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 20px;
  justify-content: center;
  position: relative;
}

.clean-button {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
}

.clean-button>button {
  border: none;
  background-color: $green-water;
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50%;
  align-items: center;
  border-radius: 5px;
  float: right;

}

.result-box {
  text-align: center;
  margin: auto;
}

@media (max-width: 1200px) {
  .aligned-components {
    flex-direction: column;
    position: relative;
  }

  .aligned-components>.box {
    width: 100%;
  }

  .right-aligned-components, .result-box {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 60px;
    position: static;
  }

  .clean-button {
    right: 20px;
    bottom: 20px;
  }

  .right-aligned-components{
    padding-left: 0;
  }
}
</style>

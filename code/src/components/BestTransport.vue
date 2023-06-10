<template>
  <div class="box">
    <b-navbar>
      <b-navbar-brand>
        <img :src="truck" alt="imagem de frete" id="icon">
        <b>{{ appName }}</b>
      </b-navbar-brand>
    </b-navbar>

    <div class="freight-box">

      Insira o destino e o peso

      <div class="freight-inputs">
        <label for="destino">Destino:</label>
        <select id="destino" v-model="destinoSelecionado">
          <option value="">Selecione o destino</option>
          <option value="A">Destino A</option>
          <option value="B">Destino B</option>
          <option value="C">Destino C</option>
        </select>

        <label for="peso">Peso:</label>
        <input type="text" id="peso" v-model="peso" @blur="applyMask">
      </div>
    </div>

  </div>
</template>

<script>
import { BNavbar, BNavbarBrand } from 'bootstrap-vue'
import truckImage from "../assets/truck.png"

export default {
  components: {
    BNavbar,
    BNavbarBrand,
  },
  data() {
    const appName = ''

    return {
      appName,
      truck: truckImage,
      peso: 0,
      destinoSelecionado: ""
    }
  },
  created() {
    this.appName = 'Melhor Frete'
  },

  methods: {
    applyMask() {
      if (this.peso) {
        this.peso += ' km';
      }
    },
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

.freight-box {
  background-color: $gray;
  width: 40%;
}

.freight-inputs {
  display: grid;
}
</style>

<template>
  <div class="box">
    <div class="box-title">
      <i class="fas fa-map"></i>
      <p>Insira o destino e o peso</p>
    </div>
    <div class="box-inputs">
      <label for="destino">Destino</label>
      <select id="destino" v-model="destinoSelecionado">
        <option value="" disabled selected hidden>Selecione o destino</option>
        <option v-for="city in cities" :value="city.id" :key="city.id">{{ city.city }}</option>
      </select>

      <label for="peso">Peso</label>
      <input placeholder="Peso da carga em Kg" type="text" id="peso" v-model="peso" @blur="applyMask">
    </div>

    <button>Analisar</button>
  </div>
</template>

<script>

import list from "../services/trasport.js"

export default {
  data() {
    const peso = ''
    const destinoSelecionado = ''
    const cities = []

    return {
      peso,
      destinoSelecionado,
      cities
    }
  },

  created() {
    list.getAllTransports().then(response => {
      const uniqueCity = new Set();
      response.data.forEach(transport => {
        uniqueCity.add(transport.city);
      });
      this.cities = Array.from(uniqueCity).map(city => ({ city }));
    })
      .catch(error => {
        console.error(error);
      });
  },

  methods: {
    applyMask() {
      if (this.peso) {
        this.peso += ' kg';
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "../utils/colors.scss";

.box {
  background-color: $gray;
  padding: 30px;
  border-radius: 10px;
}

.box>b {
  margin-left: 10px;
}

.box-title {
  margin-top: 130px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-title>p {
  padding-left: 10px;
  margin: 0;
}

.box-inputs {
  display: flex;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-direction: column;
}

.box-inputs>label {
  margin-top: 10px;
}

.box-inputs>select,
.box-inputs>input {
  height: 40px;
  border: none;
  padding: 10px;
  background-color: $white;
  color: $dark-gray;
  width: 100%;
  border-radius: 5px;
}

.box>button {
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
</style>

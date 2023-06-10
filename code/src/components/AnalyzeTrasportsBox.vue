<template>
  <div class="box">
    <div class="box-title">
      <i class="fas fa-map"></i>
      <b>Insira o destino e o peso</b>
    </div>
    <div class="box-inputs">
      <label for="destino">Destino</label>
      <select id="destino" v-model="destinoSelecionado">
        <option value="" disabled selected hidden>Selecione o destino</option>
        <option value="A">Destino A</option>
        <option value="B">Destino B</option>
        <option value="C">Destino C</option>
      </select>

      <label for="peso">Peso</label>
      <input placeholder="Peso da carga em Kg" type="text" id="peso" v-model="peso" @blur="applyMask">
    </div>

    <button>Analisar</button>
  </div>
</template>

<script>

export default {
  data() {
    const peso = ''
    const destinoSelecionado = ''

    return {
      peso,
      destinoSelecionado
    }
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
}

.box>b {
  margin-left: 10px;
}

.box-title {
  text-align: center;
  margin-top: 100px;
}

.box-title>b {
  margin-left: 10px;
}

.box-inputs {
  display: grid;
  margin-top: 40px;
  margin-bottom: 40px;
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
}

.box>button {
  border: none;
  background-color: $green-water;
  display: flex;
  margin: auto;
  margin-top: 20px;
  width: 60%;
  justify-content: center;
  height: 30px;
  align-items: center;
  margin-bottom: 100px;
}
</style>

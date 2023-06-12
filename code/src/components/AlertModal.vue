<template>
  <div>
    <div class="modal">
      <div class="modal-box">
        <font-awesome-icon icon="fa-solid fa-circle-exclamation" :size="'3x'"/>
        <p>Insira os valores para realizar a análise.</p>
        <button @click="closeModal">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">
@import "../utils/colors.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $background-modal;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-box {
  background-color: $white;
  padding: 50px;
  width: 30%;
  text-align: center;
  border-radius: 20px;
}

.modal-box>p{
  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  font-size: 25px;
  width: 70%;
  text-align: center;
}

.modal-box>button {
  border: none;
  background-color: $green-water;
  width: 30%;
  height: 35px;
  border-radius: 5px;
}
</style>

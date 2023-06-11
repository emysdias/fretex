<template>
  <div>
    <div class="modal">
      <div class="modal-box">
        <h2>Modal</h2>
        <p>Insira os valores para realizar a análise</p>
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
  padding: 20px;
  width: 50%;
}
</style>

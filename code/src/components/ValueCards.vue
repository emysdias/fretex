<template>
  <div class="value-card-container">
    <div class="value-card">
      <p>{{ title }}</p>
      <!-- <p class="card-title">Trasportadora: {{ transportData.name }}</p> -->
      <p>Trasportadora: {{ transportData.name }}</p>
      <p>Tempo estimado: {{ transportData.lead_time }}</p>
    </div>
  
    <div class="value-card">
      <p>Preço: {{ transportData.total_cost | currency }}</p>
    </div>
  </div>
</template>

<script>

import currencyFilter from '../utils/currencyFilter.js';

export default {
  props: ['transportData', 'title'],
  filters: {
    currency: currencyFilter
  }
};
</script>

<style scoped>

.value-card-container {
  display: flex;
}
.value-card {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  text-align: center;
  width: 100%;
}

.card-icon {
  font-size: 30px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.card-description {
  font-size: 14px;
}
</style>

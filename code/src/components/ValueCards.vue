<template>
  <div class="value-card-container">
    <div class="value-card-box-with-icon">
      <div class="value-card-box-icon">
        <font-awesome-icon :icon="iconName" :size="'2x'"/>
      </div>
      <div class="value-card">
        <b>{{ title }}</b>
        <p>Trasportadora: {{ transportData.name }}</p>
        <p>Tempo estimado: {{ transportData.lead_time }}</p>
      </div>
    </div>

    <div class="price-card">
      <b>Preço</b> {{ transportData.total_cost | currency }}
    </div>
  </div>
</template>

<script>

import currencyFilter from '../utils/currencyFilter.js';

export default {
  props: ['transportData', 'title', 'iconName'],
  filters: {
    currency: currencyFilter
  }
};
</script>

<style scoped lang="scss">
@import "../utils/colors.scss";

p {
  margin: 0;
}

.value-card-container {
  display: flex;
}

.value-card-box-with-icon {
  display: flex;
  width: 70%;
}

.value-card-box-icon {
  background-color: $green-water;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 30px;
}

.value-card,
.price-card {
  padding: 20px;
  background-color: $gray;
  text-align: center;
  text-align: left;
}

.value-card {
  width: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.price-card {
  margin-left: 20px;
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
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

@media (max-width: 600px) {
  .home-box {
    width: 85%;
  }

  .value-card-container {
    flex-direction: column;
  }

  .value-card-box-with-icon {
    width: 100%;
  }

  .price-card {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
    background-color: transparent;
  }
}
</style>

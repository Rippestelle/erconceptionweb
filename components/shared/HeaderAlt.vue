<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <section class="container headeralt row" role="region">
    <div class="col"></div>

    <div class="col">
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.headeralt {
  height: 100vh;

  h1 {
    font-family: "Manrope", sans-serif;
    color: var(--text-primary-color);
    font-weight: 900;
    font-size: 30px;
    text-align: center;
  }
}
</style>

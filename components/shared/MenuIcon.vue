<script setup lang="ts">
defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <img
    src="../../assets/icons/hamburger-menu-svgrepo-com.svg"
    @click="$emit('click')"
  />
  <!--   <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    @click="$emit('click')"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
  </svg> -->
</template>

<style scoped></style>

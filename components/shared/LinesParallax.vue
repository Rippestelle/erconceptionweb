<script setup lang="js">
onMounted(() => {
  moveElements({
    container: "#parallax-lines ",
  });
});
</script>

<template>
  <div>
    <div class="parallax-lines" id="parallax-lines">
      <div class="parallax-lines__one" data-parallax="20" speed="0.2"></div>
      <div class="parallax-lines__two" data-parallax="40" speed="0.5"></div>
      <div class="parallax-lines__three" data-parallax="80" speed="0.9"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.parallax-lines {
  width: 300px;
  position: relative;

  @media screen and (max-width: 840px) {
    display: none;
  }

  div {
    position: absolute;
    z-index: 9;
    transform: rotate(140deg);
  }

  &__one {
    top: 60px;
    right: 30px;
    width: 200px;
    height: 10px;
    border-radius: 20px;
    background-color: #22d49e;
  }

  &__two {
    right: 30px;
    top: 80px;
    width: 150px;
    height: 10px;
    border-radius: 20px;
    background-color: #582c91;
  }

  &__three {
    right: 35px;
    top: 100px;
    width: 100px;
    height: 10px;
    border-radius: 20px;
    background-color: #2e80c8;
  }
}
</style>

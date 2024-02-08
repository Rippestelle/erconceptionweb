<script setup lang="ts">
defineProps({
  title: String,
});

onMounted(() => {
  moveElements({
    container: "#animation ",
  });
});
</script>

<template>
  <section class="container headeralt">
    <div class="row" id="animation">
      <div class="animation">
        <img
          class="animation__one animation-img"
          data-parallax="30"
          speed="0.2"
          src="../../public/assets/icons/38.svg"
        />
        <img
          class="animation__two animation-img"
          data-parallax="60"
          speed="0.5"
          src="../../public/assets/icons/40.svg"
        />
        <img
          class="animation__three animation-img"
          data-parallax="120"
          speed="0.9"
          src="../../public/assets/icons/42.svg"
        />
      </div>
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="animation">
        <img
          class="animation__four"
          data-parallax="30"
          speed="0.2"
          src="../../public/assets/icons/36.svg"
        />
        <img
          class="animation__five"
          data-parallax="60"
          speed="0.5"
          src="../../public/assets/icons/42.svg"
        />
        <img
          class="animation__six"
          data-parallax="120"
          speed="0.9"
          src="../../public/assets/icons/41.svg"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.headeralt {
  height: 300px;

  h1 {
    font-family: "Manrope", sans-serif;
    background: linear-gradient(
      0.25turn,
      rgb(88, 44, 145),
      rgb(46, 128, 200) 50%,
      #22d49e
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    font-size: 30px;
  }
  .row {
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .title {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .animation {
      width: 30%;
      height: 100%;
      position: relative;

      img {
        position: absolute;
      }

      &__one {
        right: 0px;
        top: 0;
        width: 200px;
      }

      &__two {
        right: 70px;
        top: 0px;
        width: 200px;
      }

      &__three {
        right: 110px;
        top: 25px;
        width: 150px;
      }

      &__four {
        left: 0px;
        bottom: 0px;
        width: 200px;
        transform: rotate(180deg);
      }

      &__five {
        left: 70px;
        bottom: 0px;
        width: 200px;
      }

      &__six {
        left: 110px;
        bottom: 25px;
        width: 150px;
      }
    }
  }
}
</style>

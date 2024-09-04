<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <section class="container headeralt row" role="region">
    <div class="col picture">
      <img src="/public/assets/img/seo.jpg" />
    </div>

    <div class="col">
      <div class="title">
        <h1>{{ title }}</h1>
        <p>
          Avoir un site internet reste un réel atout. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Cras consequat fringilla massa, vel
          vestibulum dolor sodales vitae. Quisque erat orci, posuere vitae neque
          at, pharetra ultrices magna. Proin interdum fringilla velit, ut tempor
          libero. Cras consequat lacinia iaculis. Integer sodales accumsan
          luctus. Suspendisse ut felis ipsum.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.headeralt {
  height: 90vh;
  width: 100%;

  .col {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .picture {
    display: grid;
    gap: 40px;
    height: 90vh;
    margin: 0;
    grid-auto-flow: column;
    place-content: center;

    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
      --color: #582c91; /* the border color */
      --border: 8px; /* the border thickness*/
      --offset: 20px; /* control the offset*/
      --gap: 15px; /* the gap on hover */

      --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),
        var(--color) 0;
      --_o: calc(3 * var(--offset));
      padding: calc(var(--gap) + var(--border))
        calc(var(--gap) + var(--border) + var(--offset))
        calc(var(--gap) + var(--border) + var(--offset))
        calc(var(--gap) + var(--border));
      background: linear-gradient(var(--_c)) var(--_o) var(--_o),
        linear-gradient(90deg, var(--_c)) var(--_o) var(--_o);
      background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
      background-repeat: no-repeat;
      filter: grayscale(0.4);
      transition: 0.5s;
      cursor: pointer;
    }

    img:hover {
      background-position: 0px 0px;
      background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
      filter: grayscale(0);
    }

    .title {
      h1 {
        font-family: "Manrope", sans-serif;
        color: var(--text-primary-color);
        font-weight: 900;
        font-size: 30px;
        text-align: center;
      }
    }
  }

  .title {
    width: 70%;
  }
}
</style>

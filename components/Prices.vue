<script setup lang="ts">
import PricesCarousel from "../components/PricesCarousel";
</script>

<template>
  <section class="container" id="tarifs" role="region">
    <h2>Tarifs</h2>
    <p class="mb-0">
      Comme chaque projet est unique, ces tarifs correspondent à des
      estimations. Le coût d'un site varie en fonction du volume de contenu à
      intégrer, des fonctionnalités demandées, du dégré de personnalisation et
      des services annexes choisis (hébergement, nom de domaine, maintenance).
      Je vous propose des solutions flexibles pour m'adapter à votre budget et
      vos besoins.
    </p>
    <p class="mb-0">
      Tous les sites réalisés sont responsives (adaptés aux tablettes et aux
      mobiles) et respectent les normes de qualité et d'accessibilité web.
    </p>
    <p>
      N'hésitez pas à <NuxtLink to="/#contact">me contacter</NuxtLink> pour
      demander un devis et démarrer votre projet.
    </p>

    <PricesCarousel />
  </section>
</template>

<style lang="scss" scoped>
#tarifs {
  overflow: visible;
  h2 {
    padding-top: 80px;

    @media screen and (max-width: 840px) {
      padding-top: 40px;
    }
  }

  .parallax-services {
    position: relative;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 840px) {
      display: none;
    }

    img {
      position: absolute;
      z-index: 999;
      transform: rotate(45deg);
    }

    &__one {
      right: 60px;
      width: 250px;
    }

    &__two {
      right: 50px;
      width: 225px;
      top: 40px;
    }

    &__three {
      right: 40px;
      width: 200px;
      top: 80px;
    }
  }
}
</style>

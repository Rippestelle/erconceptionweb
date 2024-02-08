<template>
  <section class="container about" id="about">
    <h2>A propos</h2>
    <div class="row">
      <div>
        <h3>Bonjour, je suis Estelle, développeuse Web.</h3>
        <p>Je vous accompagne dans votre statégie digitale.</p>
        <p>
          Titulaire d'un diplôme en Conception d'applications et sites web (RNCP
          VI), je conçois des sites clés en mains et sur mesure en adoptant les
          bonnes pratiques et les normes d'accessibilité web.
        </p>
        <p>
          Issue de formation Littéraire, je mets à profit mes compétences
          acquises dans la rédaction et l'optimisation de votre contenu afin
          d'obtenir un bon référencement naturel (SEO).
        </p>
      </div>
      <div class="parallax-about" id="parallax-about">
        <img
          class="parallax-about__one"
          data-parallax="20"
          speed="0.2"
          src="../assets/icons/38.svg"
        />
        <img
          class="parallax-about__two"
          data-parallax="40"
          speed="0.5"
          src="../assets/icons/40.svg"
        />
        <img
          class="parallax-about__three"
          data-parallax="80"
          speed="0.9"
          src="../assets/icons/42.svg"
        />
      </div>
    </div>

    <!--     <p>
      Reconvertie dans la création de sites web en 2020 et propose
      depuis fin 2023 mes services en freelance. Mes diverses expériences au
      contact de la clientèle et dans le dévelopement web me permette de vous
      proposer une expertise complète et un accompagnement sur mesure.
    </p> -->
  </section>
</template>

<script setup lang="js">
onMounted(() => {
  moveElements({
    container: '#parallax-about ',
  });
});
</script>

<style lang="scss" scoped>
.about {
  padding-top: 80px;

  h2 {
    text-align: left;
    margin-bottom: 25px;
  }
}

.about h3 {
  text-transform: initial;
  text-align: left;
  font-weight: 550;
  margin-bottom: 25px;
}

.about a {
  color: #22d49e;
}
.about p {
  text-align: justify;
}

.row {
  justify-content: space-between;

  .parallax-about {
    width: 300px;
    position: relative;

    @media screen and (max-width: 840px) {
      display: none;
    }

    img {
      position: absolute;
      z-index: 9;
    }

    &__one {
      right: 60px;
      top: 25px;
      width: 200px;
      transform: rotate(180deg);
    }

    &__two {
      right: 5px;
      top: 50px;
      width: 175px;
    }

    &__three {
      right: 0;
      top: 60px;
      width: 150px;
    }
  }
}
</style>

<script setup lang="js">
onMounted(() => {
  moveElements({
    container: '#parallax-about ',
  });
});
</script>

<template>
  <section class="container about" id="about" role="region">
    <h2>A propos</h2>
    <div class="row">
      <div>
        <h3>Bonjour, je suis Estelle, développeuse Web.</h3>
        <p>
          Je vous accompagne dans votre stratégie digitale et la création de
          votre site internet.
        </p>
        <p>
          Titulaire d'un diplôme en Conception d'applications et de sites web
          (RNCP VI), je conçois des sites clés en mains et sur mesure en
          adoptant les bonnes pratiques et les normes d'accessibilité web.<br />
          Je suis spécialisée dans les sites WordPress, sites en JavaScript ou
          en PHP, et en référencement naturel (SEO).
        </p>
        <p>
          Je vous aide à optimiser votre contenu pour qu'il soit clair,
          accessible et pertinent, et à utiliser les bons mots clés afin
          d'obtenir un bon référencement.
        </p>
        <p>
          Compétences: HTML5, CSS, Sass, JavaScript, PHP, WordPress, SEO,
          Rédaction, Webmastering, Responsive Design, Refonte, Recherche de
          contenu, Suivi de projet.
        </p>
      </div>
      <div class="parallax-about" id="parallax-about">
        <div class="parallax-about__one" data-parallax="20" speed="0.2"></div>
        <div class="parallax-about__two" data-parallax="40" speed="0.5"></div>
        <div class="parallax-about__three" data-parallax="80" speed="0.9"></div>
      </div>
    </div>
  </section>
</template>

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

    div {
      position: absolute;
      z-index: 9;
      transform: rotate(140deg);
    }

    &__one {
      top: 80px;
      right: 30px;
      width: 200px;
      height: 10px;
      border-radius: 20px;
      background-color: #22d49e;
    }

    &__two {
      right: 35px;
      top: 100px;
      width: 150px;
      height: 10px;
      border-radius: 20px;
      background-color: #582c91;
    }

    &__three {
      right: 40px;
      top: 120px;
      width: 100px;
      height: 10px;
      border-radius: 20px;
      background-color: #2e80c8;
    }
  }
}
</style>

<template>
  <section class="container" id="services" role="region">
    <h2>Mes services</h2>
    <p>
      Mes diverses expériences et mon profil atypique me permettent de vous
      proposer des solutions complètes clés en main réalisées dans les bonnes
      pratiques et normes de qualité web. Je réalise des sites vitrines, sites
      institutionnels, landing page, sites e-commerce ou encore des applications
      métiers, avec une conception et un accompagnement sur mesure afin de
      m'adapter à votre vision et vos objectifs.
    </p>

    <ul class="services">
      <li class="services__item">
        <img src="../public/assets/icons/wp.png" />
        <h3>Création de site WordPress</h3>
        <p>
          WordPress est un outil qui permet d'obtenir des sites clés en mains
          rapidement et facile d'accès.<br />
          Que ce soit avec un thème existant ou avec un thème sur mesure,
          obtenez un site clé en main facile d'accès.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/sur-mesure.png" />
        <h3>Création de site sur mesure</h3>
        <p>Sites sur mesure conçus en PHP ou JavaScript. <br /></p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/landing-page.png" />
        <h3>Mini-sites et landing page</h3>
        <p>
          Bénéficiez d'un suivi personnalisé, avec une mise à jour régulière de
          votre site.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/seo1.png" />
        <h3>Conseils en référencement naturel - SEO</h3>
        <p>
          Référencement naturel optimisé et conseils en stratégie de
          référencement. Des pages bien construites pour un référencement
          optimal.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/refonte.png" />
        <h3>Refonte site internet</h3>
        <p>
          Vous avez déjà un site internet et souhaitez l'optimiser ?<br />
          Optenez des conseils pour donner plus de visibilité à votre site.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/formation.png" />
        <h3>Formation WordPress</h3>
        <p>
          Que ce soit pour apprendre à créer votre site vous même ou apprendre à
          le gérer, différents types de formations possibles.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/responsive.png" />
        <h3>Design responsive & Animations</h3>
        <p>
          Un site internet au design soigné et adapté à tous les écrans.<br />
          Passionnée de frontend, je prends plaisir à animer vos pages et à les
          rendre plus dynamiques.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/tools.png" />
        <h3>Suivi &amp; Maintenance</h3>
        <p>
          Suivi, mises à jour et sauvegardes régulières de votre site. <br />
        </p>
      </li>
      <li>
        <div class="parallax" id="parallax-services">
          <img
            class="parallax__one"
            data-parallax="30"
            speed="0.2"
            src="../public/assets/icons/37.svg"
          />
          <img
            class="parallax__two"
            data-parallax="60"
            speed="0.5"
            src="../public/assets/icons/41.svg"
          />
          <img
            class="parallax__three"
            data-parallax="120"
            speed="0.9"
            src="../public/assets/icons/40.svg"
          />
        </div>
      </li>
    </ul>
    <div class="parallax-about" id="parallax-about">
      <img
        class="parallax-about__one"
        data-parallax="30"
        speed="0.2"
        src="../public/assets/icons/38.svg"
      />
      <img
        class="parallax-about__two"
        data-parallax="60"
        speed="0.5"
        src="../public/assets/icons/40.svg"
      />
      <img
        class="parallax-about__three"
        data-parallax="120"
        speed="0.9"
        src="../public/assets/icons/42.svg"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  moveElements({
    container: "#parallax-services",
  });
});
</script>

<style lang="scss" scoped>
h2 {
  padding-top: 80px;

  @media screen and (max-width: 840px) {
    padding-top: 40px;
  }
}
.services {
  list-style-type: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 840px) {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    p {
      text-align: center;
    }
  }
}

.parallax {
  position: relative;

  @media screen and (max-width: 840px) {
    display: none;
  }

  img {
    position: absolute;
  }

  &__one {
    right: 0;
    top: 0;
    width: 200px;
    transform: rotate(90deg);
  }

  &__two {
    right: -20px;
    top: 20px;
    width: 175px;
  }

  &__three {
    right: 20px;
    top: 45px;
    width: 125px;
  }
}
</style>

<template>
  <section class="container" id="services" role="region">
    <h2>Mes services</h2>
    <p>
      Mes diverses expériences et mon profil atypique me permettent de vous
      accompagner à chaque étape et sur différents types de projets. Site
      vitrine, site institutionnel, landing page, site e-commerce ou encore
      application métier, diverses solutions sont possibles en fonction de votre
      besoin.
    </p>

    <div class="services">
      <NuxtLink
        to="/developpement-sur-mesure"
        class="services__item"
        id="mouseffect"
      >
        <div class="tilt">
          <h3>Création ou refonte de site internet</h3>
          <p>
            Site WordPress clé en main et facile d'accès.<br />
            Conception de thèmes et plugins sur mesure ou personnalisation de
            thème existant.<br />
            Site sur mesure en JavaScript (Nuxt.js) ou PHP.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/seo-webmastering" class="services__item">
        <div class="tilt">
          <h3>Conseils en référencement naturel - SEO</h3>
          <p>
            Référencement naturel optimisé et conseils en stratégie de
            référencement. Des pages bien construites, avec des mots clés
            pertinents pour un référencement optimal.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/formation-wordpress" class="services__item">
        <div class="tilt">
          <h3>Formation WordPress</h3>
          <p>
            En fonction de votre besoin, je propose plusieurs modules de
            formation. Formation au back-office WordPress et plugins.<br />
            Formation complète WordPress et Elementor afin d'apprendre à créer
            votre site vous même.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/suivi-maintenance" class="services__item">
        <div class="tilt">
          <h3>Suivi &amp; Maintenance</h3>
          <p>
            Suivi, mises à jour et sauvegardes régulières de votre site. Même
            après la mise en ligne, je me tiens disponible pour le bon
            fonctionnement de votre site.<br />
            Analyse de sécurité et tests.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/seo-webmastering" class="services__item">
        <div class="tilt">
          <h3>Webmastering</h3>
          <p>
            Gestion et entretien d'un site, actualisation du contenu graphique
            et/ou textuel, newsletter. Intégration d'articles et suivi des
            statistiques. Je vous aide à obtenir une meilleure visibilité et à
            gagner plus de traffic.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/developpement-sur-mesure" class="services__item">
        <div class="tilt">
          <h3>Site e-commerce</h3>
          <p>
            Création de boutiques en ligne avec Woo, pour artisans, commerçants
            et indépendants. Gestion des produits, des commandes et des stocks.
            Paiements sécurisés et vente à l'international.
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="js">
onMounted(() => {

  tiltElement({
    card :".services__item",
  });
});
</script>

<style lang="scss" scoped>
#services {
  overflow: visible;
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
    gap: 3em;
    justify-items: center;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 840px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__item {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 350px;
      height: 100%;
      border-radius: 16px;
      width: 100%;
      font-weight: 400;

      &:hover > p {
        color: var(--text-primary-color) !important;
      }

      .tilt {
        padding: 2em;
        border-radius: 16px;
        height: 100%;
        /* From https://css.glass */
        background: var(--tilt-color);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);

        p {
          text-align: left;
          margin-bottom: 0;
        }

        h3 {
          background: linear-gradient(
            0.65turn,
            rgb(88, 44, 145),
            rgb(46, 128, 200) 35%,
            #22d49e
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }
      }
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

<script setup lang="ts">
defineProps({
  title: String,
});

onMounted(() => {
  moveElements({
    container: ".row-animation",
  });

  moveElements({
    container: "#animation",
  });
});

useSeoMeta({
  title: "Création et refonte de site internet",
  ogTitle: "Création et refonte de site internet",
  description:
    "Création de site vitrine, site e-commerce ou encore landing page afin de gagner en visibilité, contrôler votre présence sur le web et améliorer votre stratégie",
  ogDescription:
    "Création de site vitrine, site e-commerce ou encore landing page afin de gagner en visibilité, contrôler votre présence sur le web et améliorer votre stratégie",
  ogUrl: "/services/creation-refonte-site",
});
</script>

<template>
  <section class="container">
    <h2>Refonte de site internet</h2>
    <div class="row">
      <div class="col text">
        <p>
          Vous avez un site internet et vous souhaitez le modifier ou le refaire
          intégralement? <br />J'analyse votre site existant pour vous proposer
          des pistes d'amélioration pour l'apparence, la structure ou encore le
          référencement.
        </p>
        <p>
          Une refonte de site internet présente de nombreux avantages comme:
        </p>
      </div>
      <div class="col">
        <div class="row-animation">
          <div class="animation first">
            <img
              class="first__one animation-img"
              data-parallax="10"
              speed="0.05"
              src="../../../public/assets/icons/38.svg"
            />
            <img
              class="first__two animation-img"
              data-parallax="40"
              speed="0.15"
              src="../../../public/assets/icons/40.svg"
            />
            <img
              class="first__three animation-img"
              data-parallax="20"
              speed="0.1"
              src="../../../public/assets/icons/42.svg"
            />
          </div>
          <div class="title">
            <ul>
              <li>Améliorer votre positionnement</li>
              <li>Augmenter votre trafic</li>
              <li>Renforcer votre image de marque</li>
              <li>Optimiser votre contenu</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Moderniser votre présence en ligne</li>
            </ul>
          </div>
          <div class="animation second">
            <img
              class="second__four"
              data-parallax="10"
              speed="0.05"
              src="../../../public/assets/icons/36.svg"
            />
            <img
              class="second__five"
              data-parallax="20"
              speed="0.1"
              src="../../../public/assets/icons/42.svg"
            />
            <img
              class="second__six"
              data-parallax="40"
              speed="0.15"
              src="../../../public/assets/icons/41.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <h2>Site vitrine</h2>
    <div class="row-reverse">
      <div class="col text">
        <p>
          Vous êtes une PME, un commerçant ou un auto-entrepreneur? Améliorez
          votre visibilité avec un site internet. Créer votre site internet est
          une étape importante dans votre stratégie et un investissement
          judicieux.
        </p>
      </div>
      <div class="col">
        <div class="row-animation" id="animation">
          <div class="animation first">
            <img
              class="first__one animation-img"
              data-parallax="10"
              speed="0.05"
              src="../../../public/assets/icons/38.svg"
            />
            <img
              class="first__two animation-img"
              data-parallax="40"
              speed="0.15"
              src="../../../public/assets/icons/40.svg"
            />
            <img
              class="first__three animation-img"
              data-parallax="20"
              speed="0.1"
              src="../../../public/assets/icons/42.svg"
            />
          </div>
          <div class="title">
            <ul>
              <li>Gagner en visibilité: une vitrine accessible 24/7</li>
              <li>Mettre en avant vos produits et/ou services</li>
              <li>Obtenir plus d'informations sur vos visiteurs</li>
              <li>Améliorer votre image de marque</li>
              <li>Attirer de nouveaux clients et en fidéliser</li>
              <li>Indépendance et contrôle sur votre présence en ligne</li>
            </ul>
          </div>
          <div class="animation second">
            <img
              class="second__four"
              data-parallax="10"
              speed="0.05"
              src="../../../public/assets/icons/36.svg"
            />
            <img
              class="second__five"
              data-parallax="20"
              speed="0.1"
              src="../../../public/assets/icons/42.svg"
            />
            <img
              class="second__six"
              data-parallax="40"
              speed="0.15"
              src="../../../public/assets/icons/41.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>

    <h2>Landing-page</h2>
    <p>
      Créer une landing-page - ou une page d'atterissage en français - peut
      s'avérer essentiel dans votre stratégie marketing. Cette page, dynamique
      et concrête, incitera les utilisateurs à effectuer une action spécifique
      comme:
    </p>
    <ul>
      <li>S'inscrire à une newsletter</li>
      <li>Demander un devis</li>
      <li>Télécharger une brochure</li>
      <li>Remplir un formulaire</li>
      <li>Prendre un rendez-vous</li>
    </ul>
    <p>
      Ce qui vous permettra de mieux analyser vos utilisateurs et de les
      convertir en prospects et clients potentiels.
    </p>

    <h2 id="e-commerce">Site e-commerce</h2>
    <p>
      La création d'une boutique en ligne est un atout puissant pour votre
      entreprise. En plus d'avoir l'avantage de présenter moins de charges
      qu'une boutique physique et un meilleur ROI (retour sur investissement),
      elle présente de nombreuses utilités:
    </p>
    <ul>
      <li>Être visible tout le temps et toucher une plus large clientèle</li>
      <li>Générer des ventes et fidéliser des clients</li>
      <li>Faire des annonces et promotions</li>
      <li>Augmenter son chiffre d'affaires</li>
      <li>Présenter votre boutique physique si existante</li>
      <li>Analyser l'audience</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.col {
  width: 50%;
}

.text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.row-animation {
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    .title {
      width: 100%;
    }
  }

  .first {
    width: 25%;
    height: 20%;
    position: relative;

    img {
      position: absolute;
    }

    @media screen and (max-width: 640px) {
      img {
        top: -20px;
      }
    }

    &__one {
      right: 0px;
      top: 0;
      width: 100px;
    }

    &__two {
      right: 50px;
      top: 0px;
      width: 100px;
    }

    &__three {
      right: 40px;
      top: 0px;
      width: 100px;
    }
  }

  .second {
    width: 70%;
    height: 20%;
    position: relative;

    img {
      position: absolute;
    }

    @media screen and (max-width: 640px) {
      img {
        bottom: -20px;
      }
    }

    &__four {
      right: -120px;
      bottom: 0px;
      width: 100px;
      transform: rotate(180deg);
    }

    &__five {
      right: -170px;
      bottom: 0px;
      width: 100px;
    }

    &__six {
      right: -160px;
      width: 100px;
      top: -70px;
    }
  }
}
@media screen and (max-width: 640px) {
  .row {
    display: flex;
    flex-direction: column;

    .col {
      width: 100%;

      @media screen and (max-width: 380px) {
        .animation {
          display: none;
        }
      }
    }
  }
}
</style>

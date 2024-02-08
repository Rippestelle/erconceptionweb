<template>
  <section class="container" id="contact">
    <h2>Me contacter</h2>
    <p>
      Vous souhaitez vous lancer dans la création ou l'optimisation de votre
      site internet ? Vous avez besoin de plus d'informations ou souhaitez
      obtenir un devis?
    </p>
    <p>
      Contactez moi par
      <a href="mailto:estelle.rippe.pro@gmail.com" class="link">mail</a> ou
      téléphone par au 06 76 26 63 24
    </p>
    <p>Ou via le formulaire de contact suivant :</p>
    <div class="row">
      <ContactForm />
      <div class="parallax" id="parallax-effect">
        <img
          class="parallax__one"
          data-parallax="30"
          speed="0.2"
          src="../assets/icons/37.svg"
        />
        <img
          class="parallax__two"
          data-parallax="60"
          speed="0.5"
          src="../assets/icons/36.svg"
        />
        <img
          class="parallax__three"
          data-parallax="120"
          speed="0.9"
          src="../assets/icons/38.svg"
        />
        <img
          class="parallax__four"
          data-parallax="30"
          speed="0.2"
          src="../assets/icons/36.svg"
        />
        <img
          class="parallax__five"
          data-parallax="60"
          speed="0.5"
          src="../assets/icons/38.svg"
        />
        <img
          class="parallax__six"
          data-parallax="120"
          speed="0.9"
          src="../assets/icons/37.svg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import ContactForm from "./ContactForm.vue";

onMounted(() => {
  moveElements({
    container: '#parallax-effect ',
  });
});
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 100px;

  .row {
    justify-content: space-between;

    .parallax {
      width: 50%;
      position: relative;

      @media screen and (max-width: 840px) {
        display: none;
      }

      img {
        position: absolute;
      }

      &__one {
        left: 15%;
        bottom: 15%;
        transform: rotate(90deg);
        width: 150px;
      }

      &__two {
        left: 15%;
        bottom: 15%;
        transform: rotate(90deg);
        width: 125px;
      }

      &__three {
        left: 15%;
        bottom: 15%;
        width: 100px;
        transform: rotate(90deg);
      }

      &__four {
        right: 15%;
        top: 0px;
        transform: rotate(-90deg);
        width: 100px;
      }

      &__five {
        right: 15%;
        top: 5px;
        transform: rotate(-90deg);
        width: 125px;
      }

      &__six {
        right: 15%;
        top: 10px;
        transform: rotate(-90deg);
        width: 150px;
      }
    }
  }
}
</style>

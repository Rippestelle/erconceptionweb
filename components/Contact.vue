<template>
  <section class="container" id="contact" role="region">
    <h2>Me contacter</h2>

    <div class="row">
      <div id="parallax-contact">
        <p>
          Vous souhaitez vous lancer dans la création ou l'optimisation de votre
          site internet ? <br />
          Vous avez besoin de plus d'informations ou souhaitez obtenir un devis?
        </p>
        <p>
          Contactez moi par
          <a
            href="mailto:estelle.rippe.pro@gmail.com"
            class="link"
            aria-label="envoyer un mail à estelle.rippe.pro@gmail.com"
            >mail</a
          >
          ou téléphone par au 06 76 26 63 24
        </p>
        <!--         <p>Ou via le formulaire de contact suivant :</p>
 -->
        <div class="parallax-contact">
          <div
            class="parallax-contact__one"
            data-parallax="20"
            speed="0.2"
          ></div>
          <div
            class="parallax-contact__two"
            data-parallax="40"
            speed="0.5"
          ></div>
          <div
            class="parallax-contact__three"
            data-parallax="80"
            speed="0.9"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
onMounted(() => {
  moveElements({
    container: '#parallax-contact',
  });

});
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 100px;

  .row {
    justify-content: space-between;
    flex-direction: row;
    height: 400px;

    @media screen and (max-width: 640px) {
      flex-direction: column-reverse;
    }
    div {
      .parallax-contact {
        position: relative;

        @media screen and (max-width: 840px) {
          display: none;
        }

        div {
          position: absolute;
          z-index: 9;
          transform: rotate(325deg);
        }

        &__one {
          top: 180px;
          left: 0px;
          width: 50%;
          height: 12px;
          background-color: #22d49e;
          border-radius: 20px;
        }

        &__two {
          left: 50px;
          top: 210px;
          width: 40%;
          height: 12px;
          background-color: #2e80c8;
          border-radius: 20px;
        }

        &__three {
          left: 100px;
          top: 240px;
          width: 30%;
          height: 12px;
          background-color: #582c91;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>

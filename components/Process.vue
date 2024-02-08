<template>
  <section class="container" id="process">
    <h2>Méthode</h2>
    <p>
      Mes diverses expériences me permettent de vous proposer des solutions clés
      en main réalisées dans les bonnes pratiques et normes de qualité web. Je
      réalise des sites vitrines, sites institutionnels, landing page, sites
      e-commerce ou encore des applications métiers, avec une conception et un
      accompagnement sur mesure afin de m'adapter à votre vision et vos
      objectifs.
    </p>

    <ul class="process">
      <li class="process__item">
        <span class="left green">1. Echange</span>
        <p>
          Nous échangeons dans un premier temps sur votre besoin et vos
          échéances. Je vous fournis un devis après étude de votre projet et
          nous discutons les prochaines étapes.
        </p>
      </li>
      <li class="process__item-right">
        <span class="right blue">2. Conception</span>
        <p>
          Elaboration du design et des divers documents nécessaires à la
          conception de votre site/application (cahier des charges, arborescence
          et documentation). Nous validons ensemble chaque document avant de
          démarrer l'intégration.
        </p>
      </li>
      <li class="process__item">
        <span class="left purple">3. Développement</span>
        <p>
          Construction de votre site. L'intégration se fait étape par étape,
          avec des rendez-vous fixés en fonction de votre emploi du temps afin
          de valider l'avancement du projet.
        </p>
      </li>
      <li class="process__item-right">
        <span class="right green">4. Livraison</span>
        <p>
          Après avoir effectué les derniers tests, votre site est mis en ligne
          et le référencement est suivi de près. Tous les moyens sont mis en
          oeuvre pour obtenir le maximum de visibilité en ligne.
        </p>
      </li>
      <li class="process__item">
        <span class="left blue">5. Formation</span>
        <p>
          Avant ou après la mise en ligne de votre site, je vous forme à l'outil
          afin que vous puissiez gérer le contenu de votre site en toute
          autonomie. Selon le niveau d'autonomie souhaité, je propose des
          formations WordPress poussées ainsi que des formations SEO pour
          continuer d'optimiser votre référencement après la mise en ligne. Ces
          formations peuvent se faire en présentiel ou en distanciel. Une
          documentation sera également fournie.
        </p>
      </li>
      <li class="process__item-right">
        <span class="right purple">6. Suivi &amp; Maintenance</span>
        <p>
          Bénéficiez d'un suivi personnalisé en fonction de vos besoins et de
          vos objectifs.<br />
          Possibilité de mettre en place des forfaits Newsletter, d'optimisation
          continue du contenu ou de suivi de statistiques.<br />
          J'effectue les mises à jour et les sauvegardes régulières de votre
          site.
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
#process {
  align-items: center;

  h2 {
    padding-top: 80px;
    align-self: flex-start;

    @media screen and (max-width: 840px) {
      padding-top: 40px;
    }
  }
  .process {
    list-style-type: none;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }

    &__item {
      width: 80%;
      margin-top: 1em;
      margin-bottom: 1em;

      @media screen and (max-width: 1100px) {
        width: 100%;
      }

      .left {
        border-bottom-style: double;
        border-bottom-width: 5px;
        border-bottom-style: double;
        border-bottom-width: 5px;
        padding: 0 0.3em 0.3em 0.7em;
        width: fit-content;
        border-bottom-left-radius: 25px;
        font-size: 20px;
        font-family: "Manrope", sans-serif;
      }

      p {
        margin-top: 2em;
        width: 80%;
      }
    }

    &__item-right {
      text-align: end;
      width: 80%;
      margin-top: 1em;
      margin-bottom: 1em;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (max-width: 1100px) {
        width: 100%;
      }

      .right {
        border-bottom-style: double;
        border-bottom-width: 5px;
        padding: 0 0.7em 0.3em 0.3em;
        width: fit-content;
        border-bottom-right-radius: 25px;
        font-size: 20px;
        text-align: end;
        font-family: "Manrope", sans-serif;
      }

      p {
        margin-top: 2em;
        width: 80%;
        text-align: end;
      }
    }
  }

  .green {
    border-bottom-color: var(--title-primary-color);
  }

  .blue {
    border-bottom-color: rgb(46, 128, 200);
  }

  .purple {
    border-bottom-color: rgb(88, 44, 145);
  }
}
</style>
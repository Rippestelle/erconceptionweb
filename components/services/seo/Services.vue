<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col text">
        <h2>SEO</h2>
        <p>
          Après un audit de votre site, je vous propose des améliorations afin
          d'optimiser votre référencement naturel (SEO). Je fais également le
          nécessaire pour mettre en place les outils permettant un bon suivi et
          une bonne analyse des données et du comportement des utilisateurs de
          votre site internet.
        </p>
      </div>
      <div class="col picture"></div>
    </div>
    <div class="spacer"></div>
    <div class="row-reverse">
      <div class="col text">
        <h2>Webmaster WordPress</h2>
        <p>
          Vous n'avez pas le temps de créer et de gérer le contenu de votre
          site? J'offre mes services pour modifier/ajouter du contenu à votre
          site WordPress et le mettre à jour. J'effectue une analyse régulière
          afin d'assurer le développement perpétuel de votre site et un suivi
          des statistiques en vue de générer plus de trafic et de cibler vos
          prospects.
        </p>
      </div>
      <div class="col"></div>
    </div>
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

@media screen and (max-width: 640px) {
  .row {
    display: flex;
    flex-direction: column;

    .col {
      width: 100%;
    }
  }
}
</style>

<template>
  <NuxtLayout>
    <section class="container">
      <div class="spacer"></div>
      <h1>Ooops la page demandée n'existe pas...</h1>
      <p>Une erreur s'est produite ou la page souhaitée n'existe plus.</p>
      <p>
        Pour toute demande d'informations, n'hésitez pas à me contacter à
        l'adresse mail suivante : estelle.rippe.pro@gmail.com
      </p>
      <div class="spacer"></div>
      <backHomeBtn />
      <div class="spacer"></div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import backHomeBtn from "~/components/shared/backHomeBtn.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Manrope", sans-serif;
    background: linear-gradient(
      0.25turn,
      rgb(88, 44, 145),
      rgb(46, 128, 200) 50%,
      #22d49e
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
}
</style>

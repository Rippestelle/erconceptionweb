<script setup lang="ts">
import backHomeBtn from "~/components/shared/backHomeBtn.vue";

useSeoMeta({
  title: "Votre message a bien été envoyé",
  ogTitle: "Votre message a bien été envoyé",
  description:
    "Page de confirmation d'envoi d'un message via le formulaire de contact du site er-conception-web.fr",
  ogDescription:
    "Page de confirmation d'envoi d'un message via le formulaire de contact du site er-conception-web.fr.",
  ogUrl: "/success",
});
</script>

<template>
  <section class="container" role="region">
    <h1>Votre message a bien été envoyé</h1>
    <p>
      Merci d'avoir pris contact avec mon entreprise. Je vous recontacte dans
      les plus brefs délais.
    </p>
    <p>
      Si vous avez rencontré une erreur, n'hésitez pas à me contacter par mail à
      l'adresse estelle.rippe.pro@gmail.com
    </p>
    <div class="spacer"></div>
    <backHomeBtn />
    <div class="spacer"></div>
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>

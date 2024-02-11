<template>
  <div>
    <HeaderAlt title="Mentions légales" />
    <section class="container" role="region">
      <h2>Présentation du site</h2>
      <ul>
        <li>Propriétaire: Estelle RIPPE</li>
        <li>Créateur: Estelle RIPPE</li>
        <li>
          Hébergeur:
          <NuxtLink to="https://www.netlify.com/" rel="“noreferrer”"
            >https://www.netlify.com/</NuxtLink
          >
        </li>
      </ul>

      <h2>Description des services fournis</h2>
      <p>
        Le site a pour objectif de fournir une information concernant l'ensemble
        d'une activité. Tous les informations indiquées sur le site sont données
        à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les
        renseignements figurant sur le site ne sont pas exhaustifs. Ils sont
        donnés sous réserve de modifications ayant été apportées depuis leur
        mise en ligne.
      </p>

      <h2 class="height-title">
        Conditions générales d'utilisation du site et des services proposés
      </h2>
      <p>
        L'utilisation du site implique l'acceptation pleine et entière des
        conditions générales d'utilisation ci-après décrites. Ces conditions
        d'utilisation sont susceptibles d'être modifiées ou complétées à tout
        moment, les utilisateurs du site sont donc invités à les consulter de
        manière régulière.
      </p>

      <h2 class="height-title">
        Limitations contractuelles sur les données techniques
      </h2>
      <p>
        Le site utilise la technologie JavaScript (framework Vue.js et Nuxt.js).
        Le site Internet ne pourra être tenu responsable de dommages matériels
        liés à l'utilisation du site
      </p>
    </section>

    <div class="spacer"></div>
    <backHomeBtn />
    <div class="spacer"></div>
  </div>
</template>

<script setup lang="ts">
import HeaderAlt from "../components/shared/HeaderAlt.vue";
import backHomeBtn from "~/components/shared/backHomeBtn.vue";

useSeoMeta({
  title: "Mentions légales",
  ogTitle: "Mentions légales",
  description:
    "Mentions légales du site er-conception-web.fr, création de sites web sur mesure.",
  ogDescription:
    "Mentions légales du site er-conception-web.fr, création de sites web sur mesure.",
  ogUrl: "/mentions-legales",
});
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 100px;
}

@media screen and (max-width: 640px) {
  h2 {
    font-size: 18px;
    text-align: left;
  }
}

@media screen and (max-width: 640px) {
  .height-title {
    height: 60px;
  }
}
</style>

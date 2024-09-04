<script setup lang="ts">
import PageHeader from "/components/services/seo/PageHeader.vue";
import Services from "/components/services/seo/Services";
import Contact from "/components/Contact";

useSeoMeta({
  title: "Référencement naturel et webmastering",
  ogTitle: "Référencement naturel et webmastering",
  description:
    "Référencement naturel optimisé et conseils en stratégie de référencement. Gestion et entretien d'un site, actualisation du contenu.",
  ogDescription:
    "Référencement naturel optimisé et conseils en stratégie de référencement. Gestion et entretien d'un site, actualisation du contenu.",
  ogUrl: "/services/seo-webmastering",
});
</script>

<template>
  <section class="container">
    <PageHeader title="Référencement naturel &amp; webmastering" />
    <Services />
    <div class="spacer"></div>
    <Contact />
  </section>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import PageHeader from "/components/services/site/PageHeader.vue";
import Services from "/components/services/site/Services.vue";
import Contact from "/components/Contact";

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
    <PageHeader title="Création et refonte de sites internet" />
    <Services />
    <div class="spacer"></div>
    <Contact />
  </section>
</template>

<style lang="scss" scoped></style>

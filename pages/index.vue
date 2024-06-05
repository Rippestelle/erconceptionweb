<script setup lang="ts">
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import ServicesAlt from "../components/ServicesAlt.vue";
import Process from "../components/Process.vue";
import Contact from "../components/Contact.vue";
import Prices from "../components/Prices";

useSeoMeta({
  title: "Création de sites web",
  ogTitle: "Création de sites web",
  description:
    "Conception de sites sur-mesure, conseils en stratégie digitale et SEO.",
  ogDescription:
    "Conception de sites sur-mesure, conseils en stratégie digitale et SEO.",
  ogUrl: "/",
});
</script>

<template>
  <Header />
  <About />
  <ServicesAlt />
  <Process />
  <Projects />
  <Prices />
  <Contact />
</template>

<style scoped></style>

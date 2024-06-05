<script setup lang="ts">
import ItemsCarousel from "~/components/ItemsCarousel.vue";
const carouselItems = [
  {
    title: "Forfait site vitrine clé en main",
    services1: "Choix d'un thème parmis une pré-sélection",
    services2: "Jusqu'à 5 pages",
    services3: "Référencement naturel optimisé",
    services4: "Hébergement",
    price: "350€",
  },
  {
    title: "Forfait site e-commerce",
    services1: "Choix d'un thème parmis une pré-sélection",
    services2: "Jusqu'à 8 pages",
    services3: "Référencement naturel optimisé",
    services4: "Hébergement",
    price: "700€",
  },
  {
    title: "Site sur mesure",
    services1: "Thème WordPress fait maison",
    services2: "Site en JavaScript ou PHP",
    services3: "Référencement naturel optimisé",
    services4: "Hébergement",
    price: "Sur devis",
  },
  {
    title: "Formations",
    services1: "Prise en main de WordPress et son back-office",
    services2: "Formation Elementor",
    services3: "Création de site avec WordPress",
    services4: "Suivi et maintenance d'un site",
    price: "80€",
  },
  {
    title: "Suivie et maintenance",
    services1: "Mises à jour (WordPress, thème, plugins)",
    services2: "Sauvegarde hebdomadaire",
    services3: "Certificat SSL à jour",
    services4: "Corrections évolutives",
    price: "à partir de 350€",
  },
  {
    title: "Refonte site internet",
    services1: "Choix d'un thème parmis une pré-sélection",
    services2: "Tarif en fonction du nombre de pages",
    services3: "Référencement naturel optimisé",
    services4: "Hébergement",
    price: "350€",
  },
];
</script>

<template>
  <div>
    <ItemsCarousel :items="carouselItems" />
    <div class="spacer"></div>
  </div>
</template>

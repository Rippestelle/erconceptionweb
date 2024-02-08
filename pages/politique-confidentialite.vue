<script setup lang="ts">
import HeaderAlt from "../components/shared/HeaderAlt.vue";
import backHomeBtn from "~/components/shared/backHomeBtn.vue";

useSeoMeta({
  title: "Politique de confidentialité",
  ogTitle: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site er-conception-web.fr, création de sites web sur mesure.",
  ogDescription:
    "Politique de confidentialité er-conception-web.fr, création de sites web sur mesure.",
  ogUrl: "/mentions-legales",
});
</script>

<template>
  <section class="container">
    <HeaderAlt title="Politique de confidentialité" />
    <p>
      Ce document décrit les pratiques de confidentialité ainsi que vos choix
      concernant l’utilisation, l’accès et la correction des données
      personnelles sur le site
      <router-link to="/">er-conception-web.fr</router-link>
    </p>

    <h2>Données collectées</h2>
    <h3>Durant une simple visite sur le site :</h3>
    <p>
      Statistiques d’utilisation afin d’obtenir des informations sur
      l’utilisation du site, avec Google Analytics. Cet outil permet par exemple
      de connaître les pages les plus visitées, la provenance géographique des
      visiteurs ou encore les informations techniques sur le navigateur mais ne
      permet absolument pas de récupérer des informations propre à un visiteur
      unique. Ces données sont utilisées uniquement à des fin d’amélioration des
      services et de suivi.
    </p>
    <h3>Lors du remplissage du formulaire de contact :</h3>
    <p>
      Collecte uniquement les informations nécessaires pour vous répondre dans
      le cadre d’une demande de contact afin de pouvoir vous recontacter par la
      suite. Vous pouvez à tout moment demander la suppression des informations
      liées à votre candidature en envoyant un mail à l’adresse
      estelle.rippe.pro@gmail.com
    </p>
    <h2>Vos droits</h2>
    <ul>
      <li>
        Le droit de rester informé concernant l’utilisation de vos données
      </li>
      <li>
        Le droit de vous opposer à l’utilisation, la diffusion ou la
        conservation de vos données
      </li>
      <li>Le droit de vérifier vos données</li>
      <li>Le droit de rectifier vos données</li>
      <li>Le droit de supprimer vos données</li>
      <li>Le droit de demander une copie de vos données</li>
      <li>
        Le droit de vous opposer à toute intervention automatisée concernant vos
        données
      </li>
    </ul>
    <h2>Identité du responsable du traitement</h2>
    <p>
      Vous pouvez contacter Estelle RIPPE à l'adresse mail suivant:
      estelle.rippe.pro@gmail.com
    </p>
    <h2>Finalité du traitement</h2>
    <p>
      Estelle Rippe, représentant le site er-conception-web.fr, est susceptible
      de traiter vos informations personnelles : aux fins de vous fournir les
      informations ou les services que vous avez demandé de recevoir et aux fins
      de recueillir des informations nous permettant d’améliorer notre site, nos
      produits et services.
    </p>
    <h2>Durée de conservation des données</h2>
    <p>Les demandes de contact sont conservées un an (12 mois).</p>
    <h2>Stockage des données</h2>
    <p>
      Les données du site sont stockées sur les serveurs de Netlify
      <router-link to="https://www.netlify.com/" rel="“noreferrer”"
        >https://www.netlify.com/</router-link
      >. Ce prestataire est conforme au RGPD et s’engage à respecter la
      politique de confidentialité lié à ce règlement. Vous pouvez vérifier
      l’ensemble des sous-traitants dans la partie ci-dessous intitulée “Liste
      des sous-traitants”.
    </p>
    <h2>Liste des sous-traitants</h2>
    <ul>
      <li>
        Netlify (<router-link to="https://www.netlify.com/" rel="“noreferrer”"
          >https://www.netlify.com</router-link
        >) : hébergement du site
      </li>
      <li>
        Google Analytics (<router-link
          to="https://analytics.google.com/analytics/web/"
          rel="“noreferrer”"
        ></router-link
        >) : outil de mesure d’audience pour l’amélioration du site
      </li>
    </ul>
    <h2>Décharge de responsabilité</h2>
    <p>
      Cette politique de confidentialité s’applique uniquement aux données
      recueillies sur le site : https://er-conception-web.fr Le site ne peut en
      aucun cas garantir le respect de cette politique sur tous les liens
      externes qui pourraient être présents sur le site.
    </p>

    <h2>Mise à jour de la politique de confidentialité</h2>
    <p>
      Bien que la plupart des changements soient susceptibles d’être mineurs,
      cette politique de confidentialité peut être modifiée de temps en temps.
      20/12/2023 : première version
    </p>

    <div class="spacer"></div>
    <backHomeBtn />
    <div class="spacer"></div>
  </section>
</template>

<style lang="scss" scoped>
a {
  color: var(--text-primary-color);
  text-decoration: none;
}
</style>

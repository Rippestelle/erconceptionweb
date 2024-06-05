<script setup lang="ts"></script>

<template>
  <section role="region">
    <div role="contentinfo" class="container">
      <div class="flex">
        <div class="logo">
          <NuxtLink to="/">
            <img
              loading="lazy"
              src="/assets/img/logo_bandes.svg"
              class="w-full"
              alt="Logo Estelle Rippe - Création de sites web"
            />
          </NuxtLink>
        </div>
        <div class="infos">
          <!--           <ul class="links">
            <li class="links__item">
              <NuxtLink to="/"> Conseils en stratégie digitale </NuxtLink>
            </li>

            <li class="links__item">
              <NuxtLink to="/">
                Création de sites web sur mesure
              </NuxtLink>
            </li>

            <li class="links__item">
              <NuxtLink to="/"> Création de sites Wordpress </NuxtLink>
            </li>

            <li class="links__item">
              <NuxtLink to="/">
                Conseils en référencement naturel SEO</NuxtLink
              >
            </li>
          </ul>
 -->
          <ul class="links">
            <li class="links__item">
              <NuxtLink to="#services" class="nav-link"> Services</NuxtLink>
            </li>
            <li class="links__item">
              <NuxtLink to="#contact" class="nav-link"> Contact</NuxtLink>
            </li>

            <li class="links__item">
              <NuxtLink to="#projects" class="nav-link">Projets</NuxtLink>
            </li>

            <li class="links__item">
              <NuxtLink to="#about" class="nav-link">A propos</NuxtLink>
            </li>

            <li class="links__item">
              <NuxtLink to="#tarifs" class="nav-link">Tarifs</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <footer role="contentinfo">
        <div class="container">
          <span>Copyright 2023</span> |
          <NuxtLink to="/politique-confidentialite/" class="nav-link">
            Politique de confidentialité
          </NuxtLink>
          |
          <NuxtLink to="/mentions-legales/" class="nav-link">
            Mentions légales
          </NuxtLink>
        </div>
      </footer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 840px) {
  .flex {
    flex-wrap: wrap;
    justify-content: center;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

.logo img {
  width: 120px;
}

.infos {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.links {
  list-style: none;

  &__item a {
    text-decoration: none;
    color: var(--text-primary-color);
    font-weight: 500;
  }
}

footer .container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 0.5em;
  margin: 1em 0 1em 0;

  @media screen and (max-width: 840px) {
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    color: var(--text-primary-color);
    font-weight: 400;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <div class="flex">
        <div class="logo">
          <router-link to="/">
            <img
              loading="lazy"
              src="/assets/img/logo_bandes.svg"
              class="w-full"
              alt="Logo Estelle Rippe - Création de sites web"
            />
          </router-link>
        </div>
        <div class="infos">
          <!--           <ul class="links">
            <li class="links__item">
              <router-link to="/"> Conseils en stratégie digitale </router-link>
            </li>

            <li class="links__item">
              <router-link to="/">
                Création de sites web sur mesure
              </router-link>
            </li>

            <li class="links__item">
              <router-link to="/"> Création de sites Wordpress </router-link>
            </li>

            <li class="links__item">
              <router-link to="/">
                Conseils en référencement naturel SEO</router-link
              >
            </li>
          </ul>
 -->
          <ul class="links">
            <li class="links__item">
              <router-link to="#services" class="nav-link">
                Services</router-link
              >
            </li>
            <li class="links__item">
              <router-link to="#contact" class="nav-link"> Contact</router-link>
            </li>

            <li class="links__item">
              <router-link to="#projects" class="nav-link">Projets</router-link>
            </li>

            <li class="links__item">
              <router-link to="#about" class="nav-link">A propos</router-link>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div class="container">
          <span>Copyright 2023</span> |
          <router-link to="/politique-confidentialite/" class="nav-link">
            Politique de confidentialité
          </router-link>
          |
          <router-link to="/mentions-legales/" class="nav-link">
            Mentions légales
          </router-link>
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

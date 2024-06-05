<script setup lang="ts">
import { ref, onMounted } from "vue";
import MenuIcon from "../components/shared/MenuIcon.vue";
/*import ContactFormModal from '../shared/ContactFormModal.vue';

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};*/

const header = ref();
const isMobile = ref(false);

const toggleNavbar = () => {
  header.value.classList.toggle("responsive");
};

const onNavigation = (services = false) => {
  toggleNavbar();
};

onMounted(() => {
  if (window.innerWidth < 1150) {
    isMobile.value = true;
  }
});
</script>

<template>
  <div id="top">
    <div class="responsive-logo">
      <NuxtLink to="/">
        <img
          src="/assets/img/logo_bandes.svg"
          alt="Logo Estelle Rippe - Développement Web"
        />
      </NuxtLink>
    </div>

    <div class="navbar">
      <header ref="header" class="container">
        <div class="nav__heading">
          <NuxtLink to="/">
            <img
              src="/assets/img/logo_bandes.svg"
              alt="Logo Estelle Rippe - Développement Web"
              class="desktop-logo"
            />
          </NuxtLink>

          <MenuIcon class="responsive-menu" @click="toggleNavbar" />
        </div>

        <div class="nav-container">
          <nav role="navigation">
            <NuxtLink
              class="nav__link nav-link"
              to="/#about"
              @click="() => onNavigation()"
            >
              A propos
            </NuxtLink>

            <NuxtLink
              class="nav__link nav-link"
              to="/#services"
              @click="() => onNavigation()"
            >
              Services
            </NuxtLink>

            <NuxtLink
              class="nav__link nav-link"
              to="/#projects"
              @click="() => onNavigation()"
            >
              Projets
            </NuxtLink>

            <NuxtLink
              class="nav__link nav-link"
              to="/#tarifs"
              @click="() => onNavigation()"
            >
              Tarifs
            </NuxtLink>
          </nav>

          <div class="flex">
            <NuxtLink
              class="nav__link button-64"
              to="/#contact"
              @click="() => onNavigation()"
            >
              <span class="text">Contact</span>
            </NuxtLink>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
}

.nav__heading {
  display: flex;
  align-items: center;
}

.responsive-menu {
  display: none;
  cursor: pointer;
}

.desktop-logo {
  width: 60px;
}

.nav-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: -webkit-fill-available;

  @media screen and (max-width: 1175px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px) !important;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1175px) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px) !important;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em 0 3.5em;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    width: 50%;

    @media screen and (max-width: 1200px) {
      margin-right: 2em;
    }
  }

  .nav__link,
  a:not(.button-link) {
    color: var(--title-primary-color);
    margin: 0.6em 0 0 0;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 3px solid transparent;
    margin-right: 1.2em;
    font-size: 14px;

    &.NuxtLink-exact-active,
    &.NuxtLink-exact-active > a {
      font-weight: 600;
    }

    ul {
      display: none;
      padding: 0.8em 2em;
      margin-bottom: 0;

      li {
        list-style: none;
      }
    }
  }

  span.nav__link {
    padding: 2em 3em calc(2em + 4px) 4em;
    margin: 0 0 -4px 0;
    cursor: pointer;
    z-index: 1;

    @media screen and (max-width: 1250px) {
      padding: 2em 2em calc(2em + 4px) 2em;
    }
  }
}

nav a:nth-child(3) {
  margin-right: 2em !important;
}
nav a:nth-child(4) {
  margin-right: 2em !important;
}

.responsive-logo {
  display: none;

  @media screen and (max-width: 1175px) {
    img {
      width: 45px !important;
      height: auto;
    }

    nav {
      gap: 2em !important;
    }
  }
}

@media screen and (max-width: 1175px) {
  .desktop-logo {
    display: none;
  }

  nav {
    margin-bottom: 1.5em;
    padding: 1em;
  }

  .responsive-logo {
    display: block;
    position: absolute;
    z-index: 2000;

    img {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
    }
  }

  header {
    padding: 1em;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
      144deg,
      rgb(88, 44, 145),
      rgb(46, 128, 200) 50%,
      #22d49e
    );
    border-image-slice: 1;
    width: 100%;
  }

  nav {
    gap: 1em !important;
    width: 80%;

    .nav__link,
    a {
      width: fit-content;
      text-decoration: none;
      padding: 0 !important;
      margin: 0 !important;
      border-bottom: none !important;
    }

    ul {
      display: flex !important;
      flex-direction: column;
      gap: 1em;
    }
  }

  .nav__heading {
    width: 100%;

    img {
      position: absolute;
      right: 10px;
      top: 12px;
      width: 35px;
    }
  }

  .responsive-menu {
    display: block;
  }

  header {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 2em;

    &:not(.responsive) nav,
    &:not(.responsive) a {
      display: none;
    }

    &.responsive nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &.responsive a {
      display: flex;
    }
  }
}

.button-link {
  display: block;
  width: -moz-fit-content;
  width: fit-content;
  color: #fff !important;
  border: none;
  border-radius: 10px;
  padding: 10px 26px;
  font-size: 18px;
  text-decoration: none !important;
  margin-top: 15px;
  text-align: center;
  transition: all 0.3s;
}

@media screen and (max-width: 1175px) {
  ul li:nth-child(6) {
    display: none;
  }

  .button-64 {
    margin-left: 1em !important;
  }
}

@media screen and (max-width: 11775px) {
  nav a {
    margin-right: 16px !important;
  }
}
</style>

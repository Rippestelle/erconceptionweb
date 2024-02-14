<script setup lang="js">
onMounted(() => {

  tiltElement({
    card :".projects__card",
  });
});
</script>

<template>
  <section class="container" id="projects" role="region">
    <h2>Projets</h2>
    <p>
      En dehors de nombreux projets réalisés en entreprise (sites vitrines,
      sites institutionnels, applications métier ou encore landing-page), voici
      mes premiers projets réalisés en freelance.
    </p>
    <div class="projects">
      <a
        href="https://maufitcoaching.fr/"
        class="projects__card"
        target="_blank"
        title="Aller sur le site https://maufitcoaching.fr/"
      >
        <img src="../public/assets/icons/34.svg" class="border top" />
        <div class="projects__card__top">
          <img
            src="../public/assets/img/maufit-coaching.png"
            alt="couverture du site Maufitcoaching.fr"
          />
        </div>
        <div class="projects__card__bottom">
          <p>
            Mau-Fit Coaching est une micro-entreprise de coaching à domicile. La
            cliente m'a contacté pour une création de site WordPress et une
            formation au back-office afin de pouvoir gérer son contenu. Travail
            sur le référencement local et la mise en valeurs des programmes.
          </p>
        </div>
        <img
          src="../public/assets/icons/35.svg"
          class="border bottom"
          alt="couverture du site Quick-services-angouleme.fr"
        />
      </a>
      <a
        href="https://www.quick-services-angouleme.fr/"
        class="projects__card"
        target="_blank"
        title="Aller sur le site https://www.quick-services-angouleme.fr/"
      >
        <img src="../public/assets/icons/34.svg" class="border top" />
        <div class="projects__card__top">
          <img
            src="../public/assets/img/quick-services.png"
            alt="couverture du site Quick-services-angouleme.fr"
          />
        </div>
        <div class="projects__card__bottom">
          <p>
            Refonte avec WordPress du site vitrine de la cordonnerie -
            serrurerie Quick services. Premier projet en freelance avant
            d'autres expériences en entreprise. L'objectif était d'améliorer le
            référencement (SEO) et d'optimiser le contenu.
          </p>
        </div>
        <img src="../public/assets/icons/35.svg" class="border bottom" />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container p {
  margin-bottom: 25px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin-top: 30px;

  @media screen and (max-width: 840px) {
    display: flex;
    flex-wrap: wrap;

    &__card {
      &__top {
        width: 100%;
        height: 250px;

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
    }
  }

  &__card {
    cursor: pointer;
    position: relative;
    height: 100%;

    .border {
      width: 100px;
      position: absolute;

      @media screen and (max-width: 300px) {
        display: none;
      }
    }

    .top {
      top: -33px;
      left: -35px;
    }

    .bottom {
      bottom: 0px;
      right: -30px;
      transform: rotate(180deg);
    }

    &__top {
      width: 100%;
      height: 50%;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
    &__bottom p {
      font-weight: 400;
    }
  }
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: var(--text-primary-color);
  background: none;
  -webkit-text-fill-color: inherit;
}
</style>

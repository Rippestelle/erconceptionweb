<script setup lang="ts">
type Slide = {
  title: string;
  services1: string;
  services2: string;
  services3: string;
  services4?: string;
  price: string;
};

const props = withDefaults(
  defineProps<{
    items: Array<Slide>;
    slides?: number;
  }>(),
  {
    slides: 4,
  }
);

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 32,
  },
  500: {
    slidesPerView: 2,
    spaceBetween: 32,
  },
  950: {
    slidesPerView: 3,
    spaceBetween: 32,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 32,
  },
};
</script>

<template>
  <Swiper
    class="prices"
    :modules="[SwiperNavigation, SwiperAutoplay, SwiperPagination]"
    :slides-per-view="slides"
    :space-between="32"
    :breakpoints="breakpoints"
    :autoplay="{ delay: 5000 }"
    navigation
    loop
    pagination
  >
    <SwiperSlide v-for="slide in items" :key="slide.title">
      <div class="prices__item">
        <div class="tilt">
          <h3>
            {{ slide.title }}
          </h3>
          <ul class="prices">
            <li>
              {{ slide.services1 }}
            </li>
            <li>
              {{ slide.services2 }}
            </li>
            <li>
              {{ slide.services3 }}
            </li>
            <li>
              {{ slide.services4 }}
            </li>
          </ul>
          <p>
            A partir de <br />
            <span>{{ slide.price }}</span>
          </p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.swipper-wrapper,
.swiper {
  height: inherit;
}

.prices {
  --swiper-theme-color: #fff;
  --swiper-navigation-size: 30px;
  --swiper-navigation-sides-offset: 0;
  padding-left: 1.8rem;
  padding-right: 1.8rem;

  @media screen and (max-width: 1200px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  &__item {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 16px;
    width: 100%;

    .tilt {
      min-height: 350px;
      padding: 1em;
      background: transparent;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      font-size: 18px;
      color: var(--text-primary-color);
      text-align: center;
      border-radius: 16px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      ul {
        text-align: left;
        margin-left: 1em;

        li {
          list-style-type: circle;
        }
      }

      p {
        margin-bottom: 0;

        span {
          background: linear-gradient(
            0.65turn,
            rgb(88, 44, 145),
            rgb(46, 128, 200) 35%,
            #22d49e
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          text-align: center;
          font-size: 38px;
        }
      }
    }

    .tilt::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 16px;
      padding: 2px;
      background: linear-gradient(
        0.25turn,
        rgb(88, 44, 145),
        rgb(46, 128, 200) 50%,
        #22d49e
      );
      -webkit-mask: linear-gradient(
            0.25turn,
            rgb(88, 44, 145),
            rgb(46, 128, 200) 50%,
            #22d49e
          )
          content-box,
        linear-gradient(
          0.25turn,
          rgb(88, 44, 145),
          rgb(46, 128, 200) 50%,
          #22d49e
        );
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
}

.swiper-slide {
  height: auto;
}
</style>

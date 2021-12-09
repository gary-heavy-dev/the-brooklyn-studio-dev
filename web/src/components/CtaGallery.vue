<template>
  <section
    class="cta-gallery ai-c two-up"
    :style="{ backgroundColor: content.bgColor.value }"
  >
    <div class="cta-gallery__gallery-wrapper">
      <div class="cta-gallery__gallery-inner text-center">
        <swiper
          class="cta-gallery__gallery"
          :options="swiperOption"
        >
          <swiper-slide
            v-for="(image, index) in content.gallery"
            :key="index"
          >
            <BaseImage
              v-if="image"
              :src="image"
              :x="390"
              :y="496"
            />
          </swiper-slide>
        </swiper>
        <div class="swiper__pagination"></div>
      </div>
    </div>
    <div class="cta-gallery__copy-wrapper">
      <div class="container--right grid grid--6-desktop">
        <div class="cta-gallery__copy">
          <h2
            v-if="content.heading"
          >{{ content.heading }}</h2>
          <p
            v-if="content.copy"
          >{{ content.copy }}</p>
          <g-link
            v-if="content.linkText"
            :to="content.link"
          >{{ content.linkText }}</g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    content: Object
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        pagination: {
          el: '.swiper__pagination',
          clickable: true
        },
        autoplay: {
          delay: 6000
        }
      }
    }
  }
}
</script>

<style lang="scss">
.cta-gallery {
  width: 100%;
  max-width: 100%;
  padding-bottom: var(--margin--large);

  @include desktop {
    padding-top: var(--margin--large);

    &__gallery-inner {
      @include container--left;
    }

    &__copy {
      grid-column: 2/7;
    }
  }
}
</style>

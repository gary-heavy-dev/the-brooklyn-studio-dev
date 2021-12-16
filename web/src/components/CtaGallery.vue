<template>
  <section
    :class="'cta-gallery flex cta-gallery--' + content.imageGalleryLocation + ' background--' + content.bgColor.title"
  >
    <div class="cta-gallery__inner grid grid--12-desktop">
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
      <div class="cta-gallery__copy flex ai-c">
        <div class="cta-gallery__copy-inner">
          <h2
            class="h2 upper"
            v-if="content.heading"
          >{{ content.heading }}</h2>
          <p v-if="content.copy">{{ content.copy }}</p>
          <g-link
            v-if="content.linkText"
            :to="content.link"
            class="upper"
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

  &__gallery-wrapper {
    grid-column: span 6;
  }

  @include desktop {

    &__inner {
      @include container;
    }

    &__copy {
      grid-column: 8/13;
    }
  }

  @include desktop-down {

    &__copy {
      @include container;
    }
  }

  &--right {

    .cta-gallery__gallery-wrapper {

      @include desktop {
        grid-column: 7/13;
        order: 2;
      }
    }

    .cta-gallery__copy {

      @include desktop {
        grid-column: span 5;
      }
    }
  }
}
</style>

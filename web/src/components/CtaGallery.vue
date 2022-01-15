<template>
  <section
    :class="'cta-gallery w-100 flex cta-gallery--' + content.imageGalleryLocation + ' background--' + content.bgColor.title + ' p-' + content.paddingSize"
    :id="content.navTitle ? $toKebabCase(content.navTitle) : ''"
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
                :lazy="true"
                :sizes="sizes"
                :x="390"
                :y="496"
              />
            </swiper-slide>
          </swiper>
          <div class="swiper__pagination cta-gallery__swiper-pagination"></div>
        </div>
      </div>
      <div class="cta-gallery__copy p-mobile-copy-block flex ai-c">
        <div class="cta-gallery__copy-inner">
          <h2
            class="h2 upper"
            v-if="content.heading"
          >{{ content.heading }}</h2>
          <BaseBlockContent
            v-if="content._rawCopy"
            :blocks="content._rawCopy"
          />
          <g-link
            v-if="content.linkText"
            :to="content.link"
            class="upper button mt-60"
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
          el: '.cta-gallery__swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 6000
        }
      },
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 591,
        hd: 792,
        fourK: 1584
      }
    }
  }
}
</script>

<style lang="scss">
.cta-gallery {

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
    flex-direction: column;
    padding: 0;

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
.home .cta-gallery__copy p {
  font-size: var(--h5-font-size);
  line-height: var(--h5-line-height--alt);

  @include desktop {
    line-height: var(--h5-line-height);
    font-weight: 500;
  }
}
</style>

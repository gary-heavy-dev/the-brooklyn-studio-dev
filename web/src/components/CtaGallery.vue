<template>
  <section
    class="cta-gallery"
    :style="{ backgroundColor: content.bgColor.value }"
  >
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
          :columns="1"
          :alt="image.alt"
        />
      </swiper-slide>
    </swiper>
    <div class="swiper__pagination"></div>
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
  display: flex;
  flex-direction: column;

  &__gallery {
    width: 100%;
  }

  &__copy {
    margin: 0 var(--margin-h);
    padding: var(--margin-t) 0 var(--margin-b);
  }
}
</style>

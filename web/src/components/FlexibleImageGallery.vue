<template>
  <section class="flexible-image-gallery container grid grid--12-desktop mb-100">
    <div class="col-span--inset-1" v-view="startSwiper">
      <swiper
        :options="swiperOption"
        class="swiper"
        :auto-update="true"
        :auto-destroy="false"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        v-view="$iAmRevealed"
        ref="flexibleImageGallery"
      >
        <swiper-slide v-for="(image, index) in content.images" :key="index">
          <BaseImage
            v-if="image"
            :src="image"
            :lazy="true"
            :sizes="sizes"
            :x="1000"
            :y="864"
            :caption="image.caption"
            :captionStyle="true"
          />
        </swiper-slide>
        <div
          class="swiper__pagination flexible-image-gallery__swiper-pagination text-center"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  props: {
    content: Object
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.flexibleImageGallery.$swiper
    }
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        pagination: {
          el: '.flexible-image-gallery__swiper-pagination',
          clickable: true
        }
      },
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 999,
        hd: 1333,
        fourK: 2666
      }
    }
  },
  methods: {
    startSwiper(e) {
      if (e.percentInView > 0) {
        this.swiper.autoplay.start()
      }
    }
  }
}
</script>

<style lang="scss">
.flexible-image-gallery {
  .swiper__pagination {
    position: relative;
    transform: unset;

    .swiper-pagination-bullet {
      background-color: var(--color--gray-tertiary);
    }
  }
}
</style>

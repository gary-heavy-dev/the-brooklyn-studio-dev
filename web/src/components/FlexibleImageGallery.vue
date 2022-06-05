<template>
  <section class="flexible-image-gallery container grid grid--12-desktop">
    <div class="col-span--inset-1">
      <swiper
        :options="swiperOption"
        class="swiper"
        :auto-update="true"
        :auto-destroy="false"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
      >
        <swiper-slide
          v-for="(image, index) in content.images"
          :key="index"
        >
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
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
      },
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 999,
        hd: 1333,
        fourK: 2666
      },
    }
  },
}
</script>

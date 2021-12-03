<template>
  <div class="work-feed__carousel mb-lg h-60vh o-h">
    <div class="project-hero__title pos-abs z-1 w-100 flex jc-c">
      <h1 class="h1 container color--white">{{ heading }}</h1>
    </div>
    <div class="swiper">
      <div class="swiper-slide">
        <BaseImage
          v-if="image"
          :src="image"
          :x="1284"
          :y="500"
          :columns="1"
          :alt="image.alt"
        />
      </div>
    </div>
    <!-- <swiper
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
    </swiper> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

export default {
  components: {
    // Swiper,
    // SwiperSlide
  },
  props: {
    heading: String,
    image: Object
  },
  data() {
    return {
      // swiperOption: {
      //   loop: true,
      //   speed: 300,
      //   threshold: 10
      // }
    }
  }
}
</script>

<template>
  <div class="project-lightbox lightbox">
    <swiper
      class="lightbox__swiper"
      :options="swiperOption"
      ref="lightboxSwiper"
    >
      <swiper-slide
        v-for="(image, index) in lightboxArray"
        class="lightbox__swiper-slide"
        :key="index"
      >
        <div class="lightbox__caption">{{ image.caption }}</div>
        <g-image
          class="lightbox__image"
          :src="image.asset.url"
        />
      </swiper-slide>
    </swiper>
    <div class="lightbox__pagination button"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        slidesPerView: 1,
        pagination: {
          el: '.lightbox__pagination',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '<span>/</span>' + '<span class="' + totalClass + '"></span>'
          }
        }
      },
    }
  },
  computed: {
    lightboxArray() {
      const contentArray = this.content.flexibleContent
      const imageArray = contentArray.flatMap(this.getImage)
      return imageArray.filter(image => image)
    },
    swiper() {
      return this.$refs.lightboxSwiper.$swiper
    }
  },
  props: {
    content: Object
  },
  methods: {
    getImage(flexContentItem) {
      if (flexContentItem.image) {
        return {...flexContentItem.image}
      } else if (flexContentItem.imageSmall) {
        return [
          {...flexContentItem.imageSmall},
          {...flexContentItem.imageLarge}
        ]
      }
    },
    goToSlide(slideIndex) {
      this.swiper.slideTo(slideIndex, 0)
      console.log("click!", slideIndex)
    }
  }
}
</script>

<style lang="scss">
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999;
  width: 100vw;
  height: 100vh;
  background-color: rgb(248 247 247 / 95%);

  &__swiper {
    height: 100%;

    &-slide {
      display: flex;
      justify-content: center;
      padding: 137px;
    }
  }

  .swiper-slide {
    opacity: 1 !important;

		&:not(.swiper-slide-active) { 
      opacity: 0 !important; 
    }
  }

  &__image {
    object-fit: contain;
    transition: opacity 0.3s linear;
  }

  &__caption {
    position: fixed;
    top: 27px;
    left: 38px;
  }

  &__pagination {
    border: none;
    text-align: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
    pointer-events: none;
  }
}
</style>
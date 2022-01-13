<template>
  <div
    class="lightbox"
    id="projectLightbox"
  >
    <ProjectLightboxClose
      @click.native="closeLightbox"
    />
    <swiper
      class="lightbox__swiper swiper"
      :options="swiperOption"
      ref="lightboxSwiper"
    >
      <swiper-slide
        v-for="(image, index) in lightboxArray"
        class="lightbox__swiper-slide"
        :key="index"
        @click.native="closeLightbox"
      >
        <div class="lightbox__caption">{{ image.caption }}</div>
        <g-image
          class="lightbox__image"
          :src="image.asset.url"
        />
      </swiper-slide>
      <div 
        class="swiper-button-prev"
        slot="button-prev"
      >
        <SliderArrow />
      </div>
      <div
        class="swiper-button-next"
        slot="button-next"
      >
        <SliderArrow />
      </div>
    </swiper>
    <div class="lightbox__pagination xsmall"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import eventHub from '~/utils/eventHub'
import ProjectLightboxClose from '~/components/ProjectLightboxClose'
import SliderArrow from '~/components/SliderArrow'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectLightboxClose,
    SliderArrow
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
    openLightbox() {
      const lightbox = document.getElementById("projectLightbox")
      lightbox.classList.add("lightbox--active")
      // console.log("open me please!")
    },
    closeLightbox() {
      const lightbox = document.getElementById("projectLightbox")
      lightbox.classList.remove("lightbox--active")
    },
    goToSlide(slideId) {
      const slideIndex = this.lightboxArray.findIndex(x => x.asset.id === slideId)
      console.log("My index is:", slideIndex)
      this.openLightbox
      this.swiper.slideTo(slideIndex + 1, 0)
    }
  },
  mounted() {
    eventHub.$on('open-lightbox', (data) => {
      const lightbox = document.getElementById("projectLightbox")
      lightbox.classList.add("lightbox--active")
      this.goToSlide(data)
    })
  },
  beforeDestroy() {
    eventHub.$off('open-lightbox')
  }
}
</script>

<style lang="scss">
.lightbox {
  color: var(--color--gray-tertiary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(248 247 247 / 95%);
  transition: opacity 0.5s ease-in-out;

  &--active {
    z-index: 9999999999999999999;
    opacity: 1;
  }

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
    bottom: 80px;
    width: 100%;
    pointer-events: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color--gray-tertiary);
    height: 100%;
    width: 80px;
    top: 21px;
  }

  .swiper-button-next {
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }
}
</style>
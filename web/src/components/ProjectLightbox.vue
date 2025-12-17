<template>
  <div class="lightbox" id="projectLightbox">
    <div class="lightbox__title" v-html="content.title"></div>
    <ProjectLightboxClose @click.native="closeLightbox" />
    <swiper class="lightbox__swiper swiper" :options="swiperOption" ref="lightboxSwiper">
      <swiper-slide
        v-for="(image, index) in lightboxArray"
        class="lightbox__swiper-slide"
        :key="index"
        @click.native="closeLightbox"
      >
        <g-image
          class="lightbox__image lazyload"
          data-sizes="auto"
          :src="image.asset.url"
          :srcset="$gImageMap(image.asset.url, sizes, $static.metadata.sanityOptions)"
          :alt="image.alt"
        />
      </swiper-slide>
      <div class="swiper-button-prev desktop-only" slot="button-prev">
        <SliderArrow />
      </div>
      <div class="swiper-button-next desktop-only" slot="button-next">
        <SliderArrow />
      </div>
      <div class="lightbox__mobile-nav mobile-only">
        <div class="swiper-button-prev" slot="button-prev">
          <SliderArrowSmall />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <SliderArrowSmall />
        </div>
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
import SliderArrowSmall from '~/components/SliderArrowSmall'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectLightboxClose,
    SliderArrow,
    SliderArrowSmall
  },
  data() {
    return {
      sizes: {},
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.lightbox__pagination',
          type: 'fraction',
          renderFraction: function(currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              '<span>/</span>' +
              '<span class="' +
              totalClass +
              '"></span>'
            )
          }
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        }
      }
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
        return { ...flexContentItem.image }
      } else if (flexContentItem.imageSmall) {
        return [{ ...flexContentItem.imageSmall }, { ...flexContentItem.imageLarge }]
      }
    },
    openLightbox() {
      const lightbox = document.getElementById('projectLightbox')
      lightbox.classList.add('lightbox--active')
      // console.log("open me please!")
    },
    closeLightbox() {
      const lightbox = document.getElementById('projectLightbox')
      lightbox.classList.remove('lightbox--active')
    },
    goToSlide(slideId) {
      const slideIndex = this.lightboxArray.findIndex(x => x.asset.id === slideId)
      // console.log("My index is:", slideIndex)
      this.openLightbox
      this.swiper.slideTo(slideIndex + 1, 0)
    },
    handleEscape(e) {
      if (e.key == 'Escape') {
        this.closeLightbox()
      }
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleEscape)
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleEscape)
    }
  },
  mounted() {
    eventHub.$on('open-lightbox', data => {
      const lightbox = document.getElementById('projectLightbox')
      lightbox.classList.add('lightbox--active')
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
  left: 0;
  right: 0;
  top: 0;
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

  &__title {
    position: absolute;
    padding: 37px calc(var(--grid-margin) * 2.5) 37px var(--grid-margin);

    @include desktop {
      padding: 40px;
    }
  }

  &__swiper {
    height: 100%;

    &-slide {
      display: flex;
      justify-content: center;
      padding: 80px var(--grid-margin) 137px;

      @include desktop {
        padding: 137px;
      }
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

  // &__image,
  // &__image .base-image__inner,
  // &__image img {
  //   height: 100%;
  // }

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
    width: 8px;
    top: 52.2%;
    transform: translateY(-50%);

    @include laptop {
      width: 30px;
    }

    @include desktop {
      width: 50px;
    }
  }

  .swiper-button-next {
    right: 40px;
  }

  .swiper-button-prev {
    left: 40px;
  }

  &__mobile-nav {
    .swiper-button-next,
    .swiper-button-prev {
      height: 15px;
      width: 10px;
      top: unset;
      bottom: 82px;
    }

    .swiper-button-next {
      right: 25%;
    }

    .swiper-button-prev {
      left: 25%;
    }
  }
}
</style>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>

<template>
  <div
    class="link-gallery__swiper-wrapper mobile-only w-100"
    v-view="startSwiper"
  >
    <div class="text-center">
      <swiper
        :options="swiperOption"
        ref="linkGallerySwiper"
        @slideChange="activeSlide"
      >
        <swiper-slide>
          <BaseImage
            v-if="content.image"
            :src="content.image"
            :lazy="true"
            :sizes="sizes"
            :x="390"
            :y="496"
            :caption="content.image.caption"
            :captionStyle="content.image.captionStyle"
          />
        </swiper-slide>
        <swiper-slide
          v-for="(link, index) in content.links"
          :key="index"
          :data-slug="link.link.slug.current"
        >
          <BaseImage
            v-if="link.image"
            :src="link.image"
            :lazy="true"
            :sizes="sizes"
            :x="390"
            :y="496"
            :caption="link.image.caption"
            :captionStyle="link.image.captionStyle"
          />
        </swiper-slide>
      </swiper>
      <div class="swiper__pagination link-gallery__swiper-pagination"></div>
    </div>
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
  computed: {
    swiper() {
      return this.$refs.linkGallerySwiper.$swiper
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
          el: '.link-gallery__swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1025: {
            enabled: false
          }
        }
      },
      sizes: {
        mobile: 338,
        tablet: 768,
        laptop: 1024,
        desktop: 608,
        hd: 815,
        fourK: 1630 // by 2170 tall
      }
    }
  },
  props: {
    content: Object
  },
  methods: {
    activeSlide() {
      let slideIndex = this.swiper.realIndex + 1
      let currentData = this.swiper.slides[slideIndex].dataset.slug
      const links = document.getElementsByClassName('link-gallery__link')
      Array.prototype.forEach.call(links, function(link) {
        if (link.dataset.linkSlug == currentData) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    },
    startSwiper(e) {
      if (e.percentInView > 0) {
        this.swiper.autoplay.start()
      }
    }
  }
}
</script>

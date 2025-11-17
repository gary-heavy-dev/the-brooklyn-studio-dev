<template>
  <section class="full-width-carousel o-h" id="fullWidthCarousel">
    <swiper
      ref="heroSwiper"
      :options="swiperOptions"
      class="swiper full-width-carousel__swiper"
    >
      <swiper-slide v-for="(image, index) in carouselImages" :key="index">
        <BaseImage
          v-if="image"
          :src="image"
          :lazy="true"
          :caption="image.caption"
          :captionStyle="image.captionStyle"
        />
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev">
        <SliderArrow />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <SliderArrow />
      </div>
    </swiper>

    <div ref="overlay" class="full-width-carousel__overlay">
      <div class="full-width-carousel__gradient"></div>
      <lottie-animation
        ref="heroLottie"
        :animationData="heroAnimationData"
        :autoPlay="false"
        @complete="onHeroLottieComplete"
      />
    </div>

    <button
      class="full-width-carousel__btn-play"
      :aria-pressed="autoplayRunning"
      :aria-label="autoplayRunning ? 'Pause carousel autoplay' : 'Play carousel autoplay'"
      @click="toggleAutoplay"
    >
      <span v-if="autoplayRunning">❚❚ Pause</span>
      <span v-else>▶ Play</span>
    </button>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import BaseImage from '~/components/BaseImage'
import SliderArrow from '~/components/SliderArrow'
import LottieAnimation from 'lottie-web-vue'
import DesktopHeroAnimation from '~/components/lottie/desktop-logo-animation.json'
import MobileHeroAnimation from '~/components/lottie/mobile-logo-animation.json'

export default {
  name: 'FullWidthCarousel',
  components: { Swiper, SwiperSlide, BaseImage, SliderArrow, LottieAnimation },
  props: {
    playLottie: Boolean
  },
  data() {
    return {
      hasPlayedHero: false,
      hasFadedOut: false,
      autoplayRunning: false,
      fadeTimeout: null,
      lottieCompleteFadeOutTimeoutDuration: 300,
      swiperStartTimeoutDuration: 500,
      overlayFadeOutStartTimeoutDuration: 600,
      lottiePlayTimeoutDuration: 800,
      overlayFadeOutTimeoutDuration: 5800,
      swiperOptions: {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        speed: 1000,
        autoplay: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
    }
  },
  computed: {
    heroAnimationData() {
      if (typeof window !== 'undefined' && window.innerWidth <= 1024)
        return MobileHeroAnimation
      return DesktopHeroAnimation
    },
    carouselImages() {
      return this.$static.page.heroImages.images || []
    },
    isShowIntro() {
      return this.$static.page.heroImages.enableIntro
    },
    autoplay() {
      return this.$static.page.heroImages?.autoplay || true
    },
    delay() {
      return this.$static.page.heroImages?.delay || 5000
    },
  },
  watch: {
    playLottie(newVal) {
      if (newVal && !this.hasPlayedHero && !sessionStorage.getItem('heroPlayed')) {
        this.startHeroLottie()
      }
    },
  },
  mounted() {
    const introPlayed = sessionStorage.getItem('intro')
    const heroPlayed = sessionStorage.getItem('heroPlayed')

    window.addEventListener('scroll', this.handleScroll, { passive: true })

    if (!this.isShowIntro && heroPlayed !== 'played') {
      this.startHeroLottie()
    }

    if (heroPlayed === 'played') {
      this.$nextTick(() => {
        setTimeout(() => {
          this.startSwiper()
        }, this.swiperStartTimeoutDuration)
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.fadeTimeout)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    startHeroLottie() {
      const overlay = this.$refs.overlay
      const lottie = this.$refs.heroLottie
      if (!overlay || !lottie) return this.startSwiper()

      this.hasPlayedHero = true
      overlay.style.display = 'flex'
      overlay.style.opacity = '1'
      overlay.style.pointerEvents = 'auto'

      setTimeout(() => {
        try {
          lottie.play()
        } catch (e) {
          this.fadeOutHeroOverlay()
        }
      }, this.lottiePlayTimeoutDuration)

      this.fadeTimeout = setTimeout(() => {
        this.fadeOutHeroOverlay()
      }, this.overlayFadeOutTimeoutDuration)
    },

    onHeroLottieComplete() {
      clearTimeout(this.fadeTimeout)
      this.fadeTimeout = setTimeout(() => {
        this.fadeOutHeroOverlay()
      }, this.lottieCompleteFadeOutTimeoutDuration)
    },

    fadeOutHeroOverlay() {
      if (this.hasFadedOut) return
      this.hasFadedOut = true

      const overlay = this.$refs.overlay
      if (!overlay) return this.startSwiper()

      overlay.style.transition = 'opacity 0.6s ease'
      overlay.style.opacity = '0'
      overlay.style.pointerEvents = 'none'
      sessionStorage.setItem('heroPlayed', 'played')

      setTimeout(() => {
        overlay.style.display = 'none'
        this.startSwiper()
      }, this.overlayFadeOutStartTimeoutDuration)
    },

    startSwiper() {
      const swiper = this.$refs.heroSwiper?.swiper || this.$refs.heroSwiper?.$swiper
      if (!swiper) return

      if (this.autoplay) {
        swiper.params.autoplay = {
          delay: this.delay || 5000,
          disableOnInteraction: false,
        }
        swiper?.autoplay?.start()
        this.autoplayRunning = true
      } else {
        swiper?.autoplay?.stop?.()
        this.autoplayRunning = false
      }
    },

    toggleAutoplay() {
      const swiper = this.$refs.heroSwiper?.swiper || this.$refs.heroSwiper?.$swiper
      if (!swiper) return

      if (this.autoplayRunning) {
        swiper.autoplay.stop()
        this.autoplayRunning = false
      } else {
        swiper.params.autoplay = {
          delay: this.delay || 5000,
          disableOnInteraction: false
        }
        swiper.autoplay.start()
        this.autoplayRunning = true
      }
    },

    handleScroll() {
      if (window.scrollY > 10 && !this.hasFadedOut) {
        this.fadeOutHeroOverlay()
      }
    },
  }
}
</script>

<style lang="scss">
.full-width-carousel {
  position: relative;
  width: 100%;
  height: calc(100vh - 53px);
  overflow: hidden;

  @include laptop {
    height: calc(100vh - 72px);
  }

  &__swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .base-image,
  .base-image__inner {
    height: 100%;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: transparent;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 30;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.6s ease;
  }

  &__gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(black, 0.65),
      rgba(black, 0.25) 75%,
      rgba(black, 0.25)
    );
  }

  &__btn-play {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 40;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px 14px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>

<static-query>
{
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  page: sanityHome(id: "542616c1-f362-4f33-b903-4f4add184641") {
    heroImages {
      images {
        caption
        captionStyle
        asset {
          url
        }
        alt
      },
      enableIntro
    }
  }
}
</static-query>

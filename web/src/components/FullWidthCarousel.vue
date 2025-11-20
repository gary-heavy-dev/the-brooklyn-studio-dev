<template>
  <div>
    <section class="full-width-carousel o-h" id="fullWidthCarousel">
      <div class="h-screen" ref="heroSection">
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

          <div class="swiper-button__container">
            <div class="swiper-button-prev" slot="button-prev">
              <SliderArrow />
            </div>
          </div>

          <div class="swiper-button__container">
            <div class="swiper-button-next" slot="button-next">
              <SliderArrow />
            </div>
          </div>
        </swiper>

        <div
          ref="overlay"
          :class="[
            'full-width-carousel__overlay',
            {
              'is-blocking': !hasFadedOut,
              'is-hidden': overlayHidden
            }
          ]"
        >
          <div class="full-width-carousel__gradient"></div>
          <div class="logo-wrapper">
            <PlaceholderLogo />
          </div>
          <!-- <lottie-animation
            ref="heroLottie"
            :animationData="heroAnimationData"
            :autoPlay="false"
            @complete="onHeroLottieComplete"
          /> -->
        </div>

        <button
          class="full-width-carousel__btn-play"
          :aria-pressed="autoplayRunning"
          :aria-label="autoplayRunning ? 'Pause carousel autoplay' : 'Play carousel autoplay'"
          @click="toggleAutoplay"
        >
          <span aria-label="Pause Image Carousel" v-if="autoplayRunning">❚❚</span>
          <span aria-label="Play Image Carousel" v-else>▶</span>
        </button>
      </div>
    </section>
    <div
      ref="headerPlaceholder"
      :style="{ height: headerStuck ? `${headerHeight}px` : '0px' }"
    ></div>
    <div :class="['homepage-header-wrapper', { 'is-stuck': headerStuck }]">
      <TheHeader ref="theHeader" :is-stuck-on-homepage="headerStuck" :is-homepage="true" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import BaseImage from '~/components/BaseImage'
import SliderArrow from '~/components/SliderArrow'
import TheHeader from '~/components/TheHeader.vue'
import LottieAnimation from 'lottie-web-vue'
import PlaceholderLogo from '~/components/PlaceholderLogo.vue'
import DesktopHeroAnimation from '~/components/lottie/desktop-logo-animation.json'
import MobileHeroAnimation from '~/components/lottie/mobile-logo-animation.json'

export default {
  name: 'FullWidthCarousel',
  components: {
    Swiper,
    SwiperSlide,
    BaseImage,
    SliderArrow,
    LottieAnimation,
    PlaceholderLogo,
    TheHeader
  },
  props: {
    playLottie: Boolean
  },
  data() {
    return {
      hasPlayedHero: false,
      hasFadedOut: false,
      overlayHidden: false,
      autoplayRunning: false,
      fadeTimeout: null,
      interactionTimeout: null,
      fadeBackInDelay: 4500,
      headerStuck: false,
      headerHeight: 0,
      heroHeight: 0,
      lottieCompleteFadeOutTimeoutDuration: 1000,
      swiperStartTimeoutDuration: 500,
      lottiePlayTimeoutDuration: 200,
      swiperOptions: {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        speed: 1000,
        autoplay: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    heroAnimationData() {
      if (typeof window !== 'undefined' && window.innerWidth <= 1024) return MobileHeroAnimation
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
    }
  },
  watch: {
    playLottie(newVal) {
      this.startHeroLottie()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleHeaderStick, { passive: true })
    window.addEventListener('resize', this.updateHeights)

    this.$nextTick(() => {
      this.updateHeights()
      this.addSwiperInteractionListeners()
    })

    this.startHeroLottie()

    this.$nextTick(() => {
      setTimeout(() => {
        this.startSwiper()
      }, this.swiperStartTimeoutDuration)
    })
  },
  beforeDestroy() {
    clearTimeout(this.fadeTimeout)
    clearTimeout(this.interactionTimeout)
    window.removeEventListener('scroll', this.handleHeaderStick)
    window.removeEventListener('resize', this.updateHeights)
    this.removeSwiperInteractionListeners()
  },
  methods: {
    updateHeights() {
      if (this.$refs.heroSection) {
        this.heroHeight = this.$refs.heroSection.offsetHeight
      }
      if (this.$refs.theHeader && this.$refs.theHeader.$el) {
        this.headerHeight = this.$refs.theHeader.$el.offsetHeight
      }
    },

    handleHeaderStick() {
      const scrollY = window.scrollY
      this.headerStuck = scrollY >= this.heroHeight
    },

    startHeroLottie() {
      if (sessionStorage.getItem('heroLottiePlayed') === 'true') {
        this.makeOverlayPassive()
        this.startSwiper()
        return
      }
      const lottie = this.$refs.heroLottie
      if (!lottie) return this.startSwiper(false)

      this.hasPlayedHero = true

      setTimeout(() => {
        try {
          lottie.play()
        } catch (e) {
          this.makeOverlayPassive()
        }
      }, this.lottiePlayTimeoutDuration)
    },

    onHeroLottieComplete() {
      clearTimeout(this.fadeTimeout)
      this.fadeTimeout = setTimeout(() => {
        this.overlayHidden = true

        try {
          sessionStorage.setItem('heroLottiePlayed', 'true')
        } catch (e) {}

        this.makeOverlayPassive()
      }, this.lottieCompleteFadeOutTimeoutDuration)
    },

    makeOverlayPassive() {
      console.log('this.hasFadedOut:: ', this.hasFadedOut)
      if (this.hasFadedOut) return
      this.fadeOutOverlay()
      this.hasFadedOut = true
      this.startSwiper()
    },

    fadeOutOverlay() {
      clearTimeout(this.interactionTimeout)
      this.overlayHidden = true
    },

    fadeInOverlay() {
      this.overlayHidden = false
    },

    handleUserInteraction() {
      return
      // if (!this.hasFadedOut) {
      //   this.makeOverlayPassive()
      // } else {
      //   this.fadeOutOverlay()
      // }
    },

    addSwiperInteractionListeners() {
      const carousel = this.$refs.heroSection
      if (!carousel) return
      carousel.addEventListener('click', this.handleCarouselClick)
    },

    removeSwiperInteractionListeners() {
      const carousel = this.$refs.heroSection
      if (carousel) {
        carousel.removeEventListener('click', this.handleCarouselClick)
      }
    },

    handleCarouselClick(event) {
      const target = event.target
      const isControlClick =
        target.closest('.swiper-button-prev') ||
        target.closest('.swiper-button-next') ||
        target.closest('.full-width-carousel__btn-play')

      if (isControlClick) {
        this.handleUserInteraction()
      }
    },

    startSwiper(hasLottie = true) {
      if (!hasLottie) {
        setTimeout(() => {
          this.makeOverlayPassive()
        }, 3500)
      }

      const swiper = this.$refs.heroSwiper?.swiper || this.$refs.heroSwiper?.$swiper
      if (!swiper) return

      if (this.autoplay) {
        swiper.params.autoplay = {
          delay: this.delay || 5000,
          disableOnInteraction: false
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
      this.handleUserInteraction()
    }
  }
}
</script>

<style lang="scss">
.full-width-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;

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

  .logo-wrapper {
    width: max(250px, 25vw);
    height: auto;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease;

    .placeholder-logo {
      opacity: 0;
      animation: fadeInLogo 0.75s ease-in-out 1s forwards;
    }

    &.is-blocking {
      pointer-events: auto;
    }

    &.is-hidden {
      opacity: 0;
    }
  }

  .full-width-carousel__swiper {
    opacity: 0;
    animation: fadeInLogo 0.75s ease-in-out 0.5s forwards;
  }

  @keyframes fadeInLogo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  .swiper-button__container {
    display: none;

    @include laptop {
      display: block;
      position: absolute;
      top: 0;
      height: 100%;
      width: 33vw;
      z-index: 35;
    }
  }

  .swiper-button__container:has(.swiper-button-prev) {
    left: 0;
  }
  .swiper-button__container:has(.swiper-button-next) {
    right: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .swiper-button__container:hover .swiper-button-prev,
  .swiper-button__container:hover .swiper-button-next {
    opacity: 1;
  }
}

.homepage-header-wrapper {
  position: relative;
  z-index: 40;

  &.is-stuck {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
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

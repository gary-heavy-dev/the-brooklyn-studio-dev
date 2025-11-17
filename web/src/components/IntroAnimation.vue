<template>
  <section
    class="intro-animation background--navy o-h"
    id="introAnimation"
    @dblclick="closeIntro"
    v-if="isShowIntro"
  >
    <div class="flex ai-c jc-c w-100 pos-abs z-2">
      <lottie-animation
        class="w-100 logo-animation"
        ref="anim"
        :animationData="animationData"
        :autoPlay="false"
        @complete="amComplete"
      />
    </div>
    <div class="intro-animation__image-wrapper">
      <div class="intro-animation__gradient"></div>
      <img
        v-if="featuredImage"
        :src="srcString"
        :srcset="srcsetString"
        :alt="featuredImage.alt"
        @load="amLod"
      />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo'
import DesktopLogoAnimation from '~/components/lottie/desktop-logo-animation.json'
import MobileLogoAnimation from '~/components/lottie/mobile-logo-animation.json'
import LottieAnimation from 'lottie-web-vue'

export default {
  components: {
    Logo,
    lottieAnimation: LottieAnimation
  },
  // props: {
  //   status: String
  // },
  data() {
    return {
      desktopAnimation: DesktopLogoAnimation,
      mobileAnimation: MobileLogoAnimation,
    }
  },
  computed: {
    animationData() {
      if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
        return this.mobileAnimation
      } else {
        return this.desktopAnimation
      }
    },
    isShowIntro() {
      return this.$static.page.heroImages.enableIntro
    },
    featuredImage() {
      const ims = this.$static.page.heroImages.images.length
      const i = Math.floor(Math.random() * ims)
      return this.$static.page.heroImages.images[i]
    },
    srcString() {
      return String(this.$urlForImage(this.featuredImage, this.$static.metadata.sanityOptions))
    },
    srcsetString() {
      return String(this.$gImageMap(this.featuredImage, this.sizes, this.$static.metadata.sanityOptions))
    }
  },
  methods: {
    closeIntro() {
      document.getElementById('introAnimation').classList.add('animation-hidden')
      sessionStorage.setItem('intro', 'played')
      setTimeout(() => {
        document.body.classList.remove('animation-playing')
        this.$emit('trigger-lottie-animation', true)
      }, 1250);
      setTimeout(() => {
        this.$emit('passed', 'animation-complete')
      }, 2510);
    },
    amLod() {
      const sessionStatus = sessionStorage.getItem('intro')
      if (sessionStatus !== 'played' && this.$route.path == '/') {
        document.body.classList.add('animation-playing')
      }
      document.getElementById('introAnimation').classList.add('initial-fade')

      setTimeout(() => {
        this.$refs.anim.play()
      }, 500);
    },
    amComplete() {
      this.closeIntro()
    },
  },
}
</script>

<style lang="scss">
body.animation-playing {
  overflow: hidden;
  height: 100vh;
}

.vue-lottie-player {
  background: transparent;
}

.intro-animation {
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999999999;
  transition: opacity 1.25s ease-in-out;
  transition-delay: 0.5s;

  > div {
    height: 100%;
  }

  .logo-animation {

    @include desktop-down {
      padding-bottom: 50px;
    }
  }

  &.animation-hidden {
    opacity: 0;

    .logo-animation {
      transition: opacity 0.75s ease-in-out;
      opacity: 0;
    }
  }

  &__gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__gradient {
    background: linear-gradient(
      to bottom,
      rgba(black, 0.65),
      rgba(black, 0.25) 75%,
      rgba(black, 0.25)
    );
    // background: linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.65) 100%);
  }

  &__image-wrapper {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
  }

  &.initial-fade {

    .intro-animation__image-wrapper {
      opacity: 1;
    }
  }


  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  svg {

    @include desktop {
      width: 48.25%;
    }

    @include desktop-down {
      padding: 0 var(--grid-margin);
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

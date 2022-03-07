<template>
    <section
      class="intro-animation background--navy o-h"
      id="introAnimation"
      @dblclick="closeIntro"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-2">
        <lottie-animation
          class="w-100"
          ref="anim"
          :animationData="animationData"
          :autoPlay="false"
          @complete="amComplete"
        />
      </div>
      <div class="intro-animation__gradient"></div>
      <img
        v-if="featuredImage"
        :src="srcString"
        :srcset="srcsetString"
        :alt="featuredImage.alt"
        @load="amLod"
      />
      <div class="intro-animation__overlay z-1"></div>
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
  data() {
    return {
      desktopAnimation: DesktopLogoAnimation,
      mobileAnimation: MobileLogoAnimation
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
      document.body.classList.add('close-intro')
    },
    amLod(e) {
      // console.log('am lod')
      e.target.classList.add("loaded")
      setTimeout(() => {
        this.$refs.anim.play()
        document.getElementById('introAnimation').classList.add('initial-fade')
      }, 1000);
    },
    amComplete(e) {
      console.log('dun!')
    }
  },
}
</script>

<style lang="scss">
body.close-intro .intro-animation {
  display: none;
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

  > div {
    height: 100%;
  }

  &__overlay {
    background-color: rgb(0 0 0 / 15%);
    opacity: 1;
  }

  &__overlay,
  &__gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__gradient {
    opacity: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.10) 25%, rgba(0,0,0,0.70) 100%);
    transition: opacity 1000ms ease-in-out;
  }

  &.initial-fade {

    .intro-animation__gradient {
      opacity: 1;
    }
  }


  img {
    opacity: 0;
    transition: opacity 750ms linear;
    object-fit: cover;
    width: 100%;
    height: 100%;

    &.loaded {
      opacity: 1;
    }
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
      }
    }
  }
}
</static-query>
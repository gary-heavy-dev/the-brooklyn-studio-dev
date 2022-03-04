<template>
    <section
      class="homepage-hero background--navy o-h"
      id="introAnimation"
      @dblclick="closeIntro"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-1">
        <lottie-animation
          class="w-100"
          ref="anim"
          :animationData="animationData"
          :autoPlay="false"
          @complete="amComplete"
        />
      </div>
      <div id="introImageOverlay"></div>
      <img
        v-if="featuredImage"
        :src="srcString"
        :srcset="srcsetString"
        :alt="featuredImage.alt"
        @load="amLod"
      />
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
      }, 500);
    },
    amComplete(e) {
      console.log('dun!')
    }
  },
}
</script>

<style lang="scss">
body.close-intro .homepage-hero {
  display: none;
}

.vue-lottie-player {
  background: transparent;
}

.homepage-hero {
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

  #introImageOverlay {
    opacity: 0;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.85) 100%);
    transition: opacity 2100ms ease-in-out;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &.initial-fade {

    #introImageOverlay {
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
<template>
    <section
      class="homepage-hero background--navy o-h"
      v-view="adjustHeader"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-1">
        <scrollactive
          class="container text-center p-100"
          :offset="0"
          :duration="2000"
        >
          <a
            href="#welcome"
            class="scrollactive-item"
            id="logoAnimation"
          >
            <dotlottie-player
              class="mobile-only"
              src="https://assets5.lottiefiles.com/dotlotties/dlf10_fzdw966g.lottie"
              autoplay
            />
            <dotlottie-player
              class="desktop-only"
              src="https://assets2.lottiefiles.com/dotlotties/dlf10_vpwmpd5j.lottie"
              autoplay
            />
          </a>
        </scrollactive>
      </div>
      <BaseImage
        class="img-cover"
        v-if="featuredImage"
        :lazy="true"
        :src="featuredImage"
        :x="1440"
        :y="1024"
      />
    </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  computed: {
    featuredImage() {
      const ims = this.$static.page.heroImages.images.length
      const i = Math.floor(Math.random() * ims)
      return this.$static.page.heroImages.images[i]
    }
  },
  methods: {
    adjustHeader(e) {
      if (this.$route.path == '/') {
        if (e.percentTop > 0) {
          document.body.classList.add('home-hero-in-view')
        } else {
          document.body.classList.remove('home-hero-in-view')
          sessionStorage.setItem('intro', true)
          document.body.classList.add('scroll-locked')
          this.$emit('passed', true)
          setTimeout(() => document.body.classList.remove('scroll-locked'), 10)
        }
      }
    }
  },
  mounted() {
    // Import Dotlottie Player Component
    if (typeof window !== 'undefined') {
      const LottiePlayer = require('@dotlottie/player-component')
    }
    setTimeout(() => {
      const logoAnimation = document.getElementById('logoAnimation')
      logoAnimation.click()
      // const theHeader = document.getElementById('theHeader')

      // const EasingFunctions = {
      //   // no easing, no acceleration
      //   linear: t => t,
      //   // accelerating from zero velocity
      //   easeInQuad: t => t*t,
      //   // decelerating to zero velocity
      //   easeOutQuad: t => t*(2-t),
      //   // acceleration until halfway, then deceleration
      //   easeInOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
      //   // accelerating from zero velocity 
      //   easeInCubic: t => t*t*t,
      //   // decelerating to zero velocity 
      //   easeOutCubic: t => (--t)*t*t+1,
      //   // acceleration until halfway, then deceleration 
      //   easeInOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
      //   // accelerating from zero velocity 
      //   easeInQuart: t => t*t*t*t,
      //   // decelerating to zero velocity 
      //   easeOutQuart: t => 1-(--t)*t*t*t,
      //   // acceleration until halfway, then deceleration
      //   easeInOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
      //   // accelerating from zero velocity
      //   easeInQuint: t => t*t*t*t*t,
      //   // decelerating to zero velocity
      //   easeOutQuint: t => 1+(--t)*t*t*t*t,
      //   // acceleration until halfway, then deceleration 
      //   easeInOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
      // }

      // this.$smoothScroll({
      //   scrollTo: theHeader,
      //   duration: 2000,
      //   offset: -1,
      //   updateHistory: false,
      //   easingFunction: EasingFunctions.easeInOutQuad
      // })
    }, 6000)
  }
}
</script>

<style lang="scss">
.homepage-hero {
  height: 100vh;

  > div {
    height: 100%;
  }

  .base-image {
    background-color: black;

    img {
      transition-delay: 0.2s;

      &.lazyloaded {
        opacity: 90%;
      }
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
  page: sanityHome(id: "542616c1-f362-4f33-b903-4f4add184641") {
    heroImages {
      images {
        asset {
          url
        }
        alt
      }
    }
  }
}
</static-query>
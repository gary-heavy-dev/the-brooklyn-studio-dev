<template>
    <section
      class="homepage-hero background--navy o-h"
      id="introAnimation"
      @dblclick="closeIntro"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-1">
        <!-- https://assets3.lottiefiles.com/packages/lf20_3wz8udr0.json -->
        <!-- https://assets10.lottiefiles.com/packages/lf20_ey5jrrlx.json -->
        <!-- <vLottiePlayer
          name="workoutMonkeyAnim"
          loop
          :animationData="require('./assets/workout-monkey.json')"
        /> -->
        <!-- <v-lottie-player
          name="scooterAnim"
          @animControl="play"
          path="https://assets10.lottiefiles.com/packages/lf20_ey5jrrlx.json"
        /> -->
        <lottie-animation
          ref="anim"
          :animationData="animationData"
          :autoPlay="false"
        />
      </div>
      <img
        v-if="featuredImage"
        :src="featuredImage.asset.url"
        :alt="featuredImage.alt"
        @load="amLod"
      />
    </section>
</template>

<script>
import Logo from '~/components/Logo'
import LogoAnimation from '~/components/lottie/desktop-logo-animation.json'
import LottieAnimation from 'lottie-web-vue'

export default {
  components: {
    Logo,
    lottieAnimation: LottieAnimation
  },
  data() {
    return {
      animationData: LogoAnimation
    }
  },
  computed: {
    featuredImage() {
      const ims = this.$static.page.heroImages.images.length
      const i = Math.floor(Math.random() * ims)
      return this.$static.page.heroImages.images[i]
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
      }, 500);
      setTimeout(() => {
        document.getElementById('introAnimation').classList.add('initial-fade')
      }, 2900);
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

  &.initial-fade {
    background-color: black;

    img.loaded {
      opacity: 0.7;
      transition-duration: 1.35s;
    }
  }


  img {
    opacity: 0;
    transition: opacity 750ms linear;

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
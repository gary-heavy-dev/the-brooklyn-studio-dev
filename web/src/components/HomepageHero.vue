<template>
    <section
      class="homepage-hero background--navy o-h"
      @dblclick="closeIntro"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-1">
        <!-- <dotlottie-player
          class="w-100 mobile-only"
          src="https://assets5.lottiefiles.com/dotlotties/dlf10_fzdw966g.lottie"
          autoplay
        />
        <dotlottie-player
          class="w-100 desktop-only"
          src="https://assets2.lottiefiles.com/dotlotties/dlf10_vpwmpd5j.lottie"
          autoplay
        /> -->
        <!-- https://assets3.lottiefiles.com/packages/lf20_3wz8udr0.json -->
        <lottie-vue-player :src="`https://assets5.lottiefiles.com/packages/lf20_ey5jrrlx.json`"
                           :player-size="options.playerSize"
        >
        </lottie-vue-player>
      </div>
      <img
        v-if="featuredImage"
        :src="featuredImage.asset.url"
        :alt="featuredImage.alt"
        @load="amLod"
      />
      <!-- <BaseImage
        id="introImage"
        class="img-cover"
        v-if="featuredImage"
        :lazy="false"
        :src="featuredImage"
        :x="1440"
        :y="1024"
        :caption="featuredImage.caption"
        :captionStyle="featuredImage.captionStyle"
        @load="amLod"
      /> -->
    </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
  },
  computed: {
    featuredImage() {
      const ims = this.$static.page.heroImages.images.length
      const i = Math.floor(Math.random() * ims)
      return this.$static.page.heroImages.images[i]
    }
  },
  data() {
    return {
      options: {
        minimizable: false,
        playerSize: "standard",
        backgroundColor: '#ffffff00',
        backgroundStyle: 'color',
        // theme: {
        //   controlsView: "standard",
        //   active: "light",
        //   light: {
        //     color: '#3D4852',
        //     backgroundColor: '#fff',
        //     opacity: '0.7',
        //   },
        //   dark: {
        //     color: '#fff',
        //     backgroundColor: '#202020',
        //     opacity: '0.7',
        //   }
        // }
      }
    }
  },
  methods: {
    closeIntro() {
      document.body.classList.add('close-intro')
    },
    amLod(e) {
      // console.log('am lod', e)
      e.target.classList.add("loaded")
    }
  },
  // mounted() {
  //   // Import Dotlottie Player Component
  //   if (typeof window !== 'undefined') {
  //     const LottiePlayer = require('@dotlottie/player-component')
  //   }
  // }
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
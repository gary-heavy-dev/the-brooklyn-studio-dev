<template>
    <section
      class="homepage-hero background--navy o-h"
      v-view="adjustHeader"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-1">
        <div class="container text-center p-100">
          <!-- <Logo class="white" /> -->
          <dotlottie-player src="https://assets6.lottiefiles.com/dotlotties/dlf10_hdnplzwy.lottie" autoplay />
        </div>
      </div>
      <BaseImage
        class="img-cover"
        v-if="$static.page.heroImages.images[2]"
        :lazy="true"
        :src="$static.page.heroImages.images[2]"
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
  methods: {
    adjustHeader(e) {
      // console.log("Home hero is:", e.percentTop, e.percentCenter, e.percentInView)
      if (e.percentTop > 0) {
        document.body.classList.add('home-hero-in-view')
      } else {
        document.body.classList.remove('home-hero-in-view')
      }
    }
  },
  mounted() {
    // Import Dotlottie Player Component
    if (typeof window !== 'undefined') {
      const LottiePlayer = require('@dotlottie/player-component')
    }
  }
}
</script>

<style lang="scss">
.homepage-hero {
  height: 100vh;

  > div {
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
<template>
    <section
      class="homepage-hero background--navy o-h"
      @dblclick="closeIntro"
    >
      <div class="flex ai-c jc-c h-100 w-100 pos-abs z-1">
        <dotlottie-player
          class="w-100 mobile-only"
          src="https://assets5.lottiefiles.com/dotlotties/dlf10_fzdw966g.lottie"
          autoplay
        />
        <dotlottie-player
          class="w-100 desktop-only"
          src="https://assets2.lottiefiles.com/dotlotties/dlf10_vpwmpd5j.lottie"
          autoplay
        />
      </div>
      <BaseImage
        class="img-cover"
        v-if="featuredImage"
        :lazy="true"
        :src="featuredImage"
        :x="1440"
        :y="1024"
        :caption="featuredImage.caption"
        :captionStyle="featuredImage.captionStyle"
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
    closeIntro() {
      document.body.classList.add('close-intro')
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
body.close-intro .homepage-hero {
  display: none;
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

  .base-image {
    background-color: black;

    img {
      transition-delay: 0.2s;

      &.lazyloaded {
        opacity: 0.9;
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
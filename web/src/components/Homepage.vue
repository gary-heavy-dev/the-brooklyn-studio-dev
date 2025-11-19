<template>
  <Layout>
    <div class="home">
      <IntroAnimation
        v-show="introStatus === null"
        @passed="onIntroPassed"
        @trigger-lottie-animation="handleLottieTrigger"
      />
      <FullWidthCarousel :playLottie="isLottieTrigger" />
      <FeaturedProjects :content="content.featuredProjects" />
      <NewsFeedCarousel :content="content.newsFeedCarousel" />
      <Intro :content="content.introSection" :layout="'primary'" class="home-intro--neuhaus" />
      <FlexibleContent :content="content.flexibleContent" />
    </div>
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import FullWidthCarousel from '~/components/FullWidthCarousel'
import FeaturedProjects from '~/components/FeaturedProjects'
import NewsFeedCarousel from '~/components/NewsFeedCarousel'
import FlexibleContent from '~/components/FlexibleContent'
import IntroAnimation from '~/components/IntroAnimation'

export default {
  components: {
    Intro,
    IntroAnimation,
    FlexibleContent,
    FullWidthCarousel,
    FeaturedProjects,
    NewsFeedCarousel
  },
  props: {
    content: Object
  },
  data() {
    return {
      introStatus: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('intro') : null,
      isLottieTrigger: false
    }
  },
  methods: {
    onIntroPassed() {
      this.introStatus = 'played'
    },
    handleLottieTrigger(val) {
      this.isLottieTrigger = val
    }
  }
}
</script>

<!-- remove class on intro component above and remove this style tag after neuhaus image reverts to original image -->
<!-- Revert sizesPrimaryLarge sizes in Into.vue -->
<style>
.home-intro--neuhaus .intro__column .intro-image .image-wrapper .base-image .base-image__inner img {
  object-fit: contain;
}
</style>

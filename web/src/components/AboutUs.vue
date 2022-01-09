<template>
  <Layout>
    <HeroSecondary
      :title="content.title"
      :image="content.hero.image"
    />
    <AboutUsNavigation :content="content.flexibleContent" />
    <div
      id="pinnedDetector"
      v-view="navPinned"
    ></div>
    <Intro
      :content="content.introSection"
      :layout="'secondary'"
      class="about-us-intro"
    />
    <FlexibleContent :content="content.flexibleContent" />
  </Layout>
</template>

<script>
import HeroSecondary from '~/components/HeroSecondary'
import AboutUsNavigation from '~/components/AboutUsNavigation'
import Intro from '~/components/Intro'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    HeroSecondary,
    AboutUsNavigation,
    Intro,
    FlexibleContent
  },
  props: {
    content: Object
  },
  methods: {
    navPinned(e) {
      const body = document.body
      console.log("me view!", e.percentInView)

      if (e.percentInView > 0) {
        body.classList.add('hero-in-view')
      } else {
        body.classList.remove('hero-in-view')
      }
    }
  }
}
</script>

<style lang="scss">
#pinnedDetector {
  height: 150px;
}
.about-us-intro {
  margin-top: -150px;
}
</style>

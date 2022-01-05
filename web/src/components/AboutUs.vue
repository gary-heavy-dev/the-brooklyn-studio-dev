<template>
  <Layout>
    <HeroSecondary
      :title="content.title"
      :image="content.hero.image"
    />
    <AboutUsNavigation />
    <Intro
      :content="content.introSection"
      :layout="'secondary'"
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
  }
}
</script>

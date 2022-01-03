<template>
  <Layout>
    <SecondaryHero
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
import SecondaryHero from '~/components/SecondaryHero'
import AboutUsNavigation from '~/components/AboutUsNavigation'
import Intro from '~/components/Intro'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    SecondaryHero,
    AboutUsNavigation,
    Intro,
    FlexibleContent
  },
  props: {
    content: Object
  }
}
</script>

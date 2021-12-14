<template>
  <Layout>
    <Intro
      :content="content.introSection"
      :layout="'secondary'"
    />
    <FlexibleContent :content="content.flexibleContent" />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    Intro,
    FlexibleContent
  },
  props: {
    content: Object
  }
}
</script>

<template>
  <Layout>
    <HomepageIntro :content="content.introSection" />
    <FlexibleContent :content="content.flexibleContent" />
  </Layout>
</template>

<script>
import HomepageIntro from '~/components/HomepageIntro'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    HomepageIntro,
    FlexibleContent
  },
  props: {
    content: Object
  }
}
</script>

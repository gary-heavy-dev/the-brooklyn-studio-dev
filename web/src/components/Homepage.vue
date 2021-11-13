<template>
  <Layout>
    <HomepageIntro :content="content.introSection" />
  </Layout>
</template>

<script>
import HomepageIntro from '~/components/HomepageIntro'

export default {
  components: {
    HomepageIntro
  },
  props: {
    content: Object
  }
}
</script>

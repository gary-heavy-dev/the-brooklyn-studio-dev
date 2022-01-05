<template>
  <Layout>
    <HeroTertiary :content="content" />
  </Layout>
</template>

<script>
import HeroTertiary from '~/components/HeroTertiary'

export default {
  components: {
    HeroTertiary
  },
  props: {
    content: Object
  }
}
</script>

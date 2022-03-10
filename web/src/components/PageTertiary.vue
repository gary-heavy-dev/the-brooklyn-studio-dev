<template>
  <Layout>
    <HeroTertiary
      :title="title"
      :content="content"
    />
  </Layout>
</template>

<script>
import HeroTertiary from '~/components/HeroTertiary'

export default {
  components: {
    HeroTertiary
  },
  props: {
    content: Object,
    title: String
  }
}
</script>

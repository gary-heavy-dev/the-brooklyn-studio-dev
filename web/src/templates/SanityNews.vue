<template>
  <Layout>
    <SimplePage :content="$page.post" />
  </Layout>
</template>

<script>
import SimplePage from '~/components/SimplePage'

export default {
  components: {
    SimplePage
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: sanityNews (id: $id) {
    title
    subtitle
    slug {
      current
    }
    sections {
      _rawPortableText
    }
  }
}
</page-query>

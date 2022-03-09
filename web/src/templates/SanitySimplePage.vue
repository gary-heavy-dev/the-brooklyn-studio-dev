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
  post: sanitySimplePage (id: $id) {
    title
    subtitle
    slug {
      current
    }
    _rawBody
    sections {
      _rawPortableText
    }
  }
}
</page-query>

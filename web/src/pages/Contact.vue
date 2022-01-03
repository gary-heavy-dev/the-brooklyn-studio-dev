<template>
  <Contact :content="$page.page" />
</template>

<script>
import Contact from '~/components/Contact'

export default {
  components: {
    Contact 
  },
  metaInfo: {
    bodyAttrs: {
      class: 'contact-page'
    }
  }
}
</script>

<page-query>
{
  page: sanityContact(id: "cc52b76e-c3b4-4ac3-ba41-4871af585480") {
    title
    hero {
      image {
        alt
        asset {
          url
          metadata {
            lqip
          }
        }
      }
    }
    textBlocks {
      heading
      _rawCopy
    }
    secondaryImage {
      alt
      asset {
        url
        metadata {
          lqip
        }
      }
    }
  }
}
</page-query>

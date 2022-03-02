<template>
  <Contact :content="$page.page" />
</template>

<script>
import Contact from '~/components/Contact'

export default {
  components: {
    Contact 
  }
}
</script>

<page-query>
{
  page: sanityContact(id: "cc52b76e-c3b4-4ac3-ba41-4871af585480") {
    title
    hero {
      image {
        caption
        captionStyle
        alt
        asset {
          url
        }
      }
    }
    textBlocks {
      heading
      _rawCopy
    }
    secondaryImage {
      alt
      caption
      captionStyle
      asset {
        url
        metadata {
          dimensions {
            height
            width
          }
        }
      }
    }
  }
}
</page-query>

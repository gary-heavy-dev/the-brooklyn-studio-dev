<template>
  <Careers :content="$page.page" />
</template>

<script>
import Careers from '~/components/Careers'

export default {
  components: {
    Careers
  }
}
</script>

<page-query>
{
  page: sanityCareers(id: "b5f270ac-9a77-4236-bf33-70041dd025c6") {
    _type
    id
    title
    hero {
      _rawIntro
      image {
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
        alt
      }
    }
    _rawPostNotes
    posts {
      title
      slug {
        current
      }
      textBlocks {
        heading
        _rawCopy
      }
      responsibilities {
        heading
        listItems
      }
      requirements
    }
  }
}
</page-query>
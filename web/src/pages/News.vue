<template>
  <News :content="$page.page" />
</template>

<script>
import News from '~/components/News'

export default {
  components: {
    News 
  }
}
</script>

<page-query>
{
  page: sanityNewsPage(id: "b921b006-dafd-49a5-a3d7-eef55a00358f") {
    title
    hero {
      image {
        alt
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
    featuredNews {
      title
      _rawExcerpt
      link
      mainImage {
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
    awards {
      title
      year
    }
    press {
      title
      pubDate
    }
  }
}
</page-query>

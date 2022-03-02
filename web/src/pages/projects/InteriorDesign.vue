<template>
  <Layout>
    <WorkFeed :content="$page.page" />
  </Layout>
</template>

<script>
import WorkFeed from '~/components/WorkFeed'

export default {
  components: {
    WorkFeed
  }
}
</script>

<page-query>
{
  page: sanityInteriorDesign(id: "ee8279ca-9f8d-47c5-926a-c88d46d45d5b") {
    title
    slug {
      current
    }
    heroImage {
      caption
      captionStyle
      asset {
        url
        metadata {
          lqip
        }
      }
      alt
    }
    projects {
      title
      slug {
        current
      }
      image {
        caption
        captionStyle
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
    }
  }
}
</page-query>

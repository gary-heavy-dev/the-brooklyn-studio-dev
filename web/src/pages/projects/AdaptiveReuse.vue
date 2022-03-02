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
  page: sanityAdaptiveReuse(id: "35a99ecb-fd40-41ae-a0e0-8ec5527ebf44") {
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

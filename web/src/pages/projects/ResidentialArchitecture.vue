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
  page: sanityResidentialArchitecture(id: "a81592fc-d8ae-4c15-8315-9005a57b2d75") {
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
    projectCategories {
      title
      slug {
        current
      }
    }
  }
}
</page-query>

<template>
  <Layout>
    <Project :content="$page.project" />
  </Layout>
</template>

<script>
import Project from '~/components/Project'

export default {
  components: {
    Project
  }
}
</script>

<page-query>
query Project ($id: ID!) {
  project: sanityProject (id: $id) {
    title
    slug {
      current
    }
    projectCategories {
      title
      slug {
        current
      }
    }
    displayTitle {
      displayTitleStatus
      lineOne
      lineTwo
    }
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
      alt
    }
    flexibleContent {
      ... on SanityFlexibleImage {
        _type
        image {
          asset {
            url
            metadata {
              lqip
            }
          }
          alt
        }
        imageLocation
        margins
      }
      ... on SanityFlexibleImagePair {
        _type
        imageLarge {
          asset {
            url
            metadata {
              lqip
            }
          }
          alt
        }
        imageSmall {
          asset {
            url
            metadata {
              lqip
            }
          }
          alt
        }
        imageLargeLocation
        reverseMobile
      }
      ... on SanityFlexibleImageWithText {
        _type
        text
        image {
          asset {
            url
            metadata {
              lqip
            }
          }
          alt
        }
        aspectRatio
        imageLocation
        reverseMobile
        justification
      }
      ... on SanityFlexibleText {
        _type
        text
      }
    }
  }
}
</page-query>

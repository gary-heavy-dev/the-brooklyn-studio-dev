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
        id
        url
        metadata {
          lqip
        }
      }
      alt
      caption
    }
    flexibleContent {
      ... on SanityFlexibleImage {
        _type
        image {
          asset {
            id
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
          alt
          caption
        }
        imageLocation
        margins
      }
      ... on SanityFlexibleImagePair {
        _type
        imageLarge {
          asset {
            id
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
          alt
          caption
        }
        imageSmall {
          asset {
            id
            url
            metadata {
              lqip
            }
          }
          alt
          caption
        }
        imageLargeLocation
        reverseMobile
      }
      ... on SanityFlexibleImageWithText {
        _type
        text
        image {
          asset {
            id
            url
            metadata {
              dimensions {
                width
                height
              }
            }
          }
          alt
          caption
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
    detailsIntro
    detailsBuildingInfo {
      heading
      text
    }
    detailsCredits {
      heading
      text
    }
    detailsGallery {
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
}
</page-query>

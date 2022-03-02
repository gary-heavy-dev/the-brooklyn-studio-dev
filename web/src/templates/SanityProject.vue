<template>
  <Layout>
    <Project
      :key="$page.post.slug.current"
      :content="$page.post"
      :prev="$page.prev"
      :next="$page.next"
    />
  </Layout>
</template>

<script>
import Project from '~/components/Project'

export default {
  components: {
    Project
  },
  data() {
    return {
      heroKey: 0
    }
  },
  methods: {
    forceRerender() {
      this.heroKey += 1
    }
  },
  watch: {
    $route (to, from) {
      this.forceRerender
      console.log('forced!', this.heroKey)
    }
  }
}
</script>

<page-query>
query Post ($id: ID, $prevId: ID, $nextId: ID) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  prev: sanityProject (id: $prevId) {
    title
    slug {
      current
    }
  }
  next: sanityProject (id: $nextId) {
    title
    slug {
      current
    }
  }
  post: sanityProject (id: $id) {
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
      caption
      captionStyle
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
          caption
          captionStyle
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
          caption
          captionStyle
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
          caption
          captionStyle
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
          caption
          captionStyle
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
      caption
      captionStyle
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
}
</page-query>

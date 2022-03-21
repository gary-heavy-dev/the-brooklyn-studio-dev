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
  computed: {
    description() {
      const des = this.$page.post.description ? this.$page.post.description : this.$page.settings.description
      const count = 155
      return des.slice(0, count) + (des.length > count ? '...' : '')
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
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      titleTemplate: '%s | ' + this.$page.settings.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description
        },
        // {
        //   key: 'og:title',
        //   name: 'og:title',
        //   content: (this.casestudy ? this.casestudy.title : '') + ' ' + this.$static.metadata.siteName
        // },
        // {
        //   key: 'og:description',
        //   name: 'og:description',
        //   content: this.casestudy ? this.casestudy.description : '',
        // },
        // {
        //   key: 'og:image',
        //   name: 'og:image',
        //   content: this.casestudy && this.casestudy.mainImage.asset ? this.casestudy.mainImage.asset.url : (this.$static.settings.ogImage ? this.$static.settings.ogImage.asset.url : '')
        // },
        // {
        //   key: 'twitter:title',
        //   name: 'twitter:title',
        //   content: (this.casestudy ? this.casestudy.title : '') + ' ' + this.$static.metadata.siteName
        // },
        // {
        //   key: 'twitter:description',
        //   name: 'twitter:description',
        //   content: this.casestudy ? this.casestudy.description : '',
        // },
        // {
        //   key: 'twitter:image',
        //   name: 'twitter:image',
        //   content: this.casestudy && this.casestudy.mainImage.asset ? this.casestudy.mainImage.asset.url : (this.$static.settings.ogImage ? this.$static.settings.ogImage.asset.url : '')
        // }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID, $prevId: ID, $nextId: ID) {
  settings: sanitySiteSettings (id: "siteSettings") {
    title
    description
  }
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
    description
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
    mobileHeroImage {
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

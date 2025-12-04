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
    pageTitle() {
      return this.$page.post.title.replace(/&nbsp;/g, ' ')
    },
    // firstHeroImage() {
    //   return this.$page.page.slides.length ? this.$page.page.slides[0].image : null
    // },
    ogImage() {
      // return this.$page.page.ogImage || this.firstHeroImage || this.$page.settings.ogImage
      return this.$page.settings.ogImage
    },
    twitterImage() {
      // return this.$page.page.twitterImage || this.firstHeroImage || this.$page.settings.twitterImage
      return this.$page.settings.twitterImage
    },
    metaDescription() {
      const des = this.$page.post.description
        ? this.$page.post.description
        : this.$page.settings.description
      const count = 155
      return des.slice(0, count) + (des.length > count ? '...' : '')
    }
  },
  mounted() {
    console.log('Post ID:', this.$page.post)
  },
  methods: {
    forceRerender() {
      this.heroKey += 1
    }
  },
  watch: {
    $route(to, from) {
      this.forceRerender
    }
  },
  metaInfo() {
    return {
      title: this.pageTitle,
      titleTemplate: '%s | ' + this.$page.settings.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.metaDescription
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.metaDescription
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.ogImage ? `${this.ogImage.asset.url}?w=1200&h=630&fit=crop` : ''
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'twitter:description',
          property: 'twitter:description',
          content: this.metaDescription
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: this.twitterImage ? `${this.twitterImage.asset.url}?w=800&h=418&fit=crop` : ''
        },
        {
          key: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        }
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
    ogImage {
      asset {
        url
      }
    }
    twitterImage {
      asset {
        url
      }
    }
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
    hideHeroImage
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
      ... on SanityImageObject {
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
        }
      }
      ... on SanityImageTwoUpObject {
        _type
        imageLeft {
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
        }
        imageRight {
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
        }
        ratio
      }
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
      ... on SanityFlexibleTwoImage {
        _type
        imageLayout,
        spacing,
        imageLeft {
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
        imageRight {
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
    _rawDetails
    detailsBuildingInfo {
      heading
      text
      link
      newTab
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

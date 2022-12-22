<template>
  <News :content="$page.page" />
</template>

<script>
import News from '~/components/News'

export default {
  components: {
    News 
  },
  computed: {
    pageTitle() {
      return 'News' 
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
    metaDescription () {
      const description = 'The Brooklyn Studio is an architecture and interior design firm committed to restoring and enhancing New York City\'s historic fabric.'
      return description
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
{
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
  page: sanityNewsPage(id: "b921b006-dafd-49a5-a3d7-eef55a00358f") {
    title
    hero {
      image {
        alt
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
      }
    }
    _rawNewsFeedIntro
    featuredNews {
      title
      _rawExcerpt
      link
      slug {
        current
      }
      mainImage {
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

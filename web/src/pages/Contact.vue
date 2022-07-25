<template>
  <Contact :content="$page.page" />
</template>

<script>
import Contact from '~/components/Contact'

export default {
  components: {
    Contact 
  },
  computed: {
    pageTitle() {
      return 'Contact' 
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
      const description = 'The Brooklyn Studio is an interdisciplinary architecture and design firm committed to restoring and enhancing New York City\'s historic fabric.'
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
          name: 'twitter:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDescription
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: this.twitterImage ? `${this.twitterImage.asset.url}?w=800&h=418&fit=crop` : ''
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
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
  page: sanityContact(id: "cc52b76e-c3b4-4ac3-ba41-4871af585480") {
    title
    hero {
      image {
        caption
        captionStyle
        alt
        asset {
          url
        }
      }
    }
    textBlocks {
      heading
      _rawCopy
    }
    secondaryImage {
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
}
</page-query>

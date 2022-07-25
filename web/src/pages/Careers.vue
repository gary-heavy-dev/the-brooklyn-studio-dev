<template>
  <PageTertiary
    :title="$page.page.title"
    :content="$page.page"
  />
</template>

<script>
import PageTertiary from '~/components/PageTertiary'

export default {
  components: {
    PageTertiary 
  },
  computed: {
    pageTitle() {
      return this.$page.page.title 
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
      const des = this.$page.page.hero._rawIntro ? this.$toPlainText(this.$page.page.hero._rawIntro) : this.$page.settings.description
      const count = 155
      return des.slice(0, count) + (des.length > count ? '...' : '')
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
  page: sanityCareers(id: "b5f270ac-9a77-4236-bf33-70041dd025c6") {
    _type
    id
    title
    hero {
      _rawIntro
      image {
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
    _rawPostNotes
    posts {
      title
      slug {
        current
      }
      textBlocks {
        heading
        _rawCopy
      }
      responsibilities {
        heading
        listItems
      }
      requirements
    }
  }
}
</page-query>
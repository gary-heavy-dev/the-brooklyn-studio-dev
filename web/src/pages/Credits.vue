<template>
  <PageTertiary
    :title="'Credits'"
    :content="$page.settings"
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
      return 'Credits' 
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
      const des = this.$page.settings.hero._rawIntro ? this.$toPlainText(this.$page.settings.hero._rawIntro) : this.$page.settings.description
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
          name: 'og:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.metaDescription
        },
        {
          key: 'og:image',
          name: 'og:image',
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
  settings: sanitySiteSettings(id: "siteSettings") {
    title
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
    credits {
      heading
      _rawCopy
    }
  }
}
</page-query>

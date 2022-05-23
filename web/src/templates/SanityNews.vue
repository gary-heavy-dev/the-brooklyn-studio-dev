<template>
  <Layout>
    <NewsPost :content="$page.post" />
  </Layout>
</template>

<script>
import NewsPost from '~/components/NewsPost'

export default {
  components: {
    NewsPost 
  },
  computed: {
    description() {
      const des = this.$page.post._rawExcerpt ? this.$toPlainText(this.$page.post._rawExcerpt) : this.$page.settings.description
      const count = 155
      return des.slice(0, count) + (des.length > count ? '...' : '')
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      titleTemplate: '%s | The Brooklyn Studio',
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
query Post ($id: ID!) {
  settings: sanitySiteSettings (id: "siteSettings") {
    title
    description
  }
  post: sanityNews (id: $id) {
    title
    slug {
      current
    }
    publishedAt
    mainImage {
      asset {
        url
      }
      alt
    }
    flexibleContent {
      ... on SanitySimpleImagePair {
        imageLeft {
          asset {
            url
          }
          caption
          alt
        }
        imageRight {
          asset {
            url
          }
          caption
          alt
        }
      }
      ... on SanitySimpleImageWithText {
        image {
          asset {
            url
          }
          caption
          alt
        }
        imageLocation
        reverseMobile
        _rawText
      }
      ... on SanitySimplePortableTextWrapper {
        _rawExcerptPortableText
      }
      ... on SanitySimpleGallery {
        images {
          asset {
            url
          }
          caption
          alt
        }
      }
    }
  }
}
</page-query>

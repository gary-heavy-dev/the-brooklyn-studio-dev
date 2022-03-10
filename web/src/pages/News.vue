<template>
  <News :content="$page.page" />
</template>

<script>
import News from '~/components/News'

export default {
  components: {
    News 
  },
  metaInfo() {
    return {
      title: 'News',
      titleTemplate: '%s | The Brooklyn Studio',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'The Brooklyn Studio is an interdisciplinary architecture and design firm committed to restoring and enhancing New York City\'s historic fabric.'
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
{
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

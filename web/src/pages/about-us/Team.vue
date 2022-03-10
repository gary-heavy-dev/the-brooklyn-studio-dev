<template>
  <Layout>
    <Team :content="$page.page" />
  </Layout>
</template>

<script>
import Team from '~/components/Team'

export default {
  components: {
   Team 
  },
  metaInfo() {
    return {
      title: 'Team',
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
  page: sanityTeam(id: "cef832e0-d677-47bc-9b33-df2c355b9c60") {
    title
    hero {
      image {
        caption
        captionStyle
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
    }
  }
}
</page-query>

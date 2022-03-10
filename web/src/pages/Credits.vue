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
    description() {
      const des = this.$page.settings.hero._rawIntro ? this.$toPlainText(this.$page.settings.hero._rawIntro) : this.$page.settings.description
      const count = 155
      return des.slice(0, count) + (des.length > count ? '...' : '')
    }
  },
  metaInfo() {
    return {
      title: 'Credits',
      titleTemplate: '%s | The Brooklyn Studio',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description
        },
      ]
    }
  }
}
</script>

<page-query>
{
  settings: sanitySiteSettings(id: "siteSettings") {
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
      text
    }
  }
}
</page-query>

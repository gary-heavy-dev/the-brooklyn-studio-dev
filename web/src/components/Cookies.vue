<template>
  <Layout>
    <div class="cookies">
      <CookiesHero
        v-if="content.hero && content.hero.image && content.hero.image.asset"
        :title="content.title"
        :image="content.hero.image"
        :margin="false"
        :cookies="true"
      />
      <div class="color--white background--navy">
        <BaseBlockContent
          v-if="content._rawBody"
          class="page__intro  m-0"
          :blocks="content._rawBody"
        />
      </div>
      <div v-if="content.cookies && content.cookies.length">
        <Cookie
          v-for="(cookie, index) in content.cookies"
          :key="cookie._id"
          :cookie="cookie"
          :reverse="index % 2 === 1"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import Cookie from '~/components/Cookie.vue'
import CookiesHero from './CookiesHero.vue'

export default {
  components: {
    Cookie,
    CookiesHero
  },
  computed: {
    content() {
      const { cookiesPage } = this.$static
      if (cookiesPage.edges && cookiesPage.edges.length > 0) {
        console.log(cookiesPage.edges[0].node)
        return cookiesPage.edges[0].node
      }
      return {}
    }
  }
}
</script>

<style scoped>
.page__intro {
  margin: 0;
  padding: 40px var(--grid-margin);
}
</style>

<static-query>
{
  cookiesPage: allSanityCookiesPage {
    edges {
      node {
        _id
        title
        _rawBody
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
        cookies {
          _id
          name
          _rawDescription
          recipe {
            _id
            title
            slug {
              current
            }
          }
          image {
            caption
            captionStyle
            asset {
              url
            }
            alt
          }
        }
      }
    }
  }
}
</static-query>

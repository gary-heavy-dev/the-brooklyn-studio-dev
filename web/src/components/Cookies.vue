<template>
  <Layout>
    <div class="cookies">
      <!-- <HeroSecondary
        :title="content.title"
        :image="content.hero.image"
        :margin="false"
      /> -->
      <div v-if="content.cookies.length">
        <Cookie
          v-for="(cookie, index) in content.cookies"
          :key="cookie._id"
          :cookie="cookie"
          :reverse="index % 2 === 1"
        />
      </div>
      <div v-else>
        <p>No cookies found.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Cookie from '~/components/Cookie.vue'
import HeroSecondary from './HeroSecondary.vue';

export default {
  components: {
    Cookie,
    HeroSecondary
  },
  computed: {
    content() {
      const { cookiesPage } = this.$static
      const content = cookiesPage.edges[0].node
      return content
    }
  }
}
</script>

<style scoped></style>

<static-query>
{
  cookiesPage: allSanityCookiesPage {
    edges {
      node {
        _id
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
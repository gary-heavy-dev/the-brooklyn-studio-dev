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

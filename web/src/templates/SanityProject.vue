<template>
  <Layout>
    <Project :content="$page.project" />
  </Layout>
</template>

<script>
import Project from '~/components/Project'

export default {
  components: {
    Project
  }
}
</script>

<page-query>
query Project ($id: ID!) {
  project: sanityProject (id: $id) {
    title
    displayTitle {
      displayTitleStatus
      lineOne
      lineTwo
    }
    image {
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
</page-query>

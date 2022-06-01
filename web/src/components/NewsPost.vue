<template>
  <div class="news-post flex fw w-100">
    <Breadcrumbs
      :previous="breadcrumbLinks"
      :current="content.title"
    />
    <div class="container grid grid--12-desktop">
      <NewsPostHero :content="content" />
      <FlexibleContent :content="[]" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import NewsPostHero from '~/components/NewsPostHero'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    Breadcrumbs,
    NewsPostHero,
    FlexibleContent
  },
  props: {
    content: Object
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          copy: 'Studio News',
          link: '/news'
        },
        {
          copy: 'News Feed',
          link: '/news/feed'
        }
      ]
    }
  }
}
</script>

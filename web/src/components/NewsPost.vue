<template>
  <div class="news-post flex w-100">
    <div class="container grid grid--12-desktop">
      <Breadcrumbs />
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
}
</script>

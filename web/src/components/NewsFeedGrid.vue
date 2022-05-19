<template>
  <div class="news-feed__grid container flex jc-c">
    <div class="grid w-100">
      <NewsFeedCard
        v-for="(post, index) in content.edges"
        :key="index + post.node.title"
        :post="post.node"
        :cardNumber="index"
      />
    </div>
  </div>
</template>

<script>
import NewsFeedCard from '~/components/NewsFeedCard'

export default {
  components: {
    NewsFeedCard,
  },
  props: {
    content: Object,
  },
}
</script>

<style lang="scss">
.news-feed__grid {

  .grid {
    grid-template-columns: repeat(1, 1fr);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include laptop {
      grid-gap: 0 36px;
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
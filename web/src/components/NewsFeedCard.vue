<template>
  <g-link
    :to="'/news/' + post.slug.current"
    class="news-feed-card mb-100 color--gray-tertiary"
    :style="cardStagger"
  >
    <div class="grid__card">
      <BaseImage
        v-if="post.altThumbnail && post.altThumbnail.asset"
        :src="post.altThumbnail"
        :lazy="true"
        :sizes="sizes"
        :x="378"
        :y="302"
        class="mb-30"
        :caption="post.altThumbnail.caption"
        :captionStyle="post.altThumbnail.captionStyle"
      />
      <div class="sub color--gray-tertiary news-feed-card__date">{{ post.publishedAt }}</div>
      <h3 v-html="post.title"></h3>
    </div>
  </g-link>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 311,
        laptop: 410,
        desktop: 377,
        hd: 613,
        fourK: 1226 // by 1332
      }
    }
  },
  computed: {
    cardStagger() {
      return {
        'transition-delay': 0.15 * this.cardNumber + 's'
      }
    }
  },
  props: {
    post: Object,
    cardNumber: Number
  }
}
</script>

<style lang="scss">
.news-feed-card,
.news-feed-filter {
  opacity: 0;
}

.page-loaded {
  .news-feed-card,
  .news-feed-filter {
    opacity: 1;
  }
}

.news-feed-card {
  &__date {
    margin-bottom: 8px;
  }
}
</style>

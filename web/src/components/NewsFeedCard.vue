<template>
  <g-link
    :to="'/news/' + post.slug.current"
    class="work-feed-card mb-100 color--gray-tertiary"
    :style="cardStagger"
  >
    <div class="grid__card">
      <BaseImage
        v-if="post.mainImage"
        :src="post.mainImage"
        :lazy="true"
        :sizes="sizes"
        :x="378"
        :y="302"
        class="mb-30"
        :caption="post.mainImage.caption"
        :captionStyle="post.mainImage.captionStyle"
      />
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
.loaded {

  .news-feed-card,
  .news-feed-filter {
    opacity: 0;
  }

  .news-feed-card {
    transform: translateY(20px);
  }
}
</style>

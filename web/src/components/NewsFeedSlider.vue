<template>
  <section class="news-feed-slider w-100 flex background--navy p-100">
    <div class="news-feed-slider__inner grid grid--12-desktop container">
      <div class="news-feed-slider__intro col-span--all">
        <h2 class="h2">News Feed</h2>
        <BaseBlockContent
          class="mw-readable--large"
          v-if="content._rawNewsFeedIntro"
          :blocks="content._rawNewsFeedIntro"
        />
        <g-link
          to="/news/feed" 
          class="upper button mt-60"
        >Explore News Feed</g-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.news-feed-slider {

  &__intro {
  }
}
</style>
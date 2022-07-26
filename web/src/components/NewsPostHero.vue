<template>
  <div class="news-post-hero mb-100">
    <BaseImage
      v-if="content.mainImage && content.mainImage.asset"
      :src="content.mainImage"
      :lazy="true"
      :sizes="sizes"
      :x="1205"
      :y="1041"
      :caption="content.mainImage.caption"
      class="mb-80"
    />
      <div class="grid grid--12-desktop">
        <h1
          v-if="content.title"
          class="h3 mb-40 col-span--inset-1"
        >{{ content.title }}</h1>
        <div class="news-post-hero__meta-info color--gray-tertiary sub upper col-span--inset-1">
          <span v-if="content.publishedAt">{{ content.publishedAt }} <span> / </span></span>
          <span v-if="content.publisher && content.publisher.title">{{ content.publisher.title }} <span> / </span></span>
        </div>
      </div>
  </div>
</template>

<script>
import BaseImage from './BaseImage.vue';
export default {
    props: {
      content: Object
    },
    data() {
      return {
        sizes: {
          mobile: 413,
          tablet: 660,
          laptop: 855,
          desktop: 1202,
          hd: 1603,
          fourK: 3206
        }
      }
    },
    components: { BaseImage }
}
</script>

<style lang="scss">
.news-post-hero {

  &__meta-info {
    text-align: right;

    > span {

      &:last-child {

        span {
          display: none;
        }
      }
    }
  }
}
</style>
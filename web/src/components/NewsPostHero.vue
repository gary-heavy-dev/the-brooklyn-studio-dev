<template>
  <div class="news-post-hero col-span--all">
    <BaseImage
      v-if="content.mainImage"
      :src="content.mainImage"
      :lazy="true"
      :sizes="sizes"
      :x="1205"
      :y="1041"
      :caption="content.mainImage.caption"
    />
    <h1>{{ content.title }}</h1>
    <div class="news-post-hero__meta-info">Meta / info / goes / here</div>
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
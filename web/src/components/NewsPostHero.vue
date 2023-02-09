<template>
  <div class="news-post-hero mb-100">
    <div class="news-post-hero__headline grid grid--12-desktop">
			<div class="mb-40 col-span--inset-1">
				<h1 v-if="content.title" class="h3">{{ content.title }}</h1>
				<div v-if="content.subtitle" class="upper sub--lg color--gray-tertiary">
					{{ content.subtitle }}
				</div>
			</div>
    </div>
    <BaseImage
      v-if="content.mainImage && content.mainImage.asset"
      :src="content.mainImage"
      :lazy="true"
      :sizes="sizes"
      :caption="content.mainImage.caption"
      class="mb-80"
    />
    <div class="grid grid--12-desktop">
      <div class="news-post-hero__meta-info color--gray-tertiary sub upper col-span--all">
        <span v-if="content.publishedAt">{{ content.publishedAt }} <span> / </span></span>
        <span v-if="content.publisher && content.publisher.title"
          >{{ content.publisher.title }} <span> / </span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseImage from './BaseImage.vue'
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
    width: 100%;
    margin: 0 auto;

    @include tablet {
      max-width: 575px;
    }

    @include laptop {
      max-width: 630px;
    }

    @include desktop {
      max-width: 700px;
    }
  }

  &__meta-info {
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

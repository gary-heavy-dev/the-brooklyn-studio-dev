<template>
  <div class="image-full__container container flexible-image w-100 grid grid--12-desktop">
    <div class="flexible-image__inner image-wrapper" v-view="$iAmRevealed">
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
        :sizes="sizesLandscape"
        :x="content.image.asset.metadata.dimensions.width"
        :y="content.image.asset.metadata.dimensions.height"
        :caption="content.image.caption"
        :captionStyle="content.image.captionStyle"
        @click.native="openLightbox"
      />
    </div>
  </div>
</template>

<script>
import eventHub from '~/utils/eventHub'

export default {
  data() {
    return {
      sizesLandscape: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 999,
        hd: 1333,
        fourK: 2666
      },
      sizesPortrait: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 897,
        hd: 1198,
        fourK: 2396
      }
    }
  },
  props: {
    content: Object,
    type: String
  },
  methods: {
    openLightbox(e) {
      eventHub.$emit('open-lightbox', e.target.getAttribute('data-lightbox'))
    }
  }
}
</script>

<style lang="scss">
.image-full__container {
  margin-bottom: max(60px, 6.75vw);
}

.flexible-image {
  @include desktop-down {
    flex-direction: column;

    &--margins {
      margin-left: var(--grid-margin);
      margin-right: var(--grid-margin);
    }
  }

  @include desktop {
    max-width: 100%;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .flexible-image__inner {
    grid-column: 1 / -1;
    width: 100%;
  }
}
</style>

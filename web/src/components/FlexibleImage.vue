<template>
  <div :class="'flexible-image w-100 mb-100 grid grid--12-desktop flexible-image--' + content.imageLocation + ' flexible-image--' + content.margins">
    <div
      class="flexible-image__inner image-wrapper"
      v-view="$iAmRevealed"
    >
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
        :sizes="content.imageLocation === 'center' ? sizesLandscape : sizesPortrait"
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
    content: Object
  },
  methods: {
    openLightbox(e) {
      eventHub.$emit('open-lightbox', e.target.getAttribute('data-lightbox'))
    }
  }
}
</script>

<style lang="scss">
.flexible-image {

  @include desktop-down {
    flex-direction: column;

    &--margins {
      margin-left: var(--grid-margin);
      margin-right: var(--grid-margin);
    }
  }

  @include desktop {
    @include container;
  }

  &--center {

    .flexible-image__inner {
      grid-column: 2/12;
    }
  }

  &--left {

    .flexible-image__inner {
      grid-column: span 9;
    }
  }

  &--right {

    .flexible-image__inner {
      grid-column: 4/13;
    }
  }
}
</style>

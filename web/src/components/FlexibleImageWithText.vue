<template>
  <div :class="'flexible-image-with-text container grid grid--12-desktop ai-c mb-100 ' + content.aspectRatio + ' image--mobile-' + content.imageLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="flexible-image-with-text__text">
      <div class="mw-readable" v-html="content.text"></div>
    </div>
    <div class="pb-60 mobile-only"></div>
    <div
      class="flexible-image-with-text__image image-wrapper"
      v-view="$iAmRevealed"
    >
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
        :sizes="content.aspectRatio === 'landscape' ? sizesLandscape : sizesPortrait"
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
        mobile: 446,
        tablet: 714,
        laptop: 940,
        desktop: 693,
        hd: 927,
        fourK: 1854
      },
      sizesPortrait: {
        mobile: 446,
        tablet: 741,
        laptop: 949,
        desktop: 591,
        hd: 792,
        fourK: 1584
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
.flexible-image-with-text {

  &.landscape {

    .flexible-image-with-text__text {

      @include desktop {
        grid-column: span 5;
      }
    }

    .flexible-image-with-text__image {

      @include desktop {
        grid-column: span 7;
      }
    }
  }

  &.portrait {

    > div {

      @include desktop {
        grid-column: span 6;
      }
    }
  }

  &__text {

    @include desktop {
      padding-right: 73px;
    }
  }
}
</style>

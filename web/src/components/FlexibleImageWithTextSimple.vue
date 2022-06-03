<template>
  <div :class="'flexible-image-with-text-simple container grid grid--12-desktop ai-c mb-100 image--desktop-' + content.imageLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="grid-spacer desktop-only"></div>
    <div class="flexible-image-with-text__text">
      <BaseBlockContent :blocks="content._rawText" />
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
        :sizes="sizes"
        :x="content.image.asset.metadata.dimensions.width"
        :y="content.image.asset.metadata.dimensions.height"
        :caption="content.image.caption"
        :captionStyle="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
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
}
</script>

<style lang="scss">
.flexible-image-with-text-simple {

  > div:not(.grid-spacer) {

    @include desktop {
      grid-column: span 5;
    }
  }

  &__text {

    @include desktop {
      padding-right: 73px;
    }
  }


  &.image--desktop {

    @include desktop {

      &-left {

        .image-wrapper {
          grid-row: 1;
        }

        .flexible-image-with-text__text {
          padding: 0;
          grid-column: span 5/13;
          grid-row: 1;
        }
      }
    }
  }
}
</style>

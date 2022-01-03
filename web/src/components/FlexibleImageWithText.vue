<template>
  <div :class="'flexible-image-with-text container grid grid--12-desktop ai-c mb-100 ' + content.aspectRatio">
    <div class="flexible-image-with-text__text">
      <div class="mw-readable">{{ content.text }}</div>
    </div>
    <div class="flexible-image-with-text__image">
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
        :sizes="content.aspectRatio === 'landscape' ? sizesLandscape : sizesPortrait"
      />
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
.flexible-image-with-text {

  &.landscape {

    .flexible-image-with-text__text {

      @include laptop {
        grid-column: span 5;
      }
    }

    .flexible-image-with-text__image {

      @include laptop {
        grid-column: span 7;
      }
    }
  }

  &.portrait {

    > div {

      @include laptop {
        grid-column: span 6;
      }
    }
  }

  .flexible-image-with-text__text {
    padding-right: 73px;
  }
}
</style>

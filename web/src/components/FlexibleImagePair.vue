<template>
  <div :class="'flexible-image-pair grid grid--12-desktop container mb-lg ai-c large-location--' + content.imageLargeLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="flexible-image-pair__large-image">
      <BaseImage
        v-if="content.imageLarge"
        :src="content.imageLarge"
        :lazy="true"
        :x="733"
        :y="992"
        :sizes="sizesLarge"
      />
    </div>
    <div class="grid-spacer col-span--1"></div>
    <div class="flexible-image-pair__small-image">
      <BaseImage
        v-if="content.imageSmall"
        :src="content.imageSmall"
        :lazy="true"
        :x="733"
        :y="992"
        :sizes="sizesSmall"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizesSmall: {
        mobile: 338,
        tablet: 544,
        laptop: 721,
        desktop: 388,
        hd: 627,
        fourK: 1042
      },
      sizesLarge: {
        mobile: 446,
        tablet: 714,
        laptop: 940,
        desktop: 693,
        hd: 927,
        fourK: 1854
      }
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.flexible-image-pair {

  &__large-image {
    grid-column: span 4;

    @include desktop-down {
      margin-left: calc(var(--grid-margin) * -1);
    }

    @include desktop {
      grid-column: span 7;
    }
  }

  &__small-image {
    grid-column: span 3;

    @include desktop-down {
      margin-right: calc(var(--grid-margin) * -1);
    }

    @include desktop {
      grid-column: span 4;
    }
  }

  &.large-location {

    &--left {
      flex-direction: row-reverse;
    }
  }
}
</style>

<template>
  <div :class="'flexible-image-pair grid grid--12-desktop container mb-100 ai-c large-location--' + content.imageLargeLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="flexible-image-pair__large-image image-wrapper">
      <BaseImage
        v-if="content.imageLarge"
        :src="content.imageLarge"
        :lazy="true"
        :x="733"
        :y="992"
        :sizes="sizesLarge"
        @click.native="openLightbox"
      />
    </div>
    <div class="grid-spacer col-span--1 pb-60"></div>
    <div class="flexible-image-pair__small-image image-wrapper grid--mobile">
      <BaseImage
        v-if="content.imageSmall"
        :src="content.imageSmall"
        :lazy="true"
        :x="733"
        :y="992"
        :sizes="sizesSmall"
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
      sizesSmall: {
        mobile: 338,
        tablet: 544,
        laptop: 721,
        desktop: 387,
        hd: 521,
        fourK: 1042 // by 1410 tall
      },
      sizesLarge: {
        mobile: 514,
        tablet: 714,
        laptop: 940,
        desktop: 693,
        hd: 927,
        fourK: 1854 // by 2508 tall
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

    @include desktop-down {

      .base-image {
        grid-column: 2/5;
      }
    }

    @include desktop {
      grid-column: span 4;
    }
  }

  .large-location {

    &--left {
      flex-direction: row-reverse;
    }
  }
}
</style>

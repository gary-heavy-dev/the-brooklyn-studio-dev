<template>
  <div :class="'flexible-image container mb-100 grid grid--12-desktop flexible-image--' + content.imageLocation">
    <div class="flexible-image__inner">
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
        :sizes="content.imageLocation === 'center' ? sizesLandscape : sizesPortrait"
        :x="content.image.asset.metadata.dimensions.width"
        :y="content.image.asset.metadata.dimensions.height"
      />
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
.flexible-image {

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

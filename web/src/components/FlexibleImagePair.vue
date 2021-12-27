<template>
  <div :class="'flexible-image-pair container flex fw ai-c jc-sb mb-lg large-location--' + content.imageLargeLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="flexible-image-pair__large-image">
      <BaseImage
        v-if="content.imageLarge"
        :src="content.imageLarge"
        :lazy="true"
        :x="733"
        :y="992"
      />
    </div>
    <div class="flexible-image-pair__small-image">
      <BaseImage
        v-if="content.imageSmall"
        :src="content.imageSmall"
        :lazy="true"
        :x="733"
        :y="992"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.flexible-image-pair {

  &__large-image {
    flex-basis: 61%;
  }

  &__small-image {
    flex-basis: 32.25%;
  }

  &.large-location {

    &--left {
      flex-direction: row-reverse;
    }
  }
}
</style>

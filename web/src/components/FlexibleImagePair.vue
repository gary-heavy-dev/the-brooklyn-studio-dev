<template>
  <div :class="'flexible-image-pair container flex fw ai-c jc-sb large-location--' + content.imageLargeLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="flexible-image-pair__large-image frame">
      <g-image
        v-if="content.imageLarge"
        class="img-cover"
        v-bind="$gImageMap(content.imageLarge, $static.metadata.sanityOptions, '2')"
      />
    </div>
    <div class="flexible-image-pair__small-image frame">
      <g-image
        v-if="content.imageSmall"
        class="img-cover"
        v-bind="$gImageMap(content.imageSmall, $static.metadata.sanityOptions, '2')"
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
    padding-bottom: 82.5%;
  }

  &__small-image {
    flex-basis: 32.25%;
    padding-bottom: 43.75%;
  }

  &.large-location {

    &--left {
      flex-direction: row-reverse;
    }
  }
}
</style>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>

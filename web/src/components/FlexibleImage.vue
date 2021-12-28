<template>
  <div :class="'flexible-image container mb-lg grid grid--12-desktop flexible-image--' + content.imageLocation">
    <div class="flexible-image__inner">
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
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

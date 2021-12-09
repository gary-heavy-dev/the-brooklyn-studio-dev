<template>
  <div :class="'flexible-image container mb-lg flexible-image--' + content.imageLocation">
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
      margin-left: 7%;
      margin-right: 7%;
    }
  }
  &--right,
  &--left {

    .flexible-image__inner {
      width: 74%;
    }
  }

  &--right {

    .flexible-image__inner {
      margin-left: auto;
    }
  }

  &--left {

    .flexible-image__inner {
      margin-right: auto;
    }
  }
}
</style>

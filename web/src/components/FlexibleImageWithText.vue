<template>
  <div :class="'flexible-image-with-text container grid grid--12-desktop ai-c mb-lg ' + content.aspectRatio">
    <div class="flexible-image-with-text__text">
      <div class="mw-readable">{{ content.text }}</div>
    </div>
    <div class="flexible-image-with-text__image">
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
.flexible-image-with-text {

  &.portrait {

    > div {

      @include laptop {
        grid-column: span 6;
      }
    }

    // .flexible-image-with-text__image {
    //   padding-bottom: 73.5%;
    // }
  }

  .flexible-image-with-text__text {
    padding-right: 73px;
  }
}
</style>

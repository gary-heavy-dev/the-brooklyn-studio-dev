<template>
  <div class="flexible-image-with-text flex w-100">
    <div class="flexible-image-with-text__text">{{ content.text }}</div>
    <div :class="'flexible-image-with-text__image frame ' + content.aspectRatio">
      <div class="pos-abs">
        <g-image
          v-if="content.image"
          class="img-cover"
          v-bind="$gImageMap(content.image, $static.metadata.sanityOptions, '1')"
        />
      </div>
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

  // > div {
  //   width: 50%;
  // }

  @include laptop {
    @include container;
  }

  .portrait {
    padding-bottom: 36%;
    width: 50%;
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

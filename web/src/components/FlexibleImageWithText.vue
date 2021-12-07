<template>
  <div :class="'flexible-image-with-text container flex fw ai-c mb-lg ' + content.aspectRatio">
    <div class="flexible-image-with-text__text">
      <div class="mw-readable">{{ content.text }}</div>
    </div>
    <div class="flexible-image-with-text__image frame">
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

  &.portrait {

    > div {
      flex-basis: 100%;

      @include laptop {
        flex-basis: 50%;
      }
    }

    .flexible-image-with-text__image {
      padding-bottom: 73.5%;
    }
  }

  .flexible-image-with-text__text {
    padding-right: 73px;
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

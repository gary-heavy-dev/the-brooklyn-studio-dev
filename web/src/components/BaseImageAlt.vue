<template>
  <div
    :class="['base-image-alt ratio-container', { 'has-ratio': ratio }]"
    :style="{ paddingBottom: aspectRatio + '%' }"
  >
    <img
      v-if="lazy && src.asset != null"
      class="lazyload"
      data-sizes="auto"
      :data-srcset="srcsetString"
      :alt="src.alt"
    />
    <img
      v-else-if="ratio"
      :data-srcset="srcsetString"
      :alt="src.alt"
      class="lazyload"
      data-sizes="auto"
      data-parent-fit="contain"
    />
    <img
      v-else-if="src.asset != null"
      :srcset="srcsetString"
      :src="srcString"
      :alt="src.alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    lazy: Boolean,
    src: Object,
    caption: String,
    x: Number,
    y: Number,
    sizes: Object,
    minX: Number
  },
  data() {
    return {
      ratio: true,
      ratioClass: 'has-ratio'
    }
  },
  computed: {
    aspectRatio() {
      if (this.x && this.y) {
        this.ratio = true
        return (this.y / this.x) * 100
      } else {
        this.ratio = false
      }
    },
    srcString() {
      return String(this.$urlForImage(this.src, this.$static.metadata.sanityOptions))
    },
    srcsetString() {
      return String(this.$gImageMap(this.src, this.sizes, this.$static.metadata.sanityOptions))
    }
  }
}
</script>

<style lang="scss">
.base-image-alt {

  &.ratio-container {
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 0;
      width: 100%;
      /* 16:9 = 56.25% = calc(9 / 16 * 100%) */
      padding-bottom: 56.25%;
    }

    > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &:not(.has-ratio) > * {
    background-color: red;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
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

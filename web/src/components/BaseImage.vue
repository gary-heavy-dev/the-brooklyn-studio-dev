<template>
  <figure class="base-image">
    <div
      :class="['base-image__inner', { 'has-ratio': ratio }]"
      :style="{ paddingBottom: aspectRatio + '%' }"
    >
      <img
        v-if="lazy && src.asset != null"
        class="lazyload"
        data-sizes="auto"
        :data-srcset="srcsetString"
        :data-lightbox="src.asset.id"
        :alt="src.alt"
        :style="[minX ? { minHeight: minX + 'px' } : { minHeight: '0px' }]"
      />
      <img
        v-else-if="ratio"
        :data-srcset="srcsetString"
        :alt="src.alt"
        class="lazyload"
        data-sizes="auto"
        data-parent-fit="contain"
        :data-lightbox="src.asset.id"
      />
      <img
        v-else-if="src.asset != null"
        :srcset="srcsetString"
        :src="srcString"
        :alt="src.alt"
        :data-lightbox="src.asset.id"
      />
    </div>
    <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
  </figure>
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
.base-image {
  width: 100%;

  &__inner {
    display: flex;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;

    &.has-ratio {
      display: block;

      img {
        position: absolute;
      }
    }

    img {
      object-fit: cover;
      object-position: center;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      max-width: 100%;
      height: 100%;

      @include laptop-down {
        min-height: unset !important;
      }
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

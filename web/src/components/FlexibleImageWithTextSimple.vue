<template>
  <div :class="'flexible-image-with-text-simple container grid grid--12-desktop ai-c mb-100 image--desktop-' + content.imageLocation + ' reverse-mobile--' + content.reverseMobile">
    <div class="grid-spacer desktop-only"></div>
    <div
      class="flexible-image-with-text__text"
      :style="style"
    >
      <BaseBlockContent :blocks="content._rawText" />
    </div>
    <div class="pb-60 mobile-only"></div>
    <div
      class="flexible-image-with-text__image image-wrapper"
      v-view="$iAmRevealed"
    >
      <BaseImage
        v-if="content.image"
        :src="content.image"
        :lazy="true"
        :sizes="sizes"
        :x="content.image.asset.metadata.dimensions.width"
        :y="content.image.asset.metadata.dimensions.height"
        :caption="content.image.caption"
        :captionStyle="true"
        ref="myImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        mobile: 446,
        tablet: 741,
        laptop: 949,
        desktop: 591,
        hd: 792,
        fourK: 1584
      },
      style: {}
    }
  },
  props: {
    content: Object
  },
  methods: {
    setStyle() {
      const captionAdjust = this.$el.querySelector(".image-caption").clientHeight / -2
      const theText = this.$el.querySelector(".flexible-image-with-text__text")
      // console.log('captionshouldadjustby', captionAdjust)
      // console.log(theText)
      this.style = { transform: 'translateY(' + captionAdjust + 'px)' }
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.setStyle);
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.setStyle);
    }
  },
  mounted() {
    this.setStyle()
  }
}
</script>

<style lang="scss">
.flexible-image-with-text-simple {

  > div:not(.grid-spacer) {

    @include desktop {
      grid-column: span 5;
    }
  }

  &__text {

    @include desktop {
      padding-right: 73px;
    }
  }


  &.image--desktop {

    @include desktop {

      &-left {

        .image-wrapper {
          grid-row: 1;
          grid-column: 2/7;
        }

        .flexible-image-with-text__text {
          padding: 0;
          grid-column: 7/12;
          grid-row: 1;
          padding-left: 25px;
        }
      }
    }
  }
}
</style>

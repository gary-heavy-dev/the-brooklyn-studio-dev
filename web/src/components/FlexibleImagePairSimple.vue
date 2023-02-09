<template>
  <div class="flexible-image-pair-simple grid grid--12-desktop container mb-100">
    <div class="flexible-image-pair__image image-wrapper col-span--6">
      <BaseImage
        v-if="content.imageLeft"
        :src="content.imageLeft"
        :lazy="true"
        :x="585"
        :y="505"
        :sizes="sizes"
        :caption="content.imageLeft.caption"
        :captionStyle="true"
        v-view="$iAmRevealed"
      />
    </div>
    <div class="flexible-image-pair__image image-wrapper col-span--6">
      <BaseImage
        v-if="content.imageRight"
        :src="content.imageRight"
        :lazy="true"
        :x="585"
        :y="505"
        :sizes="sizes"
        :caption="content.imageRight.caption"
        :captionStyle="true"
        v-view="$iAmRevealed"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        mobile: 514,
        tablet: 714,
        laptop: 940,
        desktop: 693,
        hd: 927,
        fourK: 1854 // by 2508 tall
      }
    }
  },
  props: {
    content: Object
  },
}
</script>

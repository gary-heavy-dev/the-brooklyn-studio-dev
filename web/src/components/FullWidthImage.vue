<template>
  <div class="full-width-image container">
    <div class="" v-view="$iAmRevealed">
      <BaseImage
        :src="content"
        :lazy="true"
        :sizes="sizes"
        :caption="content.caption"
				:captionStyle="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 660,
        laptop: 855,
        desktop: 1202,
        hd: 1603,
        fourK: 3206
      }
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.full-width-image {
	width: 100%
}
</style>

<template>
  <Layout>
    <HeroSecondary
      :title="content.title"
      :image="content.hero.image"
      :margin="true"
    />
    <div class="contact flex w-100">
      <div class="contact__inner container grid grid--12-desktop mb-100 copy--left image--full">
        <div class="col-span--6 pt-100 contact__info">
          <div
            v-for="(block, index) in content.textBlocks"
            :key="index"
            class="mb-100 mw-readable"
          >
            <h2
              v-if="block.heading"
              class="h2 upper"
            >{{ block.heading }}</h2>
            <BaseBlockContent
              v-if="block._rawCopy"
              :blocks="block._rawCopy"
            />
          </div>
        </div>
        <div class="grid-spacer col-span--1"></div>
        <div class="image-wrapper col-span--5">
          <BaseImage
            v-if="content.secondaryImage"
            :src="content.secondaryImage"
            :lazy="true"
            :sizes="sizes"
            :x="getImageDimension(content.secondaryImage, 'width')"
            :y="getImageDimension(content.secondaryImage, 'height')"
            :caption="content.secondaryImage.caption"
            :captionStyle="content.secondaryImage.captionStyle"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import HeroSecondary from '~/components/HeroSecondary'

export default {
  components: {
    HeroSecondary
  },
  data() {
    return {
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 608,
        hd: 815,
        fourK: 1630
      }
    }
  },
  props: {
    content: Object
  },
  methods: {
    getImageDimension(image, axis) {
      if (
        image &&
        image.asset &&
        image.asset.metadata &&
        image.asset.metadata.dimensions
      ) {
        return image.asset.metadata.dimensions[axis]
      }
      return null
    }
  }
}
</script>

<style lang="scss">
.contact {

  &__info {

    @include desktop-down {
      padding-top: 0;

      > div {
        margin-bottom: 50px;
      }
    }
  }
}
</style>

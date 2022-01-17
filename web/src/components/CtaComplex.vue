<template>
  <section
    class="cta-complex flex w-100 p-100"
    :id="content.navTitle ?  $toKebabCase(content.navTitle) : ''"
  >
    <div class="cta-complex__inner container grid grid--12-desktop">
      <div class="cta-complex__left-column">
        <div class="image-wrapper">
          <BaseImage
            :lazy="true"
            v-if="content.leftImage"
            :src="content.leftImage"
            :sizes="sizesLeft"
            :x="content.leftImage.asset.metadata.dimensions.width"
            :y="content.leftImage.asset.metadata.dimensions.height"
          />
        </div>
      </div>
      <div class="grid-spacer col-span--1"></div>
      <div class="cta-complex__right-column flex fd-c">
        <h2
          class="h2 upper"
          v-if="content.heading"
        >{{ content.heading }}</h2>
        <BaseBlockContent
          class="mw-readable"
          v-if="content._rawCopy"
          :blocks="content._rawCopy"
        />
        <div class="cta-complex__links link-list mb-100">
          <g-link
            v-for="(link, index) in content.links"
            :key="index"
            :to="link.link"
            class="upper button"
          >{{ link.linkText }}</g-link>
        </div>
        <div class="image-wrapper">
          <BaseImage
            :lazy="true"
            v-if="content.rightImage"
            :src="content.rightImage"
            :sizes="sizesLeft"
            :x="content.rightImage.asset.metadata.dimensions.width"
            :y="content.rightImage.asset.metadata.dimensions.height"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sizesLeft: {
        mobile: 338,
        tablet: 741,
        laptop: 949,
        desktop: 608,
        hd: 815,
        fourK: 1630
      },
      sizesPrimaryLarge: {
        mobile: 338,
        tablet: 741,
        laptop: 949,
        desktop: 710,
        hd: 950,
        fourK: 1900
      }
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.cta-complex {

  @include desktop-down {
    padding-top: 40px;
  }

  &__left-column {
    grid-column: span 5;

    .image-wrapper {

      @include desktop-down {
        margin-right: calc(var(--grid-margin) * -1);
        margin-bottom: 40px;
      }

      @include desktop {
        margin-left: calc(var(--grid-margin) * -1);
      }
    }
  }

  &__right-column {
    grid-column: span 6;

    .image-wrapper {

      @include desktop-down {
        margin-left: calc(var(--grid-margin) * -1);
      }

      @include desktop {
        margin-right: calc(var(--grid-margin) * -1);
      }
    }
  }

  &__links {

    @include desktop-down {
      margin-bottom: 40px;
    }
  }
}
</style>
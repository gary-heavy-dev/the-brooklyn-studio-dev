<template>
  <section
    :class="'cta-simple w-100 copy--' + content.textLocation + ' background--' + content.bgColor.title + ' image--' + content.imageStyle"
    :id="content.navTitle ?  $toKebabCase(content.navTitle) : ''"
  >
    <div class="cta-simple__inner grid grid--12-desktop">
      <div :class="'copy-wrapper flex ai-c col-span--' + copySpan + ' p-' + (content.paddingSize === '0' ? '60' : content.paddingSize)">
        <div class="copy-wrapper__inner mw-readable">
          <h2
            v-if="content.heading"
            class="upper h2"
          >{{ content.heading }}</h2>
          <p
            v-if="content.largeText"
            class="h5 cta-simple__large-copy"
          >{{ content.largeText }}</p>
          <BaseBlockContent
            v-if="content._rawCopy"
            :blocks="content._rawCopy"
          />
          <g-link
            v-if="content.link"
            class="upper button mt-60"
            :to="content.link"
          >{{ content.linkText }}</g-link>
        </div>
      </div>
      <div class="grid-spacer col-span--1"></div>
      <div :class="'image-wrapper col-span--' + content.imageWidth + ' p-' + content.paddingSize">
        <BaseImage
          v-if="content.image"
          :src="content.image"
          :lazy="true"
          :sizes="sizes"
          :x="content.image.asset.metadata.dimensions.width"
          :y="content.image.asset.metadata.dimensions.height"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contained: {
        mobile: {
          mobile: 412,
          tablet: 660,
          laptop: 856
        },
        desktop: {
          small: {
            desktop: 489,
            hd: 656,
            fourK: 1312
          },
          medium: {
            desktop: 591,
            hd: 792,
            fourK: 1584
          },
          large: {
            desktop: 693,
            hd: 927,
            fourK: 1854
          }
        }
      },
      full: {
        mobile: {
          mobile: 480,
          tablet: 768,
          laptop: 1024
        },
        desktop: {
          small: {
            desktop: 608,
            hd: 815,
            fourK: 1630
          },
          medium: {
            desktop: 710,
            hd: 950,
            fourK: 1900
          },
          large: {
            desktop: 812,
            hd: 1085,
            fourK: 2170
          }
        }
      },
    }
  },
  props: {
    content: Object
  },
  computed: {
    copySpan() {
      return 11 - this.content.imageWidth
    },
    sizes() {
      return {
        ...(this.content.imageStyle == 'full' && this.full.mobile),
        ...(this.content.imageStyle == 'contained' && this.contained.mobile),

        ...((this.content.imageStyle == 'full' && this.content.imageWidth == 5) && this.full.desktop.small),
        ...((this.content.imageStyle == 'contained' && this.content.imageWidth == 5) && this.contained.desktop.small),

        ...((this.content.imageStyle == 'full' && this.content.imageWidth == 6) && this.full.desktop.medium),
        ...((this.content.imageStyle == 'contained' && this.content.imageWidth == 6) && this.contained.desktop.medium),

        ...((this.content.imageStyle == 'full' && this.content.imageWidth == 7) && this.full.desktop.large),
        ...((this.content.imageStyle == 'contained' && this.content.imageWidth == 7) && this.contained.desktop.large),
      }
    }
  }
}
</script>

<style lang="scss">
.cta-simple {
  display: flex;
  position: relative;

  &__inner {

    @include container;

    @include desktop-down {
      display: flex;
      flex-direction: column-reverse;

      .copy-wrapper {
        padding: 39px 0 100px;
      }

      .image-wrapper {
        margin-left: calc(var(--grid-margin) * -1);
        padding: 0;
      }
    }
  }

  .image-wrapper {

    &.p-0 {

      @include desktop {

        .base-image,
        .base-image__inner {
          object-fit: cover;
          height: 100%;
        }
      }
    }
  }

  // &__image {
  //   grid-column: span 4;

  //   @include desktop {
  //     grid-column: 6/13;
  //   }
  // }

  &__large-copy {
    max-width: 400px;
  }

  &--right {

    .image-grid-ignore {

      @include desktop {

        position: relative;

        &__inner {
          width: 100%;
        }
      }
    }

    // .cta-simple__image {

    //   @include desktop {
    //     grid-column: span 5;
    //   }
    // }
  }
}
</style>

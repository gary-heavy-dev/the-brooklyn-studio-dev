<template>
  <section
    :class="'cta-simple w-100 copy--' + content.textLocation + ' background--' + content.bgColor.title + ' image--' + content.imageStyle + ' p-' + content.paddingSize"
  >
    <div class="cta-simple__inner grid grid--12-desktop">
      <div :class="'copy-wrapper flex ai-c col-span--' + copySpan">
        <div class="copy-wrapper__inner mw-readable">
          <h2
            v-if="content.heading"
            class="upper"
          >{{ content.heading }}</h2>
          <BaseBlockContent
            v-if="content._rawCopy"
            :blocks="content._rawCopy"
          />
          <g-link
            v-if="content.link"
            class="upper"
            :to="content.link"
          >{{ content.linkText }}</g-link>
        </div>
      </div>
      <div class="grid-spacer col-span--1"></div>
      <div :class="'image-wrapper col-span--' + content.imageWidth">
        <BaseImage
          v-if="content.image"
          :src="content.image"
          :lazy="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  },
  computed: {
    copySpan() {
      return 11 - this.content.imageWidth
    }
  }
}
</script>

<style lang="scss">
.cta-simple {
  display: flex;
  position: relative;

  &__inner {

    @include desktop {
      @include container;
    }
  }

  &__copy,
  &__image {
    grid-column: span 4;
  }

  &__copy {

    @include desktop-down {
      @include container;
      order: 2;
    }
  }

  &__image {

    @include desktop {
      grid-column: 6/13;
    }
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

    .cta-simple__image {

      @include desktop {
        grid-column: span 5;
      }
    }

    .cta-simple__copy {

      @include desktop {
        grid-column: 7/13;
        order: 2;
      }
    }
  }
}
</style>

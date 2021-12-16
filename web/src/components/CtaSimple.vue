<template>
  <section
    :class="'cta-simple w-100 cta-simple--' + content.textLocation + ' background--' + content.bgColor.title"
  >
    <div class="cta-simple__inner grid grid--12-desktop">
      <div class="cta-simple__copy flex ai-c">
        <div class="cta-simple__copy-inner mw-readable">
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
      <div class="cta-simple__image image-grid-ignore">
        <div class="image-grid-ignore__inner">
          <BaseImage
            v-if="content.image"
            :src="content.image"
          />
        </div>
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
    backColor() {
      if(this.content.bgColor) {
        return this.content.bgColor.value
      } else {
        return 'white'
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
      padding-bottom: 98%;
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
        padding-bottom: 132.25%;
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

<template>
  <section class="cta-simple w-100">
    <div class="cta-simple__inner grid grid--12-desktop">
      <div class="cta-simple__copy flex ai-c">
        <div class="cta-simple__copy-inner">
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
  }
}
</script>

<style lang="scss">
.cta-simple {
  display: flex;
  background-color: white;
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
}
</style>

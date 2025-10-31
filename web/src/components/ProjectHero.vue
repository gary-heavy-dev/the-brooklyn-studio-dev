<template>
  <div
    class="project-hero container pos-rel mb-100"
  >
    <div class="project-hero__title w-100 flex jc-sb">
      <h1
        v-if="displayTitle && displayTitle.displayTitleStatus"
        class="h2 color--navy fade--in-up"
      >
        <span v-html="displayTitle.lineOne"></span><br>
        <span v-html="displayTitle.lineTwo"></span>
      </h1>
      <h1
        v-else
        class="h2 color--navy"
      >
        {{ heading }}
      </h1>

      <a class="project-hero__title-info color--gray h2 fade--in-up" href="#">Info</a>
    </div>
    <BaseImage
      v-if="mobileImage"
      class="mobile-only"
      :lazy="true"
      :src="mobileImage"
      :caption="mobileImage.caption"
      :captionStyle="mobileImage.captionStyle"
    />
    <BaseImage
      v-if="image"
      :class="['project-hero-mobile', {'desktop-only': mobileImage}]"
      :lazy="true"
      :src="image"
      :caption="image.caption"
      :captionStyle="image.captionStyle"
    />
  </div>
</template>

<script>
export default {
  props: {
    displayTitle: Object,
    heading: String,
    image: Object,
    mobileImage: Object
  },
}
</script>

<style lang="scss">
.project-hero {
  &__title {
    padding-top: 50px;
    padding-bottom: 40px;

    .h2 {
      margin-bottom: 0;
    }
  }

  &__title-info {
    @include laptop {
      padding-right: 40px;
    }
  }

  .base-image__inner {
    aspect-ratio: 3/2;
  }
}
</style>

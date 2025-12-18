<template>
  <div :class="['project-hero container pos-rel', { 'mb-100': hideHeader }]">
    <div class="project-hero__title w-100 flex jc-sb">
      <h1
        v-if="displayTitle && displayTitle.displayTitleStatus"
        id="projectHeading"
        class="h2 color--navy fade--in-up"
      >
        <span v-html="displayTitle.lineOne"></span><br />
        <span v-html="displayTitle.lineTwo"></span>
      </h1>
      <h1 v-else class="h2 color--navy fade--in-up" id="projectHeading" v-html="heading"></h1>

      <div class="fade--in-up">
        <a
          href="#projectInfo"
          class="project-hero__title-info color--gray h4"
          @click.prevent="jumpToProjectInfo"
          >Info</a
        >
      </div>
    </div>
    <div class="project-hero__img-wrapper" v-if="!hideHero">
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
        :class="['project-hero-mobile', { 'desktop-only': mobileImage }]"
        :lazy="true"
        :src="image"
        :caption="image.caption"
        :captionStyle="image.captionStyle"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displayTitle: Object,
    heading: String,
    image: Object,
    hideHero: Boolean,
    mobileImage: Object,
    hideHeader: Boolean
  },
  data() {
    return {}
  },
  methods: {
    jumpToProjectInfo() {
      const el = document.getElementById('projectInfo')

      if (!el) return

      el.scrollIntoView({ behavior: 'auto' })
    }
  }
}
</script>

<style lang="scss">
.project-hero {
  scroll-margin-top: 50px;

  @include desktop {
    scroll-margin-top: 70px;
  }

  &__title {
    padding-top: 50px;
    padding-bottom: 40px;
    align-items: center;
    gap: 30px;

    .h2 {
      margin-bottom: 0;
    }
  }

  .project-hero__img-wrapper {
    margin-bottom: 40px;
    @include desktop {
      margin-bottom: max(75px, 7.5vw);
    }
  }

  .base-image__inner {
    aspect-ratio: 3/2;
  }
}
</style>

<template>
  <div class="work-feed-slide">
    <div class="work-feed-slide__title pt-60 pos-abs z-1">
      <h1 class="h1 color--white">{{ content.title }}</h1>
    </div>
    <div class="work-feed-slide__hero overlay mb-80 o-h">
      <BaseImage
        v-if="content.heroImage"
        class="project-hero-mobile"
        :src="content.heroImage"
        :lazy="true"
        :sizes="sizes"
        :x="1284"
        :y="500"
        :caption="content.heroImage.caption"
        :captionStyle="content.heroImage.captionStyle"
      />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 1283,
        hd: 1711,
        fourK: 3422 // by 1332
      }
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">

.work-feed-slide__title {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease-in-out;
  transition-delay: 0.2s;
}

.work-feed-slide {
  // width: 89.1vw;
  height: fit-content;
  margin: 0 auto;
  position: relative;

  &__title {
    left: var(--grid-margin);

    @include desktop {
      left: 3.1%;
    }
  }

  &__hero {
    position: relative;

    @include desktop-down {
      margin-bottom: 40px;
    }
  }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {

  .work-feed-slide__title {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
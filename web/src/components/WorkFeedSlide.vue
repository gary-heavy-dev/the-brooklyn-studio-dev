<template>
  <div class="work-feed-slide">
    <div class="work-feed-slide__title mt-hh pos-abs z-1">
      <h1 class="h1 color--white">{{ content.title }}</h1>
    </div>
    <div class="work-feed-slide__hero mb-lg h-60vh o-h">
      <g-image
        v-if="content.heroImage"
        class="img-cover"
        v-bind="$gImageMap(content.heroImage, $static.metadata.sanityOptions, '1')"
      />
    </div>
    <div class="work-feed-slide__grid flex jc-c">
      <div class="grid grid--3-desktop grid--2-laptop w-100">
        <WorkFeedCard
          v-for="(project, index) in content.projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WorkFeedCard from '~/components/WorkFeedCard'

export default {
  components: {
    WorkFeedCard
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.work-feed-slide {
  width: 90.85vw;
  height: fit-content;
  margin: 0 auto;
  position: relative;

  &__title,
  &__grid {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s ease-in-out;
    transition-delay: 0.2s;
  }

  &__title {
    left: 4.75%;
  }

  &__grid {
    margin-left: 4.75%;
    margin-right: 4.75%;

    // .grid {
    //   position: absolute;
    // }
  }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {

  .work-feed-slide__title,
  .work-feed-slide__grid {
    opacity: 1;
    transform: translateY(0px);

    // .grid {
    //   position: relative;
    // }
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
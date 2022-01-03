<template>
  <div class="work-feed-slide">
    <div class="work-feed-slide__title pt-60 pos-abs z-1">
      <h1 class="h1 color--white">{{ content.title }}</h1>
    </div>
    <div class="work-feed-slide__hero overlay mb-100 o-h">
      <BaseImage
        v-if="content.heroImage"
        :src="content.heroImage"
        :lazy="true"
        :sizes="sizes"
        :x="1284"
        :y="500"
      />
    </div>
    <div class="work-feed-slide__grid flex jc-c">
      <div class="grid w-100">
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
.work-feed-slide {
  width: 89.1vw;
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
    left: 3.1%;
  }

  &__hero {
    position: relative;
  }

  &__grid {
    margin-left: 3.1%;
    margin-right: 3.1%;

    .grid {
      grid-template-columns: repeat(1, 1fr);

      @include tablet {
        grid-template-columns: repeat(2, 1fr);
      }

      @include laptop {
        grid-gap: 0 36px;
      }

      @include desktop {
        grid-template-columns: repeat(3, 1fr);
      }
    }
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
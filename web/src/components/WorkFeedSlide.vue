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
      />
    </div>
    <div class="work-feed-slide__grid container flex jc-c">
      <div class="grid w-100">
        <WorkFeedFilter
          v-if="content.projectCategories"
          :categories="content.projectCategories"
          @checkbox-clicked="updateActiveCategories"
          @filter-cleared="clearCategories"
        />
        <WorkFeedCard
          v-for="(project, index) in filteredProjects"
          :key="index + project.title"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WorkFeedCard from '~/components/WorkFeedCard'
import WorkFeedFilter from '~/components/WorkFeedFilter'

export default {
  components: {
    WorkFeedCard,
    WorkFeedFilter
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
      },
      activeCategories: []
    }
  },
  props: {
    content: Object
  },
  computed: {
    filteredProjects() {
      if (this.activeCategories.length) {
        return this.content.projects.filter(project => project.projectCategories.some(category => this.activeCategories.includes(category.title)))
      } else {
        return this.content.projects
      }
    }
  },
  methods: {
    updateActiveCategories(event) {
      if (event.status == true) {
        this.activeCategories.push(event.value)
      } else {
        const tempArray = this.activeCategories.filter(item => item != event.value)
        this.activeCategories = tempArray
      }
    },
    clearCategories() {
      this.activeCategories = []
    }
  }
}
</script>

<style lang="scss">
.work-feed-slide {
  // width: 89.1vw;
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

  &__grid {

    @include desktop {
      margin-left: 3.1%;
      margin-right: 3.1%;
    }
  
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
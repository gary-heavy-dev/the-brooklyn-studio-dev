<template>
  <div class="work-feed__grid container flex jc-c">
    <div class="grid w-100">
      <WorkFeedFilter
        v-if="content.projectCategories"
        :categories="content.projectCategories"
        @checkbox-clicked="updateActiveCategories"
        @filter-cleared="clearCategories"
      />
      <WorkFeedCard
        v-for="(project, index) in filteredProjects"
        :key="index + project.project.title"
        :project="project"
      />
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
  props: {
    content: Object
  },
  data() {
    return {
      activeCategories: []
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeCategories.length) {
        return this.content.projectReferences.filter(project => project.project.projectCategories.some(category => this.activeCategories.includes(category.title)))
      } else {
        return this.content.projectReferences
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
.work-feed__grid {

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
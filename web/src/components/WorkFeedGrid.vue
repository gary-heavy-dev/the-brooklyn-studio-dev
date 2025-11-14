<template>
  <div class="work-feed__grid">
    <div class="work-feed__grid-container container flex jc-c">
      <div class="grid w-100">
        <WorkFeedFilter
          v-if="category"
          :categories="category"
          :selectedCategories="activeCategories"
          @checkbox-clicked="updateActiveCategories"
          @filter-cleared="clearCategories"
        />
        <WorkFeedCard
          v-for="(project, index) in filteredProjects"
          :key="index + project.title"
          :project="project"
          :cardNumber="index"
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
  props: {
    content: Array,
    category: Array,
    status: Boolean,
    prev: String,
    next: String
  },
  data() {
    return {
      activeCategories: [],
      status: false
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeCategories.length) {
        return this.content.filter(project =>
          project.projectCategories.some(category =>
            this.activeCategories.includes(category.slug?.current)
          )
        )
      } else {
        return this.content
      }
    }
  },
  methods: {
    updateActiveCategories(event) {
      if (event.status) {
        if (!this.activeCategories.includes(event.value)) {
          this.activeCategories.push(event.value)
        }
      } else {
        this.activeCategories = this.activeCategories.filter(item => item != event.value)
      }
      this.updateURL()
    },

    clearCategories() {
      this.activeCategories = []
      this.updateURL()
    },

    updateURL() {
      const currentQuery = { ...this.$route.query }

      if (this.activeCategories.length) {
        currentQuery.category = this.activeCategories.join(',')
      } else {
        delete currentQuery.category
      }

      this.$router.replace({ query: currentQuery }).catch(() => {})
    },

    updateFromQuery(query) {
      if (query.category) {
        this.activeCategories = query.category.split(',').map(decodeURIComponent)
      } else {
        this.activeCategories = []
      }
    }
  },
  mounted() {
    this.updateFromQuery(this.$route.query)

    this.$watch(
      () => this.$route.query,
      newQuery => {
        this.updateFromQuery(newQuery)
      }
    )

    const cardWrapper = document.getElementsByClassName('work-feed__grid')
    setTimeout(
      () => Array.prototype.forEach.call(cardWrapper, card => card.classList.add('loaded')),
      250
    )
  },
  beforeDestroy() {
    const cardWrapper = document.getElementsByClassName('work-feed__grid')
    setTimeout(
      () =>
        Array.prototype.forEach.call(cardWrapper, function(card) {
          card.classList.remove('loaded')
        }),
      250
    )
  }
}
</script>

<style lang="scss">
.work-feed__navigation {
  a {
    text-decoration: none;
  }
}

.work-feed__grid {
  padding-top: 60px;
  background-color: var(--color--gray-light);

  &.loaded {
    opacity: 1;
    transition: opacity 0.2s linear;

    &.filtering {
      opacity: 0;
      transition-delay: 0.3s;
    }
  }

  &.current-grid,
  &.current-grid .work-feed__grid-container {
    display: block;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @include laptop {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0 36px;
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

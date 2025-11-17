<template>
  <div class="work-feed__grid">
    <div class="work-feed__grid-container container flex jc-c">
      <div class="grid w-100">
        <WorkFeedFilter
          v-if="category || type"
          :categories="category"
          :types="type"
          :selectedCategories="activeCategories"
          :selectedTypes="activeTypes"
          @checkbox-clicked="updateActiveFilter"
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
    type: Array,
    status: Boolean,
    prev: String,
    next: String
  },
  data() {
    return {
      activeCategories: [],
      activeTypes: []
    }
  },
  computed: {
    filteredProjects() {
      const activeCatLength = this.activeCategories.length
      const activeTypeLength = this.activeTypes.length

      if (!activeCatLength && !activeTypeLength) {
        return this.content
      }

      return this.content.filter(project => {
        let matchesCategory = true
        let matchesType = true

        if (activeCatLength) {
          matchesCategory = project.projectCategories?.some(cat =>
            this.activeCategories.includes(cat.slug?.current)
          )
        }

        if (activeTypeLength) {
          matchesType = project.projectTypes?.some(type =>
            this.activeTypes.includes(type.slug?.current)
          )
        }

        return matchesCategory && matchesType
      })
    }
  },
  methods: {
    updateActiveFilter(event) {
      const filterGroup = event.group
      const value = event.value
      const status = event.status
      let activeArray = filterGroup === 'category' ? this.activeCategories : this.activeTypes

      if (status) {
        if (!activeArray.includes(value)) {
          activeArray.push(value)
        }
      } else {
        activeArray = activeArray.filter(item => item != value)
      }

      if (filterGroup === 'category') {
        this.activeCategories = activeArray
      } else {
        this.activeTypes = activeArray
      }

      this.updateURL()
    },

    clearCategories() {
      this.activeCategories = []
      this.activeTypes = []
      this.updateURL()
    },

    updateURL() {
      const currentQuery = { ...this.$route.query }

      if (this.activeCategories.length) {
        currentQuery.category = this.activeCategories.join(',')
      } else {
        delete currentQuery.category
      }

      if (this.activeTypes.length) {
        currentQuery.type = this.activeTypes.join(',')
      } else {
        delete currentQuery.type
      }

      this.$router.replace({ query: currentQuery }).catch(() => {})
    },

    updateFromQuery(query) {
      if (query.category) {
        this.activeCategories = query.category.split(',').map(decodeURIComponent)
      } else {
        this.activeCategories = []
      }

      if (query.type) {
        this.activeTypes = query.type.split(',').map(decodeURIComponent)
      } else {
        this.activeTypes = []
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

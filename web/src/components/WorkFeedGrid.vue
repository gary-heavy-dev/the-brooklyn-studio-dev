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
        :cardNumber="index"
      />
    </div>
    <div class="pre-footer__navigation flex jc-sb color--gray-tertiary pb-80">
      <g-link
        :to="'/projects/#' + $toKebabCase(prev)"
        class="sub upper"
        @click.native="$scrollToTop"
      ><span>&lt; </span><span>{{ prev }}</span></g-link>
      <g-link
        :to="'/projects/#' + $toKebabCase(next)"
        class="sub upper next"
        @click.native="$scrollToTop"
      ><span>{{ next }}</span><span> &gt;</span></g-link>
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
    content: Object,
    status: Boolean,
    prev: String,
    next: String
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
    },
  },
  mounted() {
    const cardWrapper = document.getElementsByClassName('work-feed__grid')
    setTimeout(() => Array.prototype.forEach.call(cardWrapper, function(card) {
      card.classList.add('loaded')
    }), 250)
  },
  beforeDestroy() {
    const cardWrapper = document.getElementsByClassName('work-feed__grid')
    setTimeout(() => Array.prototype.forEach.call(cardWrapper, function(card) {
      card.classList.remove('loaded')
    }), 250)
  },
}
</script>

<style lang="scss">
.work-feed__navigation {
  a {
    text-decoration: none;
  }
}

.work-feed__grid {
  display: none;

  &.loaded {
    opacity: 1;
    transition: opacity 0.2s linear;

    &.filtering {
      opacity: 0;
      transition-delay: 0.3s;
    }
  }

  &.current-grid {
    display: block;
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
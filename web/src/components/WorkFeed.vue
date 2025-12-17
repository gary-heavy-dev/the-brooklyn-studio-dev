<template>
  <div class="work-feed">
    <WorkFeedGrid
      data-category="all"
      :content="filtered"
      :category="this.category"
      :type="this.type"
    />
  </div>
</template>

<script>
import WorkFeedGrid from '~/components/WorkFeedGrid'

export default {
  components: { WorkFeedGrid },

  props: {
    pageData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      filtered: []
    }
  },

  computed: {
    projects: function () {
      return this.pageData && this.pageData.projects
        ? this.pageData.projects
        : []
    },

    category: function () {
      return this.pageData && this.pageData.categoryFilters
        ? this.pageData.categoryFilters
        : []
    },

    type: function () {
      return this.pageData && this.pageData.typeFilters
        ? this.pageData.typeFilters
        : []
    }
  },

  mounted() {
    this.updateActiveGridFromHash(this.$route.query.type)
  },

  watch: {
    '$route.query.type'(newHash) {
      this.updateActiveGridFromHash(newHash)
    },
    pageData: {
      immediate: true,
      handler() {
        this.updateActiveGridFromHash(this.$route.query.type)
      }
    }
  },

  methods: {
    updateActiveGridFromHash(hash) {
      this.filtered = this.projects
    }
  }
}
</script>

<style lang="scss">
.work-feed__grid {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>

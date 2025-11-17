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

  data() {
    return {
      filtered: []
    }
  },

  computed: {
    projects() {
      return this.$static.projects.edges.map(e => e.node)
    },

    category() {
      return this.$static.categories.edges.map(e => e.node)
    },

    type() {
      return this.$static.types.edges.map(e => e.node)
    }
  },

  mounted() {
    this.updateActiveGridFromHash(this.$route.query.type)
  },

  watch: {
    '$route.query.type'(newHash) {
      this.updateActiveGridFromHash(newHash)
    }
  },

  methods: {
    updateActiveGridFromHash(hash) {
      const categorySlug = (hash || '?type=all').replace('?type=', '')

      if (categorySlug === 'all') {
        this.filtered = this.projects

        return
      }

      this.filtered = this.projects.filter(project =>
        project.projectTypes?.some(cat => cat.slug?.current === categorySlug)
      )
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

<static-query>
{
  projects: allSanityProject(sortBy: "_createdAt", order: DESC) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        projectCategories {
          title
          slug {
            current
          }
        }
        projectTypes {
          title
          slug {
            current
          }
        }
        image {
          alt
          asset {
            url
            metadata {
              lqip
            }
          }
        }
      }
    }
  }
  categories: allSanityProjectCategory(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        slug {
          current
        }
      }
    }
  }
  types: allSanityProjectType(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        slug {
          current
        }
      }
    }
  }
}
</static-query>

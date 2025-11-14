<template>
  <li class="dropdown" @mouseleave="expanded = false">
    <button
      type="button"
      class="dropdown__title"
      :aria-expanded="String(expanded)"
      @click="onPrimaryClick"
    >
      {{ primary.linkText }}
    </button>

    <ul class="dropdown__menu">
      <li v-for="(link, index) in secondary" :key="index">
        <a
          class="small"
          href="#"
          :class="{ 'active--exact': isActive(link) }"
          @click.prevent="onSecondaryClick(link)"
        >
          {{ link.linkText }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    primary: Object,
    secondary: Array
  },
  data() {
    return { expanded: false }
  },
  methods: {
    isActive(link) {
      const url = new URL(link.link, window.location.origin)
      const linkPath = url.pathname
      const linkParams = Object.fromEntries(url.searchParams.entries())

      if (linkPath !== this.$route.path) return false

      for (const key in linkParams) {
        if (linkParams[key] !== this.$route.query[key]) return false
      }

      return true
    },

    onPrimaryClick() {
      this.expanded = !this.expanded
      const urlPath = this.primary.link || '/projects'
      const currentQuery = { ...this.$route.query }

      const hasType = !!currentQuery.type
      const hasCategory = !!currentQuery.category
      const queryToPush = {}

      if (hasType && hasCategory) {
        queryToPush.category = currentQuery.category
      } else if (hasType && !hasCategory) {
      } else if (!hasType && hasCategory) {
        queryToPush.category = currentQuery.category
      }

      this.$router.replace({ path: urlPath, query: queryToPush }).catch(() => {})
    },

    onSecondaryClick(link) {
      this.expanded = false
      const url = new URL(link.link, window.location.origin)
      const newQuery = Object.fromEntries(url.searchParams.entries())
      const currentQuery = { ...this.$route.query }
      const queryToPush = {}

      if (currentQuery.category) {
        queryToPush.category = currentQuery.category
      }

      if (newQuery.type) queryToPush.type = newQuery.type

      this.$router.replace({ path: url.pathname, query: queryToPush }).catch(() => {})
    }
  }
}
</script>

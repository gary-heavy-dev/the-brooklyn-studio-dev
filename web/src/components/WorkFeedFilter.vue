<template>
  <div class="work-feed-filter color--gray-tertiary mb-40">
    <ul>
      <Checkbox
        v-for="(category, index) in categories"
        :key="index"
        :label="category.title" 
        v-on="$listeners"
      />
      <button @click="clearFilter">Clear</button>
    </ul>
  </div>
</template>

<script>
import Checkbox from "~/components/Checkbox"

export default {
  components: {
    Checkbox
  },
  data() {
    return {
      status: undefined
    }
  },
  props: {
    categories: Array
  },
  methods: {
    clearFilter() {
      this.status = false
      console.log(this.status)
      this.$emit('filter-cleared')
    }
  }
}
</script>
<style lang="scss">
.work-feed-filter {
  grid-column: 1 / -1;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
  }
}
</style>
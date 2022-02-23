<template>
  <div class="work-feed-filter color--gray-tertiary mb-40 desktop-only">
    <ul>
      <Checkbox
        v-for="(category, index) in categories"
        :key="index"
        :label="category.title" 
        v-on="$listeners"
      />
      <button
        @click="clearFilter"
        class="filter-clear-button upper sub"
      ><span>&times;</span> Clear</button>
    </ul>
  </div>
</template>

<script>
import Checkbox from '~/components/Checkbox'
import eventHub from '~/utils/eventHub'

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
      this.$emit('filter-cleared')
      eventHub.$emit('filter-cleared')
    }
  }
}
</script>
<style lang="scss">
.work-feed-filter {
  grid-column: 1 / -1;
  transition-delay: 0.45s;
  transition-duration: 0.3s;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
  }

  .filter-clear-button {

    span {
      position: relative;
      top: -1px;
    }
  }
}
</style>
<template>
  <div class="work-feed-filter color--gray-tertiary mb-100 desktop-only">
    <ul>
      <Checkbox
        v-for="(type, index) in types"
        :key="`type-${index}`"
        :label="type.slug?.current"
        :checked="isChecked(type.slug?.current, 'type')"
        @checkbox-clicked="emitFilter($event.value, $event.status, 'type')"
      />

      <li class="separator">|</li>

      <Checkbox
        v-for="(category, index) in categories"
        :key="`cat-${index}`"
        :label="category.slug?.current"
        :checked="isChecked(category.slug?.current, 'category')"
        @checkbox-clicked="emitFilter($event.value, $event.status, 'category')"
      />

      <button @click="clearFilter" class="filter-clear-button upper sub">
        <span>&times;</span> Clear
      </button>
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
  props: {
    categories: Array,
    types: Array,
    selectedCategories: Array,
    selectedTypes: Array
  },
  methods: {
    emitFilter(value, status, group) {
      this.$emit('checkbox-clicked', { value, status, group })
    },
    clearFilter() {
      this.$emit('filter-cleared')
      eventHub.$emit('filter-cleared')
    },
    isChecked(slug, group) {
      const selected = group === 'category' ? this.selectedCategories : this.selectedTypes
      return selected?.includes(slug)
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
    display: flex;
    justify-content: center;
    margin: 0;
    list-style: none;
  }

  .separator {
    padding: 0 10px;
    font-weight: 300;
  }

  .filter-clear-button {
    span {
      position: relative;
      top: -1px;
    }
  }
}
</style>

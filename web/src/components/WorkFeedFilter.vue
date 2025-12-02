<template>
  <div class="work-feed-filter color--navy-light mb-60">
    <ul class="work-feed-filter__types">
      <Checkbox
        v-for="(type, index) in types"
        :key="`type-${index}`"
        :label="type.slug?.current"
        :checked="isChecked(type.slug?.current, 'type')"
        @checkbox-clicked="emitFilter($event.value, $event.status, 'type')"
      />
    </ul>

    <div class="filter-categories-container">
      <ul class="work-feed-filter__categories">
        <Checkbox
          v-for="(category, index) in categories"
          :key="`cat-${index}`"
          :label="category.slug?.current"
          :checked="isChecked(category.slug?.current, 'category')"
          @checkbox-clicked="emitFilter($event.value, $event.status, 'category')"
        />
      </ul>
      <button @click="clearFilter" class="filter-clear-button upper sub">
        <span class="color--gray-light">&times;</span> Clear
      </button>
    </div>
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition-delay: 0.45s;
  transition-duration: 0.3s;

  @include desktop {
    flex-direction: column;
    row-gap: 15px;
  }

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    list-style: none;
    row-gap: 10px;
    margin-bottom: 30px;

    @include desktop {
      margin-bottom: 0px;
      flex-direction: row;
      row-gap: 0;
    }

    &::after {
      content: '';
      width: 150px;
      position: absolute;
      bottom: -15px;
      height: 1px;
      background: var(--color--gray);

      @include desktop {
        display: none;
      }
    }
  }

  .filter-categories-container {
    @include desktop {
      display: flex;
    }
  }

  .filter-clear-button {
    color: var(--color--gray-tertiary);
    white-space: nowrap;

    @include desktop {
      margin-left: 15px;
    }

    span {
      position: relative;
      top: -1px;
    }
  }
}
</style>

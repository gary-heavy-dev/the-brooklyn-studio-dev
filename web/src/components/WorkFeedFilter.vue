<template>
  <div class="work-feed-filter color--gray-tertiary mb-100">
    <ul class="work-feed-filter__types">
      <Checkbox
        v-for="(type, index) in types"
        :key="`type-${index}`"
        :label="type.slug?.current"
        :checked="isChecked(type.slug?.current, 'type')"
        @checkbox-clicked="emitFilter($event.value, $event.status, 'type')"
      />
    </ul>

    <span class="separator desktop-only">|</span>

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
        <span>&times;</span> Clear
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

  @include laptop {
    flex-direction: row;
    row-gap: 20px;
  }

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    list-style: none;
    row-gap: 10px;
    margin-bottom: 30px;

    @include laptop {
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

      @include laptop {
        display: none;
      }
    }
  }

  .separator {
    margin: auto 15px;
    margin-bottom: 1px;
  }

  .filter-categories-container {
    @include laptop {
      display: flex;
    }
  }

  .filter-clear-button {
    @include laptop {
      margin-left: 30px;
    }

    span {
      position: relative;
      top: -1px;
    }
  }
}
</style>

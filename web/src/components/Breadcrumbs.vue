<template>
  <div class="breadcrumbs col-span--all sub upper mb-40 pt-60 color--gray-tertiary container">
    <span
      class="breadcrumbs__previous"
      v-for="(item, index) in previous"
      :key="index"
    >
      <g-link :to="item.link">{{ item.copy }}</g-link><span> / </span>
    </span>
    <span class="breadcrumbs__current cursor--arrow">{{ current }}</span>
  </div>
</template>

<script>
export default {
  props: {
    previous: Array,
    current: String
  }
}
</script>

<style lang="scss">
.breadcrumbs {

  &__previous {
    color: var(--color--gray);

    a {

      &:hover {
        color: var(--color--gray-tertiary);
      }
    }
  }
}
</style>
<template>
  <div class="project-details__navigation flex jc-sb color--gray-tertiary pt-100">
    <g-link
      class="sub upper"
      :to="'/projects/' + prev.slug.current"
      @click.native="$scrollToTop"
    >&lt; {{ prev.title }}</g-link>
    <g-link
      class="sub upper"
      :to="'/projects/' + next.slug.current"
      @click.native="$scrollToTop"
    >{{ next.title }} &gt;</g-link>
  </div>
</template>

<script>
export default {
  props: {
    prev: Object,
    next: Object
  },
}
</script>

<style lang="scss">
.project-details__navigation {
  grid-column: span 12;

  a {
    text-decoration: none;
  }
}
</style>
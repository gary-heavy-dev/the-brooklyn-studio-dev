<template>
  <div class="project-details__navigation flex jc-sb color--gray-tertiary pt-100">
    <g-link
      v-if="prev"
      class="sub upper"
      :to="'/projects/' + prev.slug.current"
      @click.native="$jumpToTop"
    >&lt; {{ prev.title }}</g-link>
    <g-link
      v-if="next"
      class="sub upper"
      :to="'/projects/' + next.slug.current"
      @click.native="$jumpToTop"
    >{{ next.title }} &gt;</g-link>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: function () {
        return {
          title: 'Prev',
          slug: {
            current: '#'
          }
        }
      }
    },
    next: {
      type: Object,
      default: function () {
        return {
          title: 'Next',
          slug: {
            current: '#'
          }
        }
      }
    }
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
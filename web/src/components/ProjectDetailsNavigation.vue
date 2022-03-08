<template>
  <div class="project-details__navigation flex jc-sb color--gray-tertiary pt-100">
    <g-link
      v-if="prev"
      class="sub upper"
      :to="'/projects/' + prev.slug.current"
      @click.native="$jumpToTop"
    ><span>&lt; </span><span v-html="prev.title"></span></g-link>
    <g-link
      v-if="next"
      class="sub upper next"
      :to="'/projects/' + next.slug.current"
      @click.native="$jumpToTop"
    ><span v-html="next.title"></span><span> &gt;</span></g-link>
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
  align-items: flex-start;

  a {
    text-decoration: none;

    @include desktop-down {
      width: min-instrinsic;
      width: min-content;
      -ms-grid-columns: min-content;
      display: flex;
      flex-direction: column;

      &.next {
        flex-direction: column-reverse;
        text-align: right;
      }
    }
  }
}
</style>
<template>
  <div class="career-accordion-group">
    <Accordion
      v-for="(post, index) in posts"
      :key="index"
      :accordion="post"
    />
    <!-- <Accordion
      v-for="(post, index) in posts"
      :key="index"
      :accordion="post"
      :class="{'active': post.title === selected || (post.slug && post.slug.current === selected && isHash)}"
      @toggle-selected="toggleSelected"
    /> -->
  </div>
</template>

<script>
import Accordion from '~/components/Accordion'

export default {
  components: {
    Accordion 
  },
  data() {
    return {
      selected: undefined
    }
  },
  props: {
    posts: Array
  },
  // methods: {
  //   toggleSelected(accordion) {
  //     if (this.selected == accordion.title) {
  //       this.selected = undefined
  //     } else {
  //       this.selected = accordion.title
  //     }
  //   }
  // }
}
</script>
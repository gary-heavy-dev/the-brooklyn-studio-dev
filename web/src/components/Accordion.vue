<template>
  <div
    :id="accordion.slug.current"
    class="accordion"
  >
    <div class="accordion__heading">
      <h2
        v-if="accordion.title"
        class="h4 upper mb-40 flex"
        @click="toggleAccordion(accordion)"
      >
        <span class="pb-20">{{ accordion.title }}</span>
      </h2>
      <AccordionStatus />
    </div>
    <AccordionContent :content="accordion" />
  </div>
</template>

<script>
import AccordionStatus from '~/components/AccordionStatus'
import AccordionContent from '~/components/AccordionContent'

export default {
  components: {
    AccordionStatus,
    AccordionContent
  },
  props: {
    accordion: Object
  },
  methods: {
    toggleAccordion (accordion) {
      this.$emit('toggle-selected', accordion)
    }
  }
}
</script>

<template>
  <div
    :id="accordion.slug.current"
    :class="['accordion', {'active': isExpanded }]"
  >
    <div
      class="accordion__heading"
      @click="toggleAccordion"
    >
      <h2
        v-if="accordion.title"
        class="h4 upper mb-40 flex"
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
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleAccordion() {
      this.isExpanded = !this.isExpanded
    }
    // toggleAccordion (accordion) {
    //   this.$emit('toggle-selected', accordion)
    // }
  }
}
</script>

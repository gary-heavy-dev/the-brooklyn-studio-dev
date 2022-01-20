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
        class="h4 upper"
      >
        <span>{{ accordion.title }}</span>
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

<style lang="scss">
.accordion {

  &__heading {
    cursor: pointer;
    position: relative;
  }

  &-content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;

    > :first-child {
      padding-top: 50px;

      @include desktop {
        padding-top: 58px;
      }
    }
  }
}

.accordion {
  margin-bottom: 54px;

  @include desktop {
    margin-bottom: 72px;
  }

  &.active {

    .accordion-content {
      max-height: 500vh;
      opacity: 1;
    }
  }

  &__heading {
    padding-right: 40px;

    h2 {
      width: fit-content;

      span {
        padding-bottom: 15px;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0px;
          border-bottom: 1px solid var(--color--gray-tertiary);
        }
      }
    }
  }
}
</style>

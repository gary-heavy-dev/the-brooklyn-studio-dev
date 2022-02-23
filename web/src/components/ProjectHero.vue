<template>
  <div
    class="project-hero overlay pos-rel o-h mb-100"
  >
    <div class="project-hero__title mt-hh pos-abs z-1 w-100 flex jc-c">
      <h1
        v-if="displayTitle && displayTitle.displayTitleStatus"
        class="h1 color--white container"
      >
        {{ displayTitle.lineOne }}<br>
        {{ displayTitle.lineTwo }}
      </h1>
      <h1
        v-else
        class="h1 color--white container"
      >
        {{ heading }}
      </h1>
    </div>
    <BaseImage
      v-if="image"
      class="project-hero-mobile"
      :lazy="true"
      :src="image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentKey: 0
    }
  },
  props: {
    displayTitle: Object,
    heading: String,
    image: Object
  },
  methods: {
    forceRerender() {
      this.componentKey += 1
    }
  },
  watch: {
    $route (to, from) {
      this.forceRerender
    }
  }
}
</script>

<style lang="scss">
.project-hero {

  @include desktop {
    height: calc(100vh - var(--header-height));
  }

  @include desktop-down {
    margin-bottom: 40px;
  }
}
</style>
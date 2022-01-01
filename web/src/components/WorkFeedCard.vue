<template>
  <g-link
    :to="'/projects/' + project.slug.current"
    class="work-feed__card mb-lg"
  >
    <BaseImage
      v-if="project.image"
      :src="project.image"
      :lazy="true"
      :sizes="sizes"
      :x="378"
      :y="302"
    />
    <h3>{{ project.title }}</h3>
  </g-link>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 311,
        laptop: 410,
        desktop: 377,
        hd: 511,
        fourK: 1022 // by 1332
      }
    }
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
</style>

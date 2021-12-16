<template>
  <g-link
    :to="'/projects/' + project.slug.current"
    class="work-feed__card mb-lg"
  >
    <BaseImage
      v-if="project.image"
      :src="project.image"
      :x="378"
      :y="302"
    />
    <h3>{{ project.title }}</h3>
  </g-link>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
</style>

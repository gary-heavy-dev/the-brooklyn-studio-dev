<template>
  <g-link
    :to="'/projects/' + project.project.slug.current"
    class="work-feed-card mb-100 color--gray-tertiary"
  >
    <BaseImage
      v-if="project.altThumbnail"
      :src="project.altThumbnail"
      :lazy="true"
      :sizes="sizes"
      :x="378"
      :y="302"
      class="mb-30"
    />
    <BaseImage
      v-else-if="project.project.image"
      :src="project.project.image"
      :lazy="true"
      :sizes="sizes"
      :x="378"
      :y="302"
      class="mb-30"
    />
    <h3>{{ project.project.title }}</h3>
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
        hd: 613,
        fourK: 1226 // by 1332
      }
    }
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss">
.work-feed-card {
  text-decoration: none;
  display: block;

  @include desktop-down {
    margin-bottom: 40px;
  }
}
</style>

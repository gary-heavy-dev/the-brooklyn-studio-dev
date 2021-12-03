<template>
  <div class="project">
    <ProjectHero
      :displayTitle="content.displayTitle"
      :heading="content.title"
      :image="content.image"
    />
  </div>
</template>

<script>
import ProjectHero from '~/components/ProjectHero'

export default {
  components: {
    ProjectHero
  },
  props: {
    content: Object
  }
}
</script>
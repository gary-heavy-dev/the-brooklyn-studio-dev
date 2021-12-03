<template>
  <div class="project">
    <ProjectHero
      :displayTitle="content.displayTitle"
      :heading="content.title"
      :image="content.image"
    />
    <FlexibleContent :content="content.flexibleContent" />
  </div>
</template>

<script>
import ProjectHero from '~/components/ProjectHero'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    ProjectHero,
    FlexibleContent
  },
  props: {
    content: Object
  }
}
</script>
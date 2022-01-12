<template>
  <div class="project">
    <ProjectHero
      :displayTitle="content.displayTitle"
      :heading="content.title"
      :image="content.image"
    />
    <ProjectLightbox :content="content" />
    <FlexibleContent :content="content.flexibleContent" />
    <ProjectDetails :content="content" />
  </div>
</template>

<script>
import ProjectHero from '~/components/ProjectHero'
import ProjectLightbox from '~/components/ProjectLightbox'
import FlexibleContent from '~/components/FlexibleContent'
import ProjectDetails from '~/components/ProjectDetails'

export default {
  components: {
    ProjectHero,
    ProjectLightbox,
    FlexibleContent,
    ProjectDetails
  },
  props: {
    content: Object
  }
}
</script>
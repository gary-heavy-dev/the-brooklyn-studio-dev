<template>
  <div class="project">
    <ProjectHero
      :displayTitle="content.displayTitle"
      :heading="content.title"
      :image="content.image"
      :hideHero="content.hideHeroImage"
      :mobileImage="content.mobileHeroImage"
    />
    <FlexibleContent :content="content.flexibleContent" />
    <ProjectDetails :content="content" :prev="prev" :next="next" />
    <ProjectLightbox :content="content" />
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
    content: Object,
    prev: Object,
    next: Object
  }
}
</script>

<style lang="scss">
.project {
  .flexible-content {
    .base-image {
      cursor: pointer;
    }
  }
}
</style>

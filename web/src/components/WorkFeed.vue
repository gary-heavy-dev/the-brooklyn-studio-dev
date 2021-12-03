<template>
  <div class="work-feed">
    <WorkFeedCarousel
      :heading="content.title"
      :image="content.heroImage"
    />
    <div class="work-feed__grid grid grid--3-desktop">
      <WorkFeedCard
        v-for="(project, index) in content.projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import WorkFeedCard from '~/components/WorkFeedCard'
import WorkFeedCarousel from '~/components/WorkFeedCarousel'

export default {
  components: {
    WorkFeedCard,
    WorkFeedCarousel
  },
  props: {
    content: Object
  }
}
</script>
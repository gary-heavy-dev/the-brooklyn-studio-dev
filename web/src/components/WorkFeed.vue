<template>
  <div class="work-feed">
    <WorkFeedCarousel
      :heading="content.title"
      :image="content.heroImage"
    />
    <div class="work-feed__grid flex jc-c">
      <div class="grid grid--3-desktop container">
        <WorkFeedCard
          v-for="(project, index) in content.projects"
          :key="index"
          :project="project"
        />
      </div>
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
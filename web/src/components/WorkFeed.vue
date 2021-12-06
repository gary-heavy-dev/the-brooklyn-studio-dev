<template>
  <div class="work-feed">
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

export default {
  components: {
    WorkFeedCard
  },
  props: {
    content: Object
  }
}
</script>
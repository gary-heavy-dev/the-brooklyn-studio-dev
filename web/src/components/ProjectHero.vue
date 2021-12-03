<template>
  <div class="project-hero h-100vh">
    <div class="project-hero__title container abs z-1">
      <h1
        v-if="displayTitle && displayTitle.displayTitleStatus"
        class="h1 color--white"
      >
        <div>{{ displayTitle.lineOne }}</div>
        <div>{{ displayTitle.lineTwo }}</div>
      </h1>
      <h1
        v-else
        class="h1 color--white"
      >{{ heading }}</h1>
    </div>
    <g-image
      class="img-cover"
      v-bind="$gImageMap(image, $static.metadata.sanityOptions, '1')"
    />
  </div>
</template>

<script>
export default {
  props: {
    displayTitle: Object,
    heading: String,
    image: Object
  }
}
</script>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>

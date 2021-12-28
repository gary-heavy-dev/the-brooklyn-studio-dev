<template>
  <div class="project-hero h-100vh pos-rel o-h mb-lg">
    <div class="project-hero__title mt-hh pos-abs z-1 w-100 flex jc-c">
      <h1
        v-if="displayTitle && displayTitle.displayTitleStatus"
        class="h1 color--white container"
      >
        <div>{{ displayTitle.lineOne }}</div>
        <div>{{ displayTitle.lineTwo }}</div>
      </h1>
      <h1
        v-else
        class="h1 color--white"
      >{{ heading }}</h1>
    </div>
    <BaseImage
      v-if="image"
      :lazy="true"
      :src="image"
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
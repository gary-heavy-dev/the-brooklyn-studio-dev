<template>
  <g-link
    :to="'/projects/' + project.project.slug.current"
    class="work-feed-card mb-100 color--gray-tertiary"
    :style="cardStagger"
  >
    <BaseImage
      v-if="project.altThumbnail"
      :src="project.altThumbnail"
      :lazy="true"
      :sizes="sizes"
      :x="378"
      :y="302"
      class="mb-30"
      :caption="project.altThumbnail.caption"
      :captionStyle="project.altThumbnail.captionStyle"
    />
    <BaseImage
      v-else-if="project.project.image"
      :src="project.project.image"
      :lazy="true"
      :sizes="sizes"
      :x="378"
      :y="302"
      class="mb-30"
      :caption="project.project.image.caption"
      :captionStyle="project.project.image.captionStyle"
    />
    <h3 v-html="project.project.title"></h3>
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
  computed: {
    cardStagger() {
      return {
        'transition-delay': 0.15 * this.cardNumber + 's'
      }
    }
  },
  props: {
    project: Object,
    cardNumber: Number
  }
}
</script>

<style lang="scss">
.loaded.filtering {

  .work-feed-card,
  .work-feed-filter {
    opacity: 0;
  }

  .work-feed-card {
    transform: translateY(20px);
  }

  .work-feed-filter {
    transform: translateY(7px);
  }
}

.work-feed-card,
.work-feed-filter {
  opacity: 1;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateY(0px);
}

.work-feed-card {
  text-decoration: none;
  display: block;

  @include desktop-down {
    margin-bottom: 40px;
  }
}
</style>

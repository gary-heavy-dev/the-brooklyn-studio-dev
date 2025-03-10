<template>
  <component
    :is="project.project.displayTitle?.inactiveLink ? 'div' : 'g-link'"
    :to="
      !project.project.displayTitle?.inactiveLink
        ? '/projects/' + project.project.slug.current
        : null
    "
    class="work-feed-card mb-100 color--gray-tertiary"
    :style="cardStagger"
  >
    <div class="grid__card">
      <div class="image-wrapper">
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
        <div v-if="project.project.displayTitle?.inactiveLink" class="overlay"></div>
        <div v-if="project.project.displayTitle?.overlayText" class="overlay-text">
          {{ project.project.displayTitle.overlayText }}
        </div>
      </div>
      <h3 v-html="project.project.title"></h3>
    </div>
  </component>
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

.image-wrapper {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.4);
}

.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}
</style>

<template>
  <component
    :is="isInactiveLink ? 'div' : 'g-link'"
    :to="projectLink"
    class="work-feed-card mb-100 color--gray-tertiary"
    :style="cardStagger"
  >
    <div class="grid__card">
      <div class="work-feed-card__image-wrapper">
        <BaseImage
          v-if="project && project.altThumbnail"
          :src="project.altThumbnail"
          :lazy="true"
          :sizes="sizes"
          :x="300"
          :y="200"
          class="mb-30"
          :caption="project.altThumbnail.caption"
          :captionStyle="project.altThumbnail.captionStyle"
        />
        <BaseImage
          v-else-if="project && project.image"
          :src="project.image"
          :lazy="true"
          :sizes="sizes"
          :x="1320"
          :y="880"
          class="mb-30"
          :caption="project.image.caption"
          :captionStyle="project.image.captionStyle"
        />
        <div v-if="isInactiveLink" class="work-feed-card__overlay"></div>
        <div v-if="project && project.displayTitle && project.displayTitle.overlayText" class="work-feed-card__overlay-text">
          {{ project.displayTitle.overlayText }}
        </div>
      </div>
      <h3 v-if="project && project.title" v-html="project.title"></h3>
    </div>
  </component>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        mobile: 500,
        tablet: 414,
        laptop: 545,
        desktop: 501,
        hd: 877,
        fourK: 1630
      }
    }
  },
  computed: {
    cardStagger() {
      return {
        'transition-delay': 0.15 * this.cardNumber + 's'
      }
    },
    isInactiveLink() {
      return this.project && this.project.displayTitle && this.project.displayTitle.inactiveLink
    },
    projectLink() {
      return (
        this.project &&
        !this.isInactiveLink &&
        this.project.slug &&
        this.project.slug.current
      )
        ? '/projects/' + this.project.slug.current
        : null
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

.work-feed-card__image-wrapper {
  position: relative;
}

.work-feed-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.4);
}

.work-feed-card__overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1.5rem;
}
</style>

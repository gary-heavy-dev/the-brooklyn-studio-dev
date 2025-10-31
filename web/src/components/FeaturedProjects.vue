<template>
  <section
    class="featured-projects background--gray-light"
    v-if="projects.length"
  >
    <div class="container featured-projects__container">
      <h3 class="featured-projects__heading h4 text-center" v-if="heading" v-html="heading"></h3>
      <div class="featured-projects__grid w-100">
        <component
          v-for="(project, index) in projects"
          :key="project._id || index"
          :is="project.displayTitle?.inactiveLink ? 'div' : 'g-link'"
          :to="!project.displayTitle?.inactiveLink ? '/projects/' + project.slug.current : null"
          class="featured-projects__grid-card color--gray-tertiary"
          :style="getStaggerStyle(index)"
        >
          <div class="grid__card">
            <div class="featured-projects__grid-card-image-wrapper mb-30">
              <BaseImage
                v-if="project.altThumbnail?.asset"
                :src="project.altThumbnail"
                :lazy="true"
                :sizes="sizes"
                :caption="project.altThumbnail.caption"
                :captionStyle="project.altThumbnail.captionStyle"
              />

              <BaseImage
                v-else-if="project.image?.asset"
                :src="project.image"
                :lazy="true"
                :sizes="sizes"
                :caption="project.image.caption"
                :captionStyle="project.image.captionStyle"
              />

              <div
                v-if="project.displayTitle?.inactiveLink"
                class="featured-projects__grid-card-overlay"
              ></div>
              <div
                v-if="project.displayTitle?.overlayText"
                class="featured-projects__grid-card-overlay-text"
              >
                {{ project.displayTitle.overlayText }}
              </div>
            </div>
            <h3 v-html="project.title"></h3>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from '~/components/BaseImage'

export default {
  name: 'FeaturedProjects',
  components: { BaseImage },
  props: {
    content: Object
  },
  computed: {
    heading() { return this.content?.heading || '' },
    projects() { return this.content?.projects || [] }
  },
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 311,
        laptop: 410,
        desktop: 377,
        hd: 613,
        fourK: 1226
      }
    }
  },
  methods: {
    getStaggerStyle(index) { return { 'transition-delay': 0.15 * index + 's' } }
  }
}
</script>

<style lang="scss">
  .featured-projects {
    padding-top: 40px;
    padding-bottom: 40px;

    &__container {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }

    &__heading {
      max-width: 920px;
      margin: 0 auto;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 80px 36px;

      @include tablet {
        grid-template-columns: repeat(2, 1fr);
        gap: 90px 36px;
      }

      @include laptop {
        gap: 100px 36px;
      }
    }

    &__grid-card {
      &-image-wrapper {
        position: relative;
      }

      &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(128, 128, 128, 0.4);
      }

      &-overlay-text {
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

      .base-image__inner {
        aspect-ratio: 3/2;
      }
    }
  }
</style>

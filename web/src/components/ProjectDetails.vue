<template>
  <section id="projectInfo" class="project-details background--gray-secondary color--navy-light">
    <div class="project-details__inner container">
      <div class="project-details__intro">
        <p
          v-if="content.detailsIntro"
          class="project-details__intro-txt"
          v-html="content.detailsIntro"
        ></p>
        <BaseBlockContent v-if="content._rawDetails" class="mb-30" :blocks="content._rawDetails" />
        <div class="project-details__intro-images gap-20" v-if="content.detailsGallery">
          <div
            v-for="(image, index) in content.detailsGallery"
            :key="index"
            :class="index % 2 === 0 ? 'small' : 'large'"
          >
            <BaseImage
              v-if="image"
              :src="image"
              :lazy="true"
              :sizes="sizes"
              :caption="image.caption"
              :captionStyle="image.captionStyle"
            />
          </div>
        </div>
      </div>

      <div class="project-details__info">
        <div class="project-details__info-item">
          <div v-for="(stat, index) in content.detailsBuildingInfo" :key="index">
            <h4
              class="project-details__info-item-sub sub upper mb-15"
              :class="[
                ['press', 'awards'].includes(normalizedHeading(stat.heading))
                  ? 'color--navy-light bold'
                  : 'color--gray-tertiary',
                normalizedHeading(stat.heading) === 'press' ? 'is-press' : ''
              ]"
            >
              {{ stat.heading }}
            </h4>

            <div v-if="stat.link && stat.newTab" class="xsmall project-details__info-item-desc">
              <a
                class="project-details--building-info-link"
                :href="stat.link"
                target="_blank"
                rel="noopener"
                >{{ stat.text }}</a
              >
            </div>
            <div
              v-else-if="stat.link && !stat.newTab"
              class="xsmall project-details__info-item-desc"
            >
              <a class="project-details--building-info-link" :href="stat.link">
                {{ stat.text }}
              </a>
            </div>
            <div v-else class="xsmall project-details__info-item-desc">{{ stat.text }}</div>
          </div>
        </div>

        <div class="project-details__info-item">
          <div v-for="(credit, index) in content.detailsCredits" :key="index">
            <h4 class="project-details__info-item-sub sub upper color--gray-tertiary">
              {{ credit.heading }}
            </h4>
            <div class="xsmall project-details__info-item-desc">{{ credit.text }}</div>
          </div>
        </div>
      </div>

      <a
        href="#projectHeading"
        class="project-details__scroll-top upper button"
        @click.prevent="jumpToProjectHeading"
        >Back To Images</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  },
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 660,
        laptop: 855,
        desktop: 489,
        hd: 656,
        fourK: 1313
      }
    }
  },
  methods: {
    jumpToProjectHeading() {
      const el = document.getElementById('projectHeading')
      if (!el) return
      el.scrollIntoView({ behavior: 'auto' })
    },
    normalizedHeading(heading) {
      if (!heading || typeof heading !== 'string') return ''
      return heading.trim().toLowerCase()
    }
  }
}
</script>

<style lang="scss">
.project-details {
  padding-top: 40px;
  padding-bottom: 40px;
  scroll-margin-top: 50px;

  @include desktop {
    scroll-margin-top: 0;
  }

  &__inner {
    gap: 40px;
    display: grid;
    grid-template-columns: 1fr;

    @include desktop {
      gap: 50px;
      grid-template-columns: 1fr 1fr;
    }
  }

  &__info {
    gap: 40px;
    display: grid;
    grid-template-columns: 1fr;

    // Set to 2 columns on desktop
    @include desktop {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__intro {
    max-width: 600px;
  }

  &__intro-txt {
    margin-bottom: 40px;
  }

  &__intro-images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .small {
      width: 40%;
    }

    .large {
      width: calc(60% - 20px);
    }

    img {
      max-height: 180px;

      @include laptop {
        max-height: 200px;
      }
    }
  }

  .bold {
    font-weight: 500;
  }

  .is-press {
    margin-top: 50px;
  }

  .project-details__scroll-top {
    color: var(--color--navy-light);
  }

  &__info-item-sub {
    margin-bottom: 2.5px;
  }

  &__info-item-desc {
    margin-bottom: 15px;
  }
}
</style>

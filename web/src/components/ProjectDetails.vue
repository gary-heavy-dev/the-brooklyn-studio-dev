<template>
  <section class="project-details background--gray-secondary">
    <div class="project-details__inner container">
      <div class="project-details__intro">
        <p class="project-details__intro-txt" v-if="content.detailsIntro">{{ content.detailsIntro }}</p>
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
          <h3 class="color--navy mb-15">Building Information</h3>
          <div
            v-for="(stat, index) in content.detailsBuildingInfo"
            :key="index"
          >
            <h4 class="project-details__info-item-sub sub upper color--gray mb-15">{{ stat.heading }}</h4>
            <div v-if="stat.link && stat.newTab" class="xsmall project-details__info-item-desc">
              <a class="project-details--building-info-link" v-bind:href="stat.link" target="_blank" rel="noopener">{{ stat.text }}</a>
            </div>
            <div v-else-if="stat.link && !stat.newTab" class="xsmall project-details__info-item-desc">
              <a class="project-details--building-info-link" v-bind:href="stat.link">{{ stat.text }}</a>
            </div>
            <div v-else class="xsmall project-details__info-item-desc">{{ stat.text }}</div>
          </div>
        </div>
        <div class="project-details__info-item">
          <h3 class="color--navy mb-15">Credits</h3>
          <div
            v-for="(credit, index) in content.detailsCredits"
            :key="index"
          >
            <h4 class="project-details__info-item-sub sub upper color--gray">{{ credit.heading }}</h4>
            <div class="xsmall project-details__info-item-desc">{{ credit.text }}</div>
          </div>
        </div>
      </div>
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
  }
}
</script>

<style lang="scss">
.project-details {
  padding-top: 40px;
  padding-bottom: 40px;

  &__inner {
    gap: 40px;

    @include laptop {
      gap: 100px;
    }
  }

  &__info {
    gap: 40px;
  }

  &__inner,
  &__info {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @include laptop {
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

  &__info-item-sub,
  &__info-item-desc {
    margin-bottom: 5px;
  }
}
</style>

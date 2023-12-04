<template>
  <section class="project-details flex fd-c background--gray-secondary p-100">
    <div class="project-details__inner grid grid--12-desktop container">
      <div class="project-details__copy col-span--7">
        <div class="project-details__intro pt-20 mb-60">
          <p v-if="content.detailsIntro">{{ content.detailsIntro }}</p>
        </div>
        <div class="project-details__info grid grid--7-desktop color--gray-tertiary">
          <div class="col-span--3">
            <h3 class="mb-20">Building Information</h3>
            <div
              v-for="(stat, index) in content.detailsBuildingInfo"
              :key="index"
            >
              <h4 class="sub upper color--navy-light">{{ stat.heading }}</h4>
              <div v-if="stat.link && stat.newTab" class="xsmall mb-20">
                <a class="project-details--building-info-link" v-bind:href="stat.link" target="_blank" rel="noopener">{{ stat.text }}</a>
              </div>
              <div v-else-if="stat.link && !stat.newTab" class="xsmall mb-20">
                <a class="project-details--building-info-link" v-bind:href="stat.link">{{ stat.text }}</a>
              </div>
              <div v-else class="xsmall mb-20">{{ stat.text }}</div>
            </div>
          </div>
          <div class="col-span--4">
            <h3 class="mb-20">Credits</h3>
            <div
              v-for="(credit, index) in content.detailsCredits"
              :key="index"
            >
              <h4 class="sub upper color--navy-light">{{ credit.heading }}</h4>
              <div class="xsmall mb-20">{{ credit.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-details__gallery-wrapper col-span--5">
        <div
          class="project-details__gallery-inner text-center pos-rel"
          v-view="startSwiper"
        >
          <swiper
            class="project-details__gallery"
            :options="swiperOption"
            v-view="$iAmRevealed"
            ref="projectDetailsSwiper"
          >
            <swiper-slide
              v-for="(image, index) in content.detailsGallery"
              :key="index"
            >
              <BaseImage
                v-if="image"
                :src="image"
                :lazy="true"
                :sizes="sizes"
                :x="2"
                :y="3"
                :caption="image.caption"
                :captionStyle="image.captionStyle"
              />
            </swiper-slide>
          </swiper>
          <div
            v-if="content.detailsGallery.length > 1"
            class="swiper__pagination"
          ></div>
        </div>
      </div>
      <ProjectDetailsNavigation
        :prev="prev"
        :next="next"
      />
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ProjectDetailsNavigation from '~/components/ProjectDetailsNavigation'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectDetailsNavigation
  },
  props: {
    content: Object,
    prev: Object,
    next: Object
  },
  computed: {
    swiper() {
      return this.$refs.projectDetailsSwiper.$swiper
    }
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: this.swiperEnabled(),
        speed: 300,
        threshold: 10,
        pagination: {
          el: '.swiper__pagination',
          clickable: true
        }
      },
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
    startSwiper(e) {
      if (e.percentInView > 0) {
        this.swiper.autoplay.start()
      }
    },
    swiperEnabled() {
      this.content.detailsGallery.length > 1 ? true : false
    }
  }
}
</script>

<style lang="scss">
.project-details {

  @include desktop-down {
    flex-direction: column;
    padding-top: 40px;
  }

  &__intro {

    @include desktop {
      padding-right: 80px;
    }
  }

  &__info {

    h3 {

      @include desktop-down {
        font-size: 20px;
        line-height: 32px;
      }
    }

    > * {

      @include desktop {
        padding-right: 50px;
      }

      @include desktop-down {
        margin-bottom: 40px;
      }
    }
  }
}
</style>

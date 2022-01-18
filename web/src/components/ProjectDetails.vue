<template>
  <section class="project-details flex background--gray-secondary p-100">
    <div class="project-details__inner grid grid--12-desktop container">
      <div class="project-details__copy col-span--6">
        <div class="project-details__intro pt-20 mb-60">
          <p v-if="content.detailsIntro">{{ content.detailsIntro }}</p>
        </div>
        <div class="project-details__info grid grid--6-desktop color--gray-tertiary">
          <div class="col-span--3">
            <h3 class="mb-20">Building Information</h3>
            <div
              v-for="(stat, index) in content.detailsBuildingInfo"
              :key="index"
            >
              <h4 class="sub upper color--navy">{{ stat.heading }}</h4>
              <div class="xsmall mb-20">{{ stat.text }}</div>
            </div>
          </div>
          <div class="col-span--3">
            <h3 class="mb-20">Credits</h3>
            <div
              v-for="(credit, index) in content.detailsCredits"
              :key="index"
            >
              <h4 class="sub upper color--navy">{{ credit.heading }}</h4>
              <div class="xsmall mb-20">{{ credit.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-details__gallery-wrapper col-span--6">
        <div class="project-details__gallery-inner text-center pos-rel">
          <swiper
            class="project-details__gallery"
            :options="swiperOption"
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
                :x="390"
                :y="496"
              />
            </swiper-slide>
          </swiper>
          <div class="swiper__pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    content: Object
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        pagination: {
          el: '.swiper__pagination',
          clickable: true
        },
        autoplay: {
          delay: 6000
        }
      },
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 591,
        hd: 792,
        fourK: 1584
      }
    }
  }
}
</script>

<style lang="scss">
.project-details {

  @include desktop-down {
    flex-direction: column;
  }

  &__intro {
    padding-right: 80px;
  }

  &__info {

    > * {
      padding-right: 50px;
    }
  }
}
</style>

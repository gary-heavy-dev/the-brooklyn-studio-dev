<template>
  <div class="work-feed">
    <swiper
      class="swiper"
      :options="swiperOption"
      :auto-update="true"
      :auto-destroy="false"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
    >
      <swiper-slide
        :data-hash="$static.res.slug.current"
        class="o-h"
      >
        <WorkFeedSlide :content="$static.res" />
      </swiper-slide>
      <swiper-slide
        :data-hash="$static.ad.slug.current"
        class="o-h"
      >
        <WorkFeedSlide :content="$static.ad" />
      </swiper-slide>
      <swiper-slide
        :data-hash="$static.int.slug.current"
        class="o-h"
      >
        <WorkFeedSlide :content="$static.int" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <SliderArrow />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <SliderArrow />
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import WorkFeedSlide from '~/components/WorkFeedSlide'
import SliderArrow from '~/components/SliderArrow'

export default {
  components: {
    Swiper,
    SwiperSlide,
    WorkFeedSlide,
    SliderArrow 
  },
  props: {
    heading: String,
    image: Object
  },
  computed: {
    swiper() {
        return this.$refs.swiper.swiper;
    }
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        hashNavigation: true,
        slidesPerView: 1.121,
        spaceBetween: 2,
        centeredSlides: true,
        loop: true,
        speed: 500,
        threshold: 10
      }
    }
  }
}
</script>

<static-query>
{
  res: sanityResidentialArchitecture(id: "a81592fc-d8ae-4c15-8315-9005a57b2d75") {
    title
    slug {
      current
    }
    heroImage {
      asset {
        url
        metadata {
          lqip
        }
      }
      alt
    }
    projects {
      title
      slug {
        current
      }
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
    }
    projectCategories {
      title
      slug {
        current
      }
    }
  }
  int: sanityInteriorDesign(id: "ee8279ca-9f8d-47c5-926a-c88d46d45d5b") {
    title
    slug {
      current
    }
    heroImage {
      asset {
        url
        metadata {
          lqip
        }
      }
      alt
    }
    projects {
      title
      slug {
        current
      }
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
    }
  }
  ad: sanityAdaptiveReuse(id: "35a99ecb-fd40-41ae-a0e0-8ec5527ebf44") {
    title
    slug {
      current
    }
    heroImage {
      asset {
        url
        metadata {
          lqip
        }
      }
      alt
    }
    projects {
      title
      slug {
        current
      }
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
    }
  }
}
</static-query>
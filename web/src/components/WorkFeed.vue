<template>
  <div class="work-feed">
    <swiper
      class="swiper"
      :options="swiperOption"
      :auto-update="true"
      :auto-destroy="false"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
      @slideChange="updateCategory"
      ref="workFeedSwiper"
    >
      <swiper-slide
        :data-hash="$static.res.slug.current"
        class="o-h"
      >
        <WorkFeedSlide :content="$static.res" />
      </swiper-slide>
      <swiper-slide
        :data-hash="$static.int.slug.current"
        class="o-h"
      >
        <WorkFeedSlide :content="$static.int" />
      </swiper-slide>
      <swiper-slide
        :data-hash="$static.ad.slug.current"
        class="o-h"
      >
        <WorkFeedSlide :content="$static.ad" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <SliderArrow />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <SliderArrow />
      </div>
    </swiper>
    <!-- <WorkFeedGrid
      v-if="currentFeed"
      :content="currentFeed"
    /> -->
    <WorkFeedGrid
      v-show="currentCategory == 'residential-architecture'"
      :content="$static.res"
    />
    <WorkFeedGrid
      v-show="currentCategory == 'interior-design'"
      :content="$static.int"
    />
    <WorkFeedGrid
      v-show="currentCategory == 'adaptive-reuse'"
      :content="$static.ad"
    />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import WorkFeedSlide from '~/components/WorkFeedSlide'
import WorkFeedGrid from '~/components/WorkFeedGrid'
import SliderArrow from '~/components/SliderArrow'
import eventHub from '~/utils/eventHub'

export default {
  components: {
    Swiper,
    SwiperSlide,
    WorkFeedSlide,
    WorkFeedGrid,
    SliderArrow 
  },
  props: {
    heading: String,
    image: Object
  },
  computed: {
    swiper() {
      return this.$refs.workFeedSwiper.$swiper;
    },
    // currentFeed() {
    //   const res = this.$static.res
    //   const int = this.$static.int
    //   const ad = this.$static.ad

    //   if (this.currentCategory == 'residential-architecture') {
    //     return res
    //   } else if (this.currentCategory == 'interior-design') {
    //     return int
    //   } else if (this.currentCategory == 'adaptive-reuse') {
    //     return ad
    //   }
    // }
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
        slidesPerView: 1,
        spaceBetween: 2,
        centeredSlides: true,
        loop: true,
        speed: 500,
        threshold: 10,
        breakpoints: {
          1025: {
            slidesPerView: 1.121,
          }
        }
      },
      currentCategory: ''
    }
  },
  methods: {
    updateCategory() {
      eventHub.$emit('filter-cleared')
      let slideIndex = this.swiper.realIndex + 2
      this.currentCategory = this.swiper.slides[slideIndex].dataset.hash
      console.log(this.currentCategory, this.swiper.realIndex)
    },
  },
  mounted() {
    let slideIndex = this.swiper.realIndex + 2
    this.currentCategory = this.swiper.slides[slideIndex].dataset.hash
  },
  watch: {
    $route (to) {
      if (to.hash == '#residential-architecture' && this.swiper.realIndex !== 0) {
        this.swiper.slideToLoop(0)
      } else if (to.hash == '#interior-design' && this.swiper.realIndex !== 1) {
        this.swiper.slideToLoop(1)
      } else if (to.hash == '#adaptive-reuse' && this.swiper.realIndex !== 2) {
        this.swiper.slideToLoop(2)
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
    projectReferences {
      altThumbnail {
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
      project {
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
        projectCategories {
          title
        }
      }
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
      projectCategories {
        title
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
    projectReferences {
      altThumbnail {
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
      project {
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
    projectReferences {
      altThumbnail {
        asset {
          url
          metadata {
            lqip
          }
        }
        alt
      }
      project {
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
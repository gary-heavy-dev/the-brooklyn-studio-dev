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
    <WorkFeedGrid
      data-category="residential-architecture"
      :content="$static.res"
      :prev="'Adaptive Reuse'"
      :next="'Interior Design'"
    />
    <WorkFeedGrid
      data-category="interior-design"
      :content="$static.int"
      :prev="'Residential Architecture'"
      :next="'Adaptive Reuse'"
    />
    <WorkFeedGrid
      data-category="adaptive-reuse"
      :content="$static.ad"
      :prev="'Interior Design'"
      :next="'Residential Architecture'"
    />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import WorkFeedSlide from '~/components/WorkFeedSlide'
import WorkFeedGrid from '~/components/WorkFeedGrid'
import SliderArrow from '~/components/SliderArrow'

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
      return this.$refs.workFeedSwiper.$swiper
    },
    grids() {
      const grids = document.getElementsByClassName('work-feed__grid')
      return grids
    },
    indexModifier() {
      if (typeof window !== 'undefined' && window.innerWidth >= 1025) {
        return 0
      } else {
        return 0
      }
    }
  },
  data() {
    return {
      swiperOption: {
        calculateHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        hashNavigation: true,
        slidesPerView: 1,
        spaceBetween: 2,
        loop: true,
        speed: 500,
        threshold: 10,
        breakpoints: {
          1025: {
            slidesPerView: 1.121,
            centeredSlides: true,
          }
        }
      },
      currentCategory: ''
    }
  },
  methods: {
    updateCategory() {
      let slideIndex = this.swiper.realIndex + this.indexModifier
      console.log('Updated! Slide index is:', slideIndex, 'Index mod is:', this.indexModifier)
      this.currentCategory = this.swiper.slides[slideIndex].dataset.hash
      let currentCat = this.currentCategory
      console.log('Updated! Current cat is:', currentCat)

      const gridWrapper = document.getElementsByClassName('work-feed__grid')

      Array.prototype.forEach.call(gridWrapper, function(grid) {
        if (grid.classList.contains('current-grid')) {
          grid.classList.add('filtering')
          setTimeout(() => grid.classList.remove('filtering'), 500)
          setTimeout(() => grid.classList.remove('current-grid'), 500)
        }
        setTimeout(() => {
          if (grid.dataset.category == currentCat) {
            grid.classList.add('filtering')
            grid.classList.add('current-grid')
            setTimeout(() => grid.classList.remove('filtering'), 250)
          }
        }, 500);
      })
    },
    resizeCategory() {
      // console.log('before', this.indexModifier)
      setTimeout(() => {
        this.updateCategory
        // console.log('after', this.indexModifier)
      }, 1000);
    }
  },
  mounted() {
    let slideIndex = this.swiper.realIndex + this.indexModifier
    // console.log('Mounted! Slide index is:', slideIndex, 'Index mod is:', this.indexModifier)

    const slides = Object.values(this.swiper.slides)
    // Array.prototype.forEach.call(slides, function(slide) {
    //   // console.log("slide:", slide.classList.contains('swiper-slide-active'))
    //   if (slide.attributes) {
    //     console.log("slide:", slide.classList.contains('swiper-slide-active'))
    //   }
    // })

    const activeSlide = slides.filter(slide => (slide.classList && slide.classList.contains('swiper-slide-active')))

    console.log('my cat:', activeSlide[0].dataset.hash)

    // this.currentCategory = this.swiper.slides[slideIndex].dataset.hash
    this.currentCategory = activeSlide[0].dataset.hash

    const currentCat = this.currentCategory
    console.log('Mounted! Current cat is:', currentCat)

    Array.prototype.forEach.call(this.grids, function(grid) {
      if (grid.dataset.category == currentCat) {
        grid.classList.add('current-grid')
        grid.classList.add('loaded')
      }
    })

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeCategory())
    }
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

<style lang="scss">
.work-feed {
  transition: height 0.25s linear;
}
</style>

<static-query>
{
  res: sanityResidentialArchitecture(id: "a81592fc-d8ae-4c15-8315-9005a57b2d75") {
    title
    slug {
      current
    }
    heroImage {
      caption
      captionStyle
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
        caption
        captionStyle
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
          caption
          captionStyle
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
      caption
      captionStyle
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
        caption
        captionStyle
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
          caption
          captionStyle
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
  ad: sanityAdaptiveReuse(id: "35a99ecb-fd40-41ae-a0e0-8ec5527ebf44") {
    title
    slug {
      current
    }
    heroImage {
      caption
      captionStyle
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
        caption
        captionStyle
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
          caption
          captionStyle
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
}
</static-query>
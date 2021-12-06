<template>
  <div class="work-feed__carousel mb-lg h-60vh o-h">
    <swiper
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide :data-hash="$static.res.slug.current">
        <div class="project-hero__title pos-abs z-1 w-100 flex jc-c">
          <h1 class="h1 container color--white">{{ $static.res.title }}</h1>
        </div>
        <BaseImage
          v-if="$static.res.heroImage"
          :src="$static.res.heroImage"
          :x="1284"
          :y="500"
          :columns="1"
          :alt="$static.res.heroImage.alt"
        />
      </swiper-slide>
      <swiper-slide data-hash="adaptive-reuse">
        <div class="project-hero__title pos-abs z-1 w-100 flex jc-c">
          <h1 class="h1 container color--white">{{ $static.ad.title }}</h1>
        </div>
        <BaseImage
          v-if="$static.ad.heroImage"
          :src="$static.ad.heroImage"
          :x="1284"
          :y="500"
          :columns="1"
          :alt="$static.ad.heroImage.alt"
        />
      </swiper-slide>
      <swiper-slide data-hash="interior-design">
        <div class="project-hero__title pos-abs z-1 w-100 flex jc-c">
          <h1 class="h1 container color--white">{{ $static.int.title }}</h1>
        </div>
        <BaseImage
          v-if="$static.int.heroImage"
          :src="$static.int.heroImage"
          :x="1284"
          :y="500"
          :columns="1"
          :alt="$static.int.heroImage.alt"
        />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
;
export default {
  components: {
    Swiper,
    SwiperSlide
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        hashNavigation: true,
        slidesPerView: 1.1,
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
  }
}
</static-query>
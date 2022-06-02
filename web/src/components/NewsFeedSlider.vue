<template>
  <section class="news-feed-slider w-100 flex background--navy p-100">
    <div class="news-feed-slider__inner">
      <div class="grid grid--12-desktop container">
        <div class="news-feed-slider__intro col-span--all">
          <h2 class="h2">News Feed</h2>
          <BaseBlockContent
            class="mw-readable--large"
            v-if="content._rawNewsFeedIntro"
            :blocks="content._rawNewsFeedIntro"
          />
          <g-link
            to="/news/feed" 
            class="upper button mt-60 mb-80"
          >Explore News Feed</g-link>
        </div>
      </div>
      <div class="swiper pos-rel">
        <div class="swiper-button-prev" slot="button-prev">
          <SliderArrow />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <SliderArrow />
        </div>
        <div class="w-100 flex">
          <div class="container flex">
            <swiper
              :options="swiperOption"
              class="swiper"
              :auto-update="true"
              :auto-destroy="false"
              :delete-instance-on-destroy="true"
              :cleanup-styles-on-destroy="true"
            >
              <swiper-slide
                v-for="(post, index) in shiftedNews"
                :key="index"
              >
                <NewsFeedCard :post="post.node" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NewsFeedCard from '~/components/NewsFeedCard'
import SliderArrow from '~/components/SliderArrow'

export default {
  props: {
    content: Object
  },
  components: {
    Swiper,
    SwiperSlide,
    NewsFeedCard,
    SliderArrow
  },
  computed: {
    shiftedNews() {
      function removeFirst(element, index) {
        return index > 0;
      }
      const arr = this.$static.news.edges.filter(removeFirst)
      return arr
    }
  },
  data() {
    return {
      newsArray: [],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 36,
        loop: true,
        speed: 500,
        threshold: 10,
        breakpoints: {
          1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 36,
          }
        }
      },
    }
  },
}
</script>

<style lang="scss">
.news-feed-slider {

  .swiper {

    .swiper-button-prev,
    .swiper-button-next {
      top: 33.425vw;

      @include desktop {
        top: 10.425vw;
      }
    }
  }

  .news-feed-card {
    margin-bottom: 0;
  }

  .grid__card {

    * {
      color: var(--color--white);
    }

    &::after {
      background: var(--color--white);
    }
  }
}
</style>

<static-query>
{
  news: allSanityNews(sortBy: "publishedAt") {
    edges {
      node {
        title
        slug {
          current
        }
        publishedAt (format: "M/D/YY")
        mainImage {
          asset {
            url
          }
          alt
        }
        flexibleContent {
          ... on SanitySimpleImagePair {
            imageLeft {
              asset {
                url
              }
              caption
              alt
            }
            imageRight {
              asset {
                url
              }
              caption
              alt
            }
          }
          ... on SanitySimpleImageWithText {
            image {
              asset {
                url
              }
              caption
              alt
            }
            imageLocation
            reverseMobile
            _rawText
          }
          ... on SanitySimplePortableTextWrapper {
            _rawExcerptPortableText
          }
          ... on SanitySimpleGallery {
            images {
              asset {
                url
              }
              caption
              alt
            }
          }
        }
      }
    }
  }
}
</static-query>
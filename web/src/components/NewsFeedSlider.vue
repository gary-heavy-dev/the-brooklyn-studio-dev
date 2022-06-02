<template>
  <section class="news-feed-slider w-100 flex background--navy p-100">
    <div class="news-feed-slider__inner grid grid--12-desktop container">
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
        <swiper
          :options="swiperOption"
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NewsFeedCard from '~/components/NewsFeedCard'

export default {
  props: {
    content: Object
  },
  components: {
    Swiper,
    SwiperSlide,
    NewsFeedCard
  },
  computed: {
    shiftedNews() {
      const newArray = this.$static.news.edges
      newArray.shift()
      console.log(newArray)
      return newArray 
    }
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 36,
        loop: true,
        speed: 500,
        threshold: 10,
      },
    }
  },
}
</script>

<style lang="scss">
.news-feed-slider {

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
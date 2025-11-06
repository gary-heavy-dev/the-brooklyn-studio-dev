<template>
  <section class="news-feed-carousel" v-if="news?.length">
    <div class="container">
      <div class="news-feed-carousel__heading">
        <h2 class="h4 upper news-feed-carousel__heading-title" v-if="title" v-html="title"></h2>
        <g-link
          v-if="content.cta_url"
          :to="content.cta_url"
          class="h4 upper news-feed-carousel__heading-cta"
        >
          {{ content.cta_label }}
        </g-link>
      </div>

      <swiper
        :options="swiperOptions"
        class="swiper news-feed-carousel__swiper"
      >
        <swiper-slide v-for="(post, index) in news" :key="index">
          <g-link
            :to="'/news/' + post.slug.current"
            class="news-feed-carousel__card mb-100 color--gray-tertiary"
          >
            <div class="grid__card">
              <BaseImage
                v-if="post.altThumbnail && post.altThumbnail.asset"
                :src="post.altThumbnail"
                :lazy="true"
                :sizes="sizes"
                :x="100"
                :y="140"
                :caption="post.altThumbnail.caption"
                :captionStyle="post.altThumbnail.captionStyle"
              />
              <h3 class="h4 news-feed-carousel__card-title" v-html="post.title"></h3>
            </div>
          </g-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import BaseImage from '~/components/BaseImage'
import 'swiper/css/swiper.css'

export default {
  name: 'NewsFeedCarousel',
  props: { content: Object },
  components: { Swiper, SwiperSlide, BaseImage },
  data() {
    return {
      sizes: {
        mobile: 338,
        tablet: 768,
        laptop: 1024,
        desktop: 1920,
        hd: 2560,
        fourK: 3840
      }
    }
  },
  computed: {
    title() { return this.content?.title || '' },
    news() { return this.content?.news || [] },
    swiperOptions() {
      return {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        navigation: false,
        pagination: false
      }
    }
  }
}
</script>


<style lang="scss">
  .news-feed-carousel {
    padding: 60px 0;

    &__heading {
      display: flex;
      gap: 8px;
      align-items: end;
      margin-bottom: 60px;

      &-title {
        margin: 0;
      }

      &-cta {
        color: var(--color--gray);
      }
    }

    &__card {
      position: relative;
      display: block;
      transition: all 0.3s ease-in-out;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 1px solid var(--color--navy);
        transition: all 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
      }

      &:hover::after {
        opacity: 1;
        visibility: visible;
      }
    }

    &__card-title {
      position: absolute;
      top: 50%;
      left: 10px;
      right: 10px;
      transform: translateY(-50%);
      text-align: center;
      color: var(--color--navy);
    }

    .grid__card::after {
      display: none;
    }
  }
</style>

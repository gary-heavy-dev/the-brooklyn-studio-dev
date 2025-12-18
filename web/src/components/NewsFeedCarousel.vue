<template>
  <section class="news-feed-carousel" v-if="news && news.length">
    <div class="container">
      <div class="news-feed-carousel__heading">
        <h2 class="h4 upper news-feed-carousel__heading-title" v-if="title">
          <span class="color--navy">The Brooklyn Studio</span>
          <span class="color--gray"> PRESS</span>
        </h2>
        <g-link
          v-if="content.cta_url"
          :to="content.cta_url"
          class="h4 upper news-feed-carousel__heading-cta"
        >
          {{ content.cta_label }}
        </g-link>
      </div>

      <swiper :options="swiperOptions" class="swiper news-feed-carousel__swiper">
        <swiper-slide v-for="(post, index) in news" :key="index">
          <component
            :is="post.link ? 'a' : 'g-link'"
            :href="post.link ? post.link : null"
            :to="!post.link ? '/news/' + post.slug.current : null"
            :target="post.link ? '_blank' : undefined"
            :rel="post.link ? 'noopener' : undefined"
            class="news-feed-carousel__card mb-100"
          >
            <div class="grid__card">
              <BaseImage
                v-if="post.altThumbnail && post.altThumbnail.asset"
                class="news-feed-carousel__bg-image"
                :src="post.altThumbnail"
                :lazy="true"
                :sizes="sizes"
                :x="830"
                :y="1010"
              />
              <h3
                v-if="post.publisher && post.publisher.title"
                class="h5 news-feed-carousel__card-title"
              >
                <span v-if="post.title">{{ post.title }} featured in </span>
                <span class="publisher__title"
                  ><i>
                    {{ post.publisher.title }}
                  </i></span
                >
              </h3>
            </div>
          </component>
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
    title() {
      return this.content && this.content.title ? this.content.title : ''
    },
    news() {
      return this.content && this.content.news ? this.content.news : []
    },
    swiperOptions() {
      return {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 }
        }
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
    align-items: flex-end;
    margin-bottom: 60px;
    &-title {
      margin: 0;
      font-weight: 500;
    }
    &-cta {
      color: var(--color--gray);
    }
  }

  &__card {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 14/17;
    overflow: hidden;
    border: solid 1px var(--color--gray-secondary);
    @include desktop {
      &:hover {
        .grid__card::after {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .news-feed-carousel__card-title {
          font-weight: 500;

          color: #ffffff;
        }
      }
    }
  }

  .grid__card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(230, 230, 230, 0.85);
      z-index: 1;
      transition: background-color 0.5s ease-in-out;
    }
  }

  &__card-title {
    position: relative;
    z-index: 2;
    line-height: 1.2;
    text-align: center;
    padding: 0 1.2em;
    text-transform: capitalize;
    color: var(--color--navy);
    transition: color 0.5s ease;
    pointer-events: none;

    i {
      font-style: italic;
    }
  }
  &__bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

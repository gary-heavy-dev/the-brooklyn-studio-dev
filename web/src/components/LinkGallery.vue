<template>
  <section class="link-gallery flex fd-c" :id="content.navTitle ? $toKebabCase(content.navTitle) : ''">
    <div class="link-gallery__swiper-wrapper mobile-only w-100">
      <div class="text-center">
        <swiper
          :options="swiperOption"
          ref="linkGallerySwiper"
          @slideChange="activeSlide"
        >
          <swiper-slide
            v-for="(link, index) in content.links"
            :key="index"
            :data-slug="link.link.slug.current"
          >
            <BaseImage
              v-if="link.image"
              :src="link.image"
              :lazy="true"
              :sizes="sizes"
              :x="390"
              :y="496"
              :caption="link.image.caption"
              :captionStyle="link.image.captionStyle"
            />
          </swiper-slide>
        </swiper>
        <div class="swiper__pagination link-gallery__swiper-pagination"></div>
      </div>
    </div>
    <div class="link-gallery__inner grid grid--12-desktop">
      <div class="link-gallery__copy flex ai-c p-mobile-copy-block">
        <div class="link-gallery__copy-inner">
          <h2
            class="h2 upper"
            v-if="content.title"
          >{{ content.title }}</h2>
          <p
            class="h5 h5--alt"
            v-if="content.intro"
          >{{ content.intro }}</p>
          <div class="link-gallery__links link-list">
            <g-link
              v-for="(link, index) in content.links"
              :to="'/projects/#' + link.link.slug.current"
              :key="index"
              @mouseover.native="showMe(link.link.slug.current)"
              @mouseleave.native="hideMe(link.link.slug.current)"
              :class="['upper button link-gallery__link', { 'active': index === 0}]"
              :data-link-slug="link.link.slug.current"
            >{{ link.copy }}</g-link>
          </div>
        </div>
      </div>
      <div class="link-gallery__gallery layered-image-gallery desktop-only">
        <div
          class="link-gallery__gallery-image layered-image-gallery__image image-wrapper"
          v-if="content.image"
          data-image="default"
        >
          <BaseImage
            :src="content.image"
            :lazy="true"
            :x="608"
            :y="810"
            :sizes="sizes"
            :caption="content.image.caption"
            :captionStyle="content.image.captionStyle"
          />
        </div>
        <div
          class="link-gallery__gallery-image layered-image-gallery__image image-wrapper"
          v-for="(link, index) in content.links"
          :key="index"
          :data-image="link.link.slug.current"
        >
          <BaseImage
            v-if="link.image"
            :src="link.image"
            :lazy="true"
            :x="608"
            :y="810"
            :sizes="sizes"
            :caption="link.image.caption"
            :captionStyle="link.image.captionStyle"
          />
          <BaseImage
            v-else
            :src="link.link.heroImage"
            :lazy="true"
            :x="608"
            :y="810"
            :sizes="sizes"
            :caption="link.link.heroImage.caption"
            :captionStyle="link.image.captionStyle"
          />
          <div
            v-if="link.image.caption !== ''"
            :class="['image-caption xsmall', { 'color--white': !link.image.captionStyle}]"
          >{{ link.image.caption }}</div>
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
  computed: {
    swiper() {
      return this.$refs.linkGallerySwiper.$swiper
    }
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 300,
        threshold: 10,
        pagination: {
          el: '.link-gallery__swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 6000
        },
        breakpoints: {
          1025: {
            enabled: false
          }
        }
      },
      sizes: {
        mobile: 338,
        tablet: 768,
        laptop: 1024,
        desktop: 608,
        hd: 815,
        fourK: 1630 // by 2170 tall
      }
    }
  },
  props: {
    content: Object
  },
  methods: {
    showMe(me) {
      const currentShow = document.querySelector(`div[data-image="${me}"]`)
      currentShow.classList.add('show-me')
    },
    hideMe(me) {
      const currentHide = document.querySelector(`div[data-image="${me}"]`)
      setTimeout(() => { currentHide.classList.remove('show-me') }, 150)
    },
    activeSlide() {
      let slideIndex = this.swiper.realIndex + 1
      let currentData = this.swiper.slides[slideIndex].dataset.slug
      const links = document.getElementsByClassName('link-gallery__link')
      Array.prototype.forEach.call(links, function(link) {
        if (link.dataset.linkSlug == currentData) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.link-gallery {
  background-color: var(--color--gray-light);
  position: relative;

  .image-caption {
    padding: 25px;
  }

  &__copy {
    grid-column: span 6;
    position: relative;
    z-index: 10;

    @include desktop-down {
      @include container;
    }
  }

  &__link {
    transition: color 0.2s linear;

    &.active {

      @include desktop-down {
        color: var(--color--navy);
      }
    }
  }

  &__gallery {

    @include desktop {
      overflow: hidden;
      grid-column: 8/13;
      margin-right: calc(var(--grid-margin) * -1);
      padding-bottom: 164%;
    }
  }

  &__inner {

    // @include desktop-down {
    //   width: 100%;
    // }

    @include desktop {
      @include container;
    }
  }
}
</style>

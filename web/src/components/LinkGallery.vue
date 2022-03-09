<template>
  <section class="link-gallery flex fd-c" :id="content.navTitle ? $toKebabCase(content.navTitle) : ''">
    <LinkGallerySwiper
      :content="content"
      v-if="showSwiper"
    />
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
      <div
        v-view="$iAmRevealed"
        class="link-gallery__gallery layered-image-gallery desktop-only"
      >
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
import LinkGallerySwiper from '~/components/LinkGallerySwiper'

export default {
  components: {
    LinkGallerySwiper
  },
  data() {
    return {
      sizes: {
        mobile: 338,
        tablet: 768,
        laptop: 1024,
        desktop: 608,
        hd: 815,
        fourK: 1630 // by 2170 tall
      },
      showSwiper: false
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
    toggleSwiper() {
      if (typeof window !== undefined && window.innerWidth <= 1024) {
        this.showSwiper = true
      } else {
        this.showSwiper = false
      }
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.toggleSwiper);
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.toggleSwiper);
    }
  },
  mounted() {
    this.toggleSwiper()
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
        color: var(--color--navy-light);
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

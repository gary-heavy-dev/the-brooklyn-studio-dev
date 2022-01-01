<template>
  <section class="link-gallery flex w-100">
    <div class="link-gallery__inner container grid grid--12-desktop">
      <div class="link-gallery__copy flex ai-c">
        <div class="link-gallery__copy-inner">
          <h2
            class="h2 upper"
            v-if="content.title"
          >{{ content.title }}</h2>
          <p
            class="h5"
            v-if="content.intro"
          >{{ content.intro }}</p>
          <g-link
            v-for="(link, index) in content.links"
            :to="'/projects/#' + link.link.slug.current"
            :key="index"
            @mouseover.native="showMe(link.link.slug.current)"
            @mouseleave.native="hideMe(link.link.slug.current)"
            class="upper button"
          >{{ link.copy }}</g-link>
        </div>
      </div>
      <div class="link-gallery__gallery layered-image-gallery">
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
          />
          <BaseImage
            v-else
            :src="link.link.heroImage"
            :lazy="true"
            :x="608"
            :y="810"
            :sizes="sizes"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
      currentHide.classList.remove('show-me')
    }
  }
}
</script>

<style lang="scss">
.link-gallery {
  background-color: var(--color--gray-light);
  position: relative;

  &__copy {
    grid-column: span 6;
    position: relative;
    z-index: 10;

    a {
      display: block;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    &-inner {

      @include desktop-down {
        @include container;
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
}
</style>

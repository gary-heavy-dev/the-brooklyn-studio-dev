<template>
  <section class="link-gallery flex w-100">
    <div class="link-gallery__inner container grid grid--12-desktop">
      <div class="link-gallery__copy flex ai-c">
        <div class="link-gallery__copy-inner">
          <h2
            class="h2 upper"
            v-if="content.title"
          >{{ content.title }}</h2>
          <p v-if="content.intro">{{ content.intro }}</p>
          <g-link
            v-for="(link, index) in content.links"
            :to="'/projects/#' + link.link.slug.current"
            :key="index"
            @mouseover.native="showMe(link.link.slug.current)"
            @mouseleave.native="hideMe(link.link.slug.current)"
            class="upper"
          >{{ link.copy }}</g-link>
        </div>
      </div>
      <div class="link-gallery__gallery">
        <div
          class="link-gallery__gallery-image image-wrapper"
          v-for="(link, index) in content.links"
          :key="index"
          :data-image="link.link.slug.current"
        >
          <BaseImage
            v-if="link.image"
            :src="link.image"
            :x="608"
            :y="810"
          />
          <BaseImage
            v-else
            :src="link.link.heroImage"
            :x="608"
            :y="810"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
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
    position: relative;

    @include desktop {
      overflow: hidden;
      grid-column: 8/13;
      margin-right: calc(var(--grid-margin) * -1);
      padding-bottom: 164%;
    }

    &-image {
      position: absolute;
      width: 100%;
      opacity: 0;
      transition: opacity 0.2s linear;

      &:first-child {
        opacity: 1;
      }

      &.show-me {
        opacity: 1;
      }
    }
  }
}
</style>

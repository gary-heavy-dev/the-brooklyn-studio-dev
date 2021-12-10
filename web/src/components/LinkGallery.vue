<template>
  <section class="link-gallery w-100 two-up o-h">
    <div class="link-gallery__copy flex ai-c">
      <div class="link-gallery__copy-inner">
        <h2
          class="h2"
          v-if="content.title"
        >{{ content.title }}</h2>
        <p v-if="content.intro">{{ content.intro }}</p>
        <g-link
          v-for="(link, index) in content.links"
          :to="'/projects/#' + link.link.slug.current"
          :key="index"
          @mouseover.native="showMe(link.link.slug.current)"
          @mouseleave.native="hideMe(link.link.slug.current)"
        >{{ link.copy }}</g-link>
      </div>
    </div>
    <div class="link-gallery__gallery">
      <div class="link-gallery__gallery-inner grid grid--6-desktop">
        <div class="link-gallery__gallery-images-wrapper">
          <div
            class="link-gallery__gallery-image"
            v-for="(link, index) in content.links"
            :key="index"
            :data-image="link.link.slug.current"
          >
            <BaseImage
              :src="link.link.heroImage"
              :lazy="true"
            />
          </div>
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
  display: flex;
  background-color: var(--color--gray-light);
  position: relative;

  @include desktop-down {
    flex-direction: column-reverse;
  }

  &__copy {
    background-color: var(--color--gray-light);
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

      @include desktop {
        @include container--left;
      }
    }
  }

  &__gallery {

    &-inner {
      @include container--right;
    }

    &-images-wrapper {
      padding-bottom: 151%;

      @include desktop {
        grid-column: 2/7;
      }
    }

    &-image {
      position: absolute;
      height: 100%;
      opacity: 0;
      transition: opacity 0.2s linear;

      &:first-child {
        opacity: 1;
      }

      &.show-me {
        opacity: 1;
      }

      .base-image,
      .base-image__inner {
        height: 100%;
      }
    }
  }
}
</style>

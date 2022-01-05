<template>
  <section class="scrolling-gallery flex w-100">
    <div class="scrolling-gallery__inner container grid grid--12-desktop">
      <div class="scrolling-gallery__copy flex ai-c">
        <div class="scrolling-gallery__copy-inner p-100">
          <div class="scrolling-gallery__copy-intro">
            <h2
              class="h2 upper"
              v-if="content.title"
            >{{ content.title }}</h2>
            <p v-if="content.intro">{{ content.intro }}</p>
          </div>
          <div
            v-for="(section, index) in content.sections"
            class="scrolling-gallery__copy-section"
            :key="index"
            v-view="showMeHideMe"
            :data-index="index"
          >
            <h3
              class="h3 upper"
              v-if="section.heading"
            >{{ section.heading }}</h3>
            <p v-if="section.copy">{{ section.copy }}</p>
          </div>
        </div>
      </div>
      <div class="scrolling-gallery__gallery layered-image-gallery mb-100">
        <div
          class="scrolling-gallery__gallery-image layered-image-gallery__image image-wrapper"
          v-for="(section, index) in content.sections"
          :key="index"
          :data-image="index"
        >
          <BaseImage
            v-if="section.image"
            :src="section.image"
            :lazy="true"
            :sizes="sizes"
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
  data() {
    return {
      sizes: {
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 812,
        hd: 1085,
        fourK: 2170
      }
    }
  },
  methods: {
    showMeHideMe(e) {
      // console.log("it's me", e.percentTop, e.target.element.dataset.index)
      const me = e.target.element
      const myImage = document.querySelector(`div[data-image="${e.target.element.dataset.index}"]`)
      if (e.percentInView > 0.05) {
        me.classList.add('show-me')
        myImage.classList.add('show-me')
      } else {
        me.classList.remove('show-me')
        myImage.classList.remove('show-me')
      }
    }
  }
}
</script>

<style lang="scss">
.scrolling-gallery {
  background-color: var(--color--gray-light);
  position: relative;

  &__copy {
    grid-column: span 4;
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

    &-section {
      padding-bottom: 70vh;
      opacity: 0;
      transition: opacity 0.4s linear;
    }

    &-intro {
      padding-top: 30vh;
      padding-bottom: 50vh;
    }
  }

  &__gallery {
    @include desktop {
      overflow: hidden;
      margin-right: calc(var(--grid-margin) * -1);
      grid-column: 6/13;
      height: 100vh;
      padding-bottom: 100vh;
      position: sticky;
      top: 0;
    }

    .layered-image-gallery {

      &__image {
        margin-bottom: 50px;
        object-fit: cover;
        height: 100%;

        &:first-child {
          opacity: 0;
        }

        .base-image,
        .base-image__inner {
          height: 100%;
        }
      }
    }
  }
}
</style>

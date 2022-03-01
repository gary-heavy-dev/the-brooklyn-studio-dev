<template>
  <section
    class="scrolling-gallery flex w-100"
    :id="content.navTitle ?  $toKebabCase(content.navTitle) : ''"
  >
    <div class="scrolling-gallery__inner grid grid--12-desktop">
      <div class="scrolling-gallery__copy flex ai-c">
        <div class="scrolling-gallery__copy-inner p-100">
          <div class="scrolling-gallery__copy-intro">
            <h2
              class="h2 upper"
              v-if="content.title"
            >{{ content.title }}</h2>
            <p
              v-if="content.intro"
              class="display"
            >{{ content.intro }}</p>
          </div>
          <div
            v-for="(section, index) in content.sections"
            class="scrolling-gallery__copy-section"
            :key="index"
            v-view="showMeHideMe"
            :data-index="index + 1"
          >
            <BaseImage
              class="img-cover mobile-only"
              v-if="section.image"
              :src="section.image"
              :lazy="true"
              :x="100"
              :y="100"
              :sizes="sizes"
            />
            <h3
              class="h2 upper mb-20"
              v-if="section.heading"
            >{{ section.heading }}</h3>
            <p
              v-if="section.copy"
              class="display"
            >{{ section.copy }}</p>
          </div>
        </div>
      </div>
      <div class="scrolling-gallery__gallery layered-image-gallery mb-100 desktop-only">
        <div
          class="scrolling-gallery__gallery-image layered-image-gallery__image image-wrapper show-me"
          v-if="content.image"
        >
          <BaseImage
            :src="content.image"
            class="img-cover"
            :lazy="true"
            :sizes="sizes"
          />
        </div>
        <div
          class="scrolling-gallery__gallery-image layered-image-gallery__image image-wrapper"
          v-for="(section, index) in content.sections"
          :key="index"
          :data-image="index + 1"
        >
          <BaseImage
            v-if="section.image"
            class="img-cover"
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
      // console.log("I'm " + e.target.element.dataset.index + " and I'm ", e.percentTop, e.percentCenter, e.percentInView)
      console.log("I'm " + e.target.element.dataset.index + " and I'm ", e.target.rect)
      const me = e.target.element
      const myImage = document.querySelector(`div[data-image="${e.target.element.dataset.index}"]`)
      const triggerDistance = (e.target.element.dataset.index == 2) ? 490 : 290

      // if (e.percentTop <= 0.4 && e.percentTop >= 0) {
      if (e.target.rect.top < triggerDistance) {
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
  position: relative;
  background-color: var(--color--gray-secondary);

  @include desktop {
    background-color: var(--color--gray-light);
  }

  &__inner {

    @include desktop {
      @include container;
    }
  }

  &__copy {
    grid-column: span 5;
    position: relative;
    z-index: 10;

    a {
      display: block;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    &-inner {

      @include desktop-down {
        padding-top: 0;
      }
    }

    &-section {

      @include desktop {
        padding-top: 200px;

        &:last-child {
          padding-bottom: 400px;
        }
      }
    }

    &-section,
    &-intro {

      @include desktop-down {
        padding-top: 45px;

        .base-image {
          padding-bottom: 40px;
        }

        h2, h3, p {
          @include container;
        }
      }


      @include laptop-down {

        p.h5 {
          font-size: var(--body-font-size);
          line-height: var(--body-line-height);
          font-weight: 400;
        }
      }
    }

    &-intro {

      @include desktop {
        padding-top: 300px;
        padding-bottom: 0;
      }
    }
  }

  &__gallery {
    overflow: hidden;
    margin-right: calc(var(--grid-margin) * -1);
    grid-column: 7/13;
    height: 100vh;
    padding-bottom: 100vh;
    position: sticky;
    top: 0;

    .layered-image-gallery {

      &__image {
        margin-bottom: 50px;
        object-fit: cover;
        height: 100%;

        &:first-child {
          opacity: 0;
        }
      }
    }
  }
}
</style>

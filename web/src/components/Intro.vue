<template>
  <section :class="'intro two-up intro--' + layout" :id="layout === 'secondary' ? 'approach' : 'intro'">
    <div class="intro-column flex fd-c">
      <div class="copy background-stretch background--gray-light flex ai-c">
        <div class="copy__content ">
          <div class="copy__content-inner mw-readable ">
            <span 
              v-if="content.introLarge"
              class="h3"
            >{{ content.introLarge }}</span>
            <h2
              v-if="content.introHeading"
              :class="['h2']"
            >{{ content.introHeading }}</h2>
            <BaseBlockContent
              v-if="content._rawIntroCopy"
              :blocks="content._rawIntroCopy"
            />
          </div>
        </div>
      </div>
      <div class="intro-image intro-image--small flex fd-c desktop-only">
        <div class="grid grid--6-desktop container--left">
          <div class="image-wrapper col-span--5 p-100">
            <BaseImage
              :lazy="true"
              v-if="content.introImageSecondary"
              :src="content.introImageSecondary"
              :x="683"
              :y="529"
              :sizes="sizesSecondary"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="intro__column copy--left image--full w-100">
      <div
        class="intro-image intro-image--large grid grid--6-desktop container--right mb-100"
        :style="{ minHeight: minX + 'px' }"
      >
        <div class="image-wrapper col-span--6">
          <BaseImage
            v-if="content.introImagePrimary"
            :src="content.introImagePrimary"
            :lazy="true"
            :sizes="layout === 'secondary' ? sizesPrimarySmaller : sizesPrimaryLarge"
            :minX="minX"
            :x="content.introImagePrimary.asset.metadata.dimensions.width"
            :y="content.introImagePrimary.asset.metadata.dimensions.height"
          />
        </div>
      </div>
      <div
        class="copy grid grid--6-desktop container--right"
      >
        <div class="copy__inner mb-100 col-span--6">
          <BaseBlockContent
            v-if="content._rawIntroSmall"
            class="h5 h5--alt"
            :blocks="content._rawIntroSmall"
          />
          <g-link
            v-if="content.introLink && content.introLinkText"
            :to="content.introLink"
            class="upper button mt-60"
          >{{ content.introLinkText }}</g-link>


          <div class="image-wrapper mobile-only">
            <BaseImage
              :lazy="true"
              v-if="content.introImageSecondary"
              :src="content.introImageSecondary"
              :x="683"
              :y="529"
              :sizes="sizesSecondary"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sizesPrimaryLarge: {
        mobile: 338,
        tablet: 741,
        laptop: 949,
        desktop: 710,
        hd: 950,
        fourK: 1900 // by 1682 tall
      },
      sizesPrimarySmaller: {
        mobile: 338,
        tablet: 768,
        laptop: 1024,
        desktop: 608,
        hd: 815,
        fourK: 1630
      },
      sizesSecondary: {
        mobile: 338,
        tablet: 741,
        laptop: 949,
        desktop: 490,
        hd: 656,
        fourK: 1312 // by 874 tall
      }
    }
  },
  computed: {
    minX() {
      return this.layout === 'secondary' ? 1066 : 692
    }
  },
  props: {
    content: Object,
    layout: String
  }
}
</script>

<style lang="scss">
.intro {
  background-color: var(--color--gray-light);
  position: relative;

  @include desktop {
    background-color: white;
  }

  .copy__content {
    margin: 0 var(--grid-margin);
    padding: 41px 0;

    @include desktop {
      padding: 112px 0;
    }
  }

  .intro-image {

    @include laptop-down {
      min-height: unset !important;

      &--large {
        margin-bottom: 41px;
      }
    }
  }

  .image-wrapper.mobile-only {
    margin-right: 0;
    margin-left: calc(var(--grid-margin) * -1);
    padding: 40px 0 20px;
  }

  &--secondary {

    .intro-image {

      &--large,
      &--small {

        .image-wrapper {
          grid-column: 2/7;
        }
      }
    }
  }
}
</style>

<template>
  <section :class="'intro two-up intro--' + layout">
    <div class="intro-column flex fd-c">
      <div class="copy background-stretch background--gray-light flex ai-c p-100">
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
      <div class="intro-image intro-image--small flex fd-c">
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
    <div class="intro__column copy--left image--full">
      <div class="intro-image intro-image--large grid grid--6-desktop container--right mb-100">
        <div class="image-wrapper col-span--6">
          <BaseImage
            v-if="content.introImagePrimary"
            :src="content.introImagePrimary"
            :lazy="true"
            :sizes="layout === 'secondary' ? sizesPrimarySmaller : sizesPrimaryLarge"
            :minX="layout === 'secondary' ? 1066 : 692"
          />
        </div>
      </div>
      <div
        v-if="content._rawIntroSmall"
        class="copy grid grid--6-desktop container--right"
      >
        <div class="copy__inner mb-100 col-span--6">
          <BaseBlockContent
            class="h5"
            :blocks="content._rawIntroSmall"
          />
          <g-link
            v-if="content.introLink && content.introLinkText"
            :to="content.introLink"
            class="upper button mt-60"
          >{{ content.introLinkText }}</g-link>
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
  props: {
    content: Object,
    layout: String
  }
}
</script>

<style lang="scss">
.intro {
  background-color: white;
  position: relative;

  .copy__content {
    margin: 0 var(--grid-margin);
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

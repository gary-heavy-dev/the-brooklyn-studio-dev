<template>
  <section :class="'intro two-up intro--' + layout">
    <div class="intro-column flex fd-c">
      <div class="copy copy--background-stretch background--gray-light flex ai-c p-100">
        <div class="copy__content grid grid--6-desktop container--left">
          <div class="copy__content-inner mw-readable col-span--5">
            <span 
              v-if="content.introLarge"
              class="h3"
            >{{ content.introLarge }}</span>
            <h2
              v-if="content.introHeading"
              class="h2"
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
          />
        </div>
      </div>
      <div
        v-if="content._rawIntroSmall"
        class="copy grid grid--6-desktop container--right"
      >
        <div class="copy__inner mb-100 h4 col-span--6">
          <BaseBlockContent
            :blocks="content._rawIntroSmall"
          />
          <g-link
            v-if="content.introLink && content.introLinkText"
            :to="content.introLink"
            class="upper"
          >{{ content.introLinkText }}</g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

  .copy {

    &--background-stretch {

      position: relative;

      &::before {

        @include desktop {
          content: "";
          position: absolute;
          background-color: var(--color--gray-light);
          height: 100%;
          width: 100%;
          transform: translateX(100%);
        }
      }
    }
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

<template>
  <section :class="'intro mb-lg flex fw intro--' + layout">
    <div class="intro-content-large w-100 flex">
      <div class="copy">
        <div class="copy__inner flex ai-c background--gray-light">
          <div class="copy__content grid">
            <div class="copy__content-inner">
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
      </div>
      <div class="image">
        <div class="image__inner container--right grid">
          <div class="image-grid-ignore">
            <div class="image-grid-ignore__inner">
              <BaseImage
                v-if="content.introImagePrimary"
                :src="content.introImagePrimary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-content-small grid grid--12-desktop">
      <div class="copy">
        <div class="copy__inner h4">
          <BaseBlockContent
            v-if="content._rawIntroSmall"
            :blocks="content._rawIntroSmall"
          />
          <g-link
            to="https://google.com"
            class="upper"
          >A link!</g-link>
        </div>
      </div>
      <BaseImage
        :lazy="true"
        v-if="content.introImageSecondary"
        :src="content.introImageSecondary"
        :x="683"
        :y="529"
      />
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

  &::before {

    @include desktop-down {
      content: '';
      background-color: var(--color--gray-light);
      position: absolute;
      width: 100%;
      height: calc(100% - 79px);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .copy__inner {
    padding-top: var(--margin--large);
    padding-bottom: var(--margin--large);
  }

  &--primary {

    .intro-content-large {

      .copy__content {

        @include desktop {

          &-inner {
            grid-column: span 5;
          }
        }
      }

      .image {

        .image-grid-ignore {
          padding-bottom: 106%;
        }
      }
    }
  }

  &--secondary {

    .intro-content-large {

      .copy__content {

        @include desktop {

          &-inner {
            grid-column: span 6;
          }
        }
      }

      .image {

        &__inner {
          grid-template-columns: repeat(6, 1fr);
        }

        .image-grid-ignore {
          padding-bottom: 186%;
          grid-column: 2/7;
        }
      }
    }
  }
}

.intro-content-large {

  .copy {

    @include desktop {
      width: 50%;
    }
  }

  .copy__inner {

    @include desktop {
      position: relative;
      min-height: 80%;

      &::before {
        content: '';
        position: absolute;
        background-color: var(--color--gray-light);
        height: 100%;
        width: 100%;
        transform: translateX(100%);
      }
    }
  }

  .copy__content {
    @include desktop-down {
      @include container;
    }

    @include desktop {
      @include container--left;
      grid-template-columns: repeat(6, 1fr);
    }
  }

  .image {
    position: relative;

    @include desktop-down {
      @include container--left;
    }

    @include desktop {
      width: 50%;
    }
  }
}

.intro-content-small {

  @include desktop {
    @include container;
  }

  .copy {

    @include desktop {
      grid-column: 7/13;
      order: 2;
    }
  }

  .base-image {

    @include desktop {
      grid-column: span 5;
    }

    @include hd {
      margin-top: -3%;
    }
  }
}
</style>

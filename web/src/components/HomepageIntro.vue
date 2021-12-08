<template>
  <section class="intro mb-lg">
    <div class="intro-content--large two-up">
      <div class="copy">
        <div class="copy__inner flex ai-c background--gray-light">
          <div class="copy__content grid grid--6-desktop">
            <span 
              class="grid--span-5 h3"
              v-html="content.introLarge"
            ></span>
          </div>
        </div>
      </div>
      <div class="image w-100 background--gray-light">
        <BaseImage
          v-if="content.introImagePrimary"
          :src="content.introImagePrimary"
          :x="354"
          :y="313"
          :columns="1"
          :alt="content.introImagePrimary.alt"
        />
      </div>
    </div>
    <div class="intro-content--small two-up">
      <div class="copy">
        <div class="copy__inner h4">
          <BaseBlockContent :blocks="content._rawIntroSmall" />
          <g-link to="https://google.com">A link!</g-link>
        </div>
      </div>
      <div class="image">
        <div class="image__inner grid grid--6-desktop">
          <BaseImage
            class="grid--span-5"
            v-if="content.introImageSecondary"
            :src="content.introImageSecondary"
            :x="646"
            :y="500"
            :columns="1"
            :alt="content.introImageSecondary.alt"
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

  .image {

    @include hd-down {
      display: inline-grid;
      align-items: center;
    }
  }
}

.intro-content--large {

  .copy__inner {
    @include desktop {
      min-height: 80%;
    }
  }

  .copy__content {
    @include desktop-down {
      @include container;
    }

    @include desktop {
      @include container--left;
    }
  }

  .image {
    @include desktop-down {
      @include container--left;
    }
  }
}

.intro-content--small {

  @include desktop {
    flex-direction: row-reverse;
  }

  .copy {

    @include desktop-down {
      @include container--left;
    }

    &__inner {

      @include desktop {
        @include container--right;
      }
    }
  }

  .image {

    @include hd {
      margin-top: -2%;
    }
  }

  .image__inner {
    @include desktop-down {
      @include container--right;
    }

    @include desktop {
      @include container--left;
    }
  }
}
</style>

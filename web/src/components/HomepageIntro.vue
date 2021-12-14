<template>
  <section class="intro mb-lg flex fw">
    <div class="intro-content-large w-100 two-up">
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
      <BaseImage
        v-if="content.introImagePrimary"
        :lazy="true"
        :src="content.introImagePrimary"
        :x="960"
        :y="849"
      />
    </div>
    <div class="intro-content-small grid grid--12-desktop">
      <div class="copy">
        <div class="copy__inner h4">
          <BaseBlockContent :blocks="content._rawIntroSmall" />
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
}

.intro-content-large {

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

  .base-image {
    @include desktop-down {
      @include container--left;
    }

    @include desktop {
      padding-left: calc(var(--grid-gap) / 2);
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
      margin-top: -2%;
    }
  }
}
</style>

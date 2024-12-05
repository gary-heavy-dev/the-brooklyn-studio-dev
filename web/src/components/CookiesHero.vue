<template>
  <div :class="['cookies--hero', 'pos-rel', { 'mb-100': margin }, { overlay: !cookies }]">
    <BaseImage
      v-if="image"
      class="img-cover"
      :lazy="true"
      :src="image"
      :x="1440"
      :y="500"
      :caption="image.caption"
      :captionStyle="image.captionStyle"
    />
    <div class="cookies-hero__title pt-80 z-1 w-100 flex jc-c color--white background--navy">
      <h1 v-if="title" :class="['h1', 'color--white', 'container', { cookies: cookies }]">
        <div>{{ title }}</div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: Object,
    margin: Boolean,
    cookies: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.cookies--hero {
  &.overlay {
    &::after {
      @include desktop-down {
        box-shadow: inset 0 20vw 10vw rgba(0, 0, 0, 0.5);
      }
    }
  }

  .cookies {
    > div {
      max-width: 22ch;
    }
  }

  &.mb-100 {
    @include laptop-down {
      margin-bottom: 40px;
    }
  }

  @include laptop-down {
    min-height: 176px;

    .img-cover {
      height: 45vw;
      min-height: 300px;
    }

    .cookies-hero__title {
      padding-top: 40px;
    }
  }
}
</style>

<template>
  <div :class="['hero--secondary', 'pos-rel', 'o-h', 'overlay', { 'mb-100': margin }]">
    <div class="secondary-hero__title fade--in-up pt-80 pos-abs z-1 w-100 flex jc-c">
      <h1 v-if="title" :class="['h1', 'color--white', 'container', { cookies: cookies }]">
        <div>{{ title }}</div>
      </h1>
    </div>
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
.hero--secondary {
  &.overlay {
    &::after {
      @include desktop-down {
        // box-shadow: inset 0px 51vw 25.5vw rgba(0, 0, 0, 0.2);
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
    height: 45vw;

    &:has(.cookies) {
      min-height: 300px;
    }

    .secondary-hero__title {
      padding-top: 40px;
    }
  }
}
</style>

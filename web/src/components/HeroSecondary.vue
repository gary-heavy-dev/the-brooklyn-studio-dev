<template>
  <div :class="['hero--secondary', 'pos-rel', 'o-h', 'overlay', { 'mb-100': margin}]">
    <div class="secondary-hero__title fade--in-up pt-80 pos-abs z-1 w-100 flex jc-c">
      <h1
        v-if="title"
        class="h1 color--white container"
      >
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
    margin: Boolean
  }
}
</script>

<style lang="scss">
.hero--secondary {

  // &.overlay {

  //   &::after {
  //     // box-shadow: inset 0px 200px 100px rgba(0, 0, 0, 0.2);
  //     box-shadow: inset 0px 500px 250px rgba(0, 0, 0, 0.3);
  //   }
  // }

  &.mb-100 {

    @include laptop-down {
      margin-bottom: 40px;
    }
  }

  @include laptop-down {
    min-height: 176px;
    height: 45vw;

    .secondary-hero__title {
      padding-top: 40px;
    }
  }
}
</style>
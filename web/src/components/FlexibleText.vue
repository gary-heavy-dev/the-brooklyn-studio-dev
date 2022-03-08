<template>
  <div class="flexible-text container flex jc-c mb-100">
    <div class="flexible-text__inner mw-readable--large" v-html="content.text"></div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.flexible-text {

  &__inner {

    @include desktop {
      text-align: center;
    }
  }
}
</style>
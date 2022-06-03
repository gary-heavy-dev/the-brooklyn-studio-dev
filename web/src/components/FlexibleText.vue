<template>
  <div class="flexible-text container flex jc-c mb-100">
    <div
      v-if="content.text"
      class="flexible-text__inner mw-readable--large"
      v-html="content.text"
    ></div>
    <BaseBlockContent
      v-else-if="content._rawExcerptPortableText"
      :blocks="content._rawExcerptPortableText"
    />
  </div>
</template>

<script>
export default {
  props: {
      content: Object
  },
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
<template>
  <div class="flexible-text container flex jc-c mb-100">
    <div
      v-if="content.text"
      class="flexible-text__inner mw-readable--large"
      v-html="content.text"
    ></div>
    <BaseBlockContent
      class="flexible-portable-text__inner"
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
    max-width: 1250px;

    @include desktop {
      text-align: center;
    }
  }
}

.flexible-portable-text__inner {
  max-width: 60ch;
  width: 100%;
  margin: 0 auto;
}
</style>
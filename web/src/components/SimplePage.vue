<template>
  <div class="simple-page flex fd-c">
    <div class="container">
      <div class="simple-page__title mb-80">
        <h1
          v-if="content.title"
          class="h1 pt-80 mb-15 color--navy-light"
        >{{ content.title }}</h1>
        <div
          v-if="content.subtitle"
          class="upper sub--lg color--gray-tertiary"
        >{{ content.subtitle }}</div>
      </div>
      <div class="grid grid--12-desktop">
        <div class="content-column mb-100">
          <section
            v-for="(section, index) in content.sections"
            :key="index"
            class="mb-60"
          >
            <BaseBlockContent
              v-if="section._rawPortableText"
              :blocks="section._rawPortableText"
            />
          </section>
        </div>
      </div>
    </div>
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
.content-column {
  grid-column: 2/12;
  max-width: 1000px;

  h2 {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    margin-bottom: 13px;
  }

  h1, h2, h3, h4, h5, strong {
    color: var(--color--navy-light);
  }
}
</style>
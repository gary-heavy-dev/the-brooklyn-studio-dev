<template>
  <div class="simple-page flex fd-c">
    <div class="container">
      <div class="simple-page__title mb-80">
        <h2
          v-if="content.title"
          class="h3 pt-80 color--navy-light"
        >{{ content.title }}</h2>
        <div
          v-if="content.subtitle"
          class="upper sub--lg color--gray-tertiary"
        >{{ content.subtitle }}</div>
      </div>
      <div class="grid grid--12-desktop">
        <div class="content-column mb-100">
          <!-- <BaseBlockContent
            v-if="content._rawBody"
            :blocks="content._rawBody"
          /> -->
          <section
            v-for="(section, index) in content.sections"
            :key="index"
            class="mb-100"
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
    margin-bottom: 18px;
  }

  h3 {
    font-size: var(--h5-font-size);
    margin-bottom: 11px;
  }

  h1, h2, h3, h4, h5, strong {
    color: var(--color--navy-light);
  }
}
</style>
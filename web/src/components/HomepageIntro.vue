<template>
  <section class="intro">
    <div class="intro-content--large">
      <div class="copy" v-html="content.introLarge"></div>
      <div class="image">
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
    <div class="intro-content--small">
      <div class="copy">
        <BaseBlockContent :blocks="content._rawIntroSmall" />
        <g-link to="https://google.com">A link!</g-link>
      </div>
      <div class="image">
        <BaseImage
          v-if="content.introImageSecondary"
          :src="content.introImageSecondary"
          :x="646"
          :y="500"
          :columns="1"
          :alt="content.introImageSecondary.alt"
        />
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

  > * {
    display: flex;
    flex-direction: column;
  }

  .copy {
    padding: 0 19px;
    margin: 40px 0;
  }
}

.intro-content--large {
  position: relative;

  &::before {
    content: '';
    background-color: var(--color--light-gray);
    position: absolute;
    width: 100%;
    height: calc(100% - 79px);
  }

  .copy,
  .image {
    z-index: 1;
    position: relative;
  }

  .image {
    padding-left: 21px;
  }
}

.intro-content--small {

  .image {
    padding-right: 20px;
  }
}
</style>

<template>
  <section class="hero--tertiary two-up">
    <div class="flex fd-c">
      <div class="copy background-stretch background--gray-light flex ai-c p-100">
        <div class="copy__content grid grid--6-desktop container--left">
          <div class="copy__content-inner mw-readable col-span--5">
            <h1
              v-if="content.title"
              class="h1 mb-60"
            >{{ content.title }}</h1>
            <p
              v-if="content.hero.intro"
              class="h5"
            >{{ content.hero.intro }}</p>
          </div>
        </div>
      </div>
      <div class="hero--tertiary__content pt-100">
        <div class="container--left">
          <AccordionGroup
            v-if="content._type == 'careers' && content.posts"
            :posts="content.posts"
          />
        </div>
      </div>
    </div>
    <div class="hero--tertiary__image copy--left image--full">
      <div class="hero--tertiary__image-inner grid grid--6-desktop container--right mb-100">
        <div class="image-wrapper">
          <BaseImage
            v-if="content.hero.image"
            :src="content.hero.image"
            :lazy="true"
            :sizes="sizes"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccordionGroup from '~/components/AccordionGroup'

export default {
  components: {
    AccordionGroup 
  },
  data() {
    return {
      sizes: {
        mobile: 338,
        tablet: 741,
        laptop: 949,
        desktop: 490,
        hd: 656,
        fourK: 1312 // by 874 tall
      }
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.hero--tertiary {

  &__image {

    &-inner {
      position: sticky;
      top: 0;

      .image-wrapper {
        grid-column: 2/5;
      }
    }
  }
}
</style>
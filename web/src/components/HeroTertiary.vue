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
            <!-- <p
              v-if="content.hero._rawIntro"
              class="h5 h5--alt"
            >{{ content.hero.intro }}</p> -->
            <div class="h5 h5--alt">
              <BaseBlockContent
                v-if="content.hero._rawIntro"
                :blocks="content.hero._rawIntro"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="image-wrapper mobile-only">
        <BaseImage
          v-if="content.hero.image"
          :src="content.hero.image"
          :lazy="true"
          :sizes="sizes"
          :x="content.hero.image.asset.metadata.dimensions.width"
          :y="content.hero.image.asset.metadata.dimensions.height"
        />
      </div>
      <div class="hero--tertiary__content p-100">
        <div class="container--left">
          <AccordionGroup
            v-if="content._type == 'careers' && content.posts"
            :posts="content.posts"
          />
        </div>
      </div>
    </div>
    <div class="hero--tertiary__image copy--left image--full desktop-only">
      <div class="hero--tertiary__image-inner grid grid--6-desktop container--right mb-100">
        <div class="image-wrapper">
          <BaseImage
            v-if="content.hero.image"
            :src="content.hero.image"
            :lazy="true"
            :sizes="sizes"
            :x="content.hero.image.asset.metadata.dimensions.width"
            :y="content.hero.image.asset.metadata.dimensions.height"
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
        mobile: 480,
        tablet: 768,
        laptop: 1024,
        desktop: 608,
        hd: 815,
        fourK: 1630
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

  .copy {

    @include desktop-down {
      padding: 40px 0 60px;
    }
  }

  &__content {

    @include desktop-down {
      padding-top: 40px;
    }
  }

  &__image {

    &-inner {

      .image-wrapper {
        grid-column: 2/5;
      }
    }
  }
}
</style>
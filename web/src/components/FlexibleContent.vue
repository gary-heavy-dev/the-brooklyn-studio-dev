<template>
  <div class="flexible-content">
    <div
      class="flexible-content__item flex w-100 jc-c"
      v-for="(block, index) in content"
      :key="index"
    >
      <LinkGallery
        v-if="block._type === 'linkGallery'"
        :content="block"
      />
      <CtaGallery
        v-if="block._type === 'ctaGallery'"
        :content="block"
      />
      <ScrollingGallery
        v-if="block._type === 'scrollingGallery'"
        :content="block"
      />
      <CtaSimple
        v-if="block._type === 'ctaSimple'"
        :content="block"
      />
      <CtaComplex
        v-if="block._type === 'ctaComplex'"
        :content="block"
      />
      <TeamMemberFeatured
        v-if="block._type === 'featuredTeamMember'"
        :content="block"
      />
      <FlexibleImage
        v-if="block._type === 'flexibleImage'"
        :content="block"
      />
      <FlexibleImagePair
        v-if="block._type === 'flexibleImagePair'"
        :content="block"
      />
      <FlexibleImageWithText
        v-if="block._type === 'flexibleImageWithText'"
        :content="block"
      />
      <FlexibleText
        v-if="block._type === 'flexibleText'"
        :content="block"
      />
    </div>
  </div>
</template>

<script>
import LinkGallery from '~/components/LinkGallery'
import ScrollingGallery from '~/components/ScrollingGallery'
import CtaComplex from '~/components/CtaComplex'
import CtaGallery from '~/components/CtaGallery'
import CtaSimple from '~/components/CtaSimple'
import TeamMemberFeatured from '~/components/TeamMemberFeatured'
import FlexibleImage from '~/components/FlexibleImage'
import FlexibleImagePair from '~/components/FlexibleImagePair'
import FlexibleImageWithText from '~/components/FlexibleImageWithText'
import FlexibleText from '~/components/FlexibleText'

export default {
  components: {
    LinkGallery,
    ScrollingGallery,
    CtaComplex,
    CtaGallery,
    CtaSimple,
    TeamMemberFeatured,
    FlexibleImage,
    FlexibleImagePair,
    FlexibleImageWithText,
    FlexibleText
  },
  props: {
    content: Array
  }
}
</script>

<style lang="scss">
.flexible-content {

  &__item {

    > .mb-100 {

      @include desktop-down {
        margin-bottom: 40px;
      }
    }
  }

  .base-image {
    cursor: pointer;
  }
}
</style>

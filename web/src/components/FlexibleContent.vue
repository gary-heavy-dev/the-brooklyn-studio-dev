<template>
  <div class="flexible-content">
    <div
      class="flexible-content__item flex"
      v-for="(block, index) in content"
      :key="index"
    >
      <LinkGallery
        v-if="block._type === 'linkGallery'"
      />
      <CtaGallery
        v-if="block._type === 'ctaGallery'"
        :content="block"
      />
      <CtaSimple
        v-if="block._type === 'ctaSimple'"
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
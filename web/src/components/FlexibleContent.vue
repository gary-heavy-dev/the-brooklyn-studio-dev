<template>
  <div class="flexible-content">
    <div
      class="flexible-content__item"
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
      />
      <TeamMemberFeatured
        v-if="block._type === 'featuredTeamMember'"
      />
    </div>
  </div>
</template>

<script>
import LinkGallery from '~/components/LinkGallery'
import CtaGallery from '~/components/CtaGallery'
import CtaSimple from '~/components/CtaSimple'
import TeamMemberFeatured from '~/components/TeamMemberFeatured'

export default {
  components: {
    LinkGallery,
    CtaGallery,
    CtaSimple,
    TeamMemberFeatured
  },
  props: {
    content: Array
  }
}
</script>
<template>
  <Layout>
    <div class="home">
			<IntroAnimation
				v-show="introStatus == null"
				@passed="hideIntro"
    	/>
      <Intro
        :content="content.introSection"
        :layout="'primary'"
      />
      <FlexibleContent :content="content.flexibleContent" />
    </div>
  </Layout>
</template>

<script>
import Intro from '~/components/Intro'
import FlexibleContent from '~/components/FlexibleContent'
import IntroAnimation from '~/components/IntroAnimation'

export default {
  components: {
    Intro,
		IntroAnimation,
    FlexibleContent
  },
  props: {
    content: Object
  },
	data() {
    return {
      introStatus: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('intro') : null
    }
  },
  methods: {
    hideIntro() {
      this.introStatus = true
    }
  },
}
</script>

<template>
  <div class="news-post flex fw w-100">
    <Breadcrumbs :previous="breadcrumbLinks" :current="content.title" />
    <div class="container">
      <NewsPostHero :content="content" />
    </div>
    <FlexibleContent :content="content.flexibleContent" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import NewsPostHero from '~/components/NewsPostHero'
import FlexibleContent from '~/components/FlexibleContent'

export default {
  components: {
    Breadcrumbs,
    NewsPostHero,
    FlexibleContent
  },
  props: {
    content: Object
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          copy: 'Studio News',
          link: '/news'
        },
        {
          copy: 'News Feed',
          link: '/news/feed'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/utils';

.news-post {

	.flexible-content {
	width: 100%;
	}

  * {
    grid-gap: 0 36px;
  }

	// Apply smaller margin-bottoms to flexible content of blog-posts
	.flexible-image-with-text-simple,
	.flexible-image-with-text,
	.flexible-image,
	.flexible-image-gallery,
	.flexible-image-pair,
	.flexible-image-pair-simple,
	.flexible-quote,
	.flexible-text,
	.news-post-hero {
		@extend .mb-50;
	}

  .flexible-text {
    @include desktop {
      display: grid;
      grid-template-columns: repeat(12, 1fr);

      > * {
        grid-column: 2/12;
      }
    }

    h4 {
      margin-bottom: 13px;

      @include desktop {
        margin-bottom: 22px;
      }
    }
  }
}
</style>

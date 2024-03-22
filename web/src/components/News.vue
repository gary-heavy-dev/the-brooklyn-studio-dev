<template>
  <Layout>
    <HeroSecondary
      :title="content.title"
      :image="content.hero.image"
    />
    <CtaSimple
			v-if="ctaImage.asset"
      :content="ctaObject"
      class="news__cta"
    />
    <NewsFeedSlider :content="content" />
    <section class="awards p-100 flex fd-c">
      <div class="container">
        <h2 class="h2 upper">Awards</h2>
        <ul class="list--nostyle list--two-column color--gray-tertiary">
          <li
            v-for="(award, index) in content.awards"
            :key="index"
          >
            <span v-if="award.title">{{ award.title }}, </span>
            <span v-if="award.year">{{ award.year }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section
      class="press flex fd-c"
      v-if="content.press.length"
    >
      <div class="container mb-100">
        <h2 class="h2 upper">Press</h2>
        <ul class="list--nostyle list--two-column color--gray-tertiary">
          <li
            v-for="(press, index) in content.press"
            :key="index"
          >
            <span v-if="press.title" class="color--navy-light">{{ press.title }}</span>
            <span v-if="press.pubDate">, {{ press.pubDate}}</span>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
import HeroSecondary from '~/components/HeroSecondary'
import CtaSimple from './CtaSimple.vue'
import NewsFeedSlider from './NewsFeedSlider.vue'

export default {
  components: {
    HeroSecondary,
    CtaSimple,
    NewsFeedSlider
  },
  props: {
    content: Object
  },
	data() {
		return {
			ctaImage: this.content.featuredNews.altThumbnail.asset
			? this.content.featuredNews.altThumbnail
			: this.content.featuredNews.mainImage.asset
			? this.content.featuredNews.mainImage
			: ''
		}
	},
  computed: {
    ctaLink() {
      if (this.content.featuredNews.link) {
        return this.content.featuredNews.link
      } else if (this.content.featuredNews.slug.current) {
        return '/news/' + this.content.featuredNews.slug.current
      }
    },
    ctaObject() {
      return {
        largeText: this.content.featuredNews.title,
        _rawCopy: this.content.featuredNews._rawExcerpt,
        linkText: 'Read More',
        link: this.ctaLink,
        image: {
          asset: {
            url: this.ctaImage.asset.url,
            metadata: {
              dimensions: {
                height: this.ctaImage.asset.metadata.dimensions.height,
                width: this.ctaImage.asset.metadata.dimensions.width
              }
            }
          },
          alt: this.ctaImage.alt
        },
        backgroundColor: {
          label: 'white'
        },
        imageStyle: 'full',
        imageWidth: '7',
        textLocation: 'left',
        paddingSize: '100',
        reverseMobile: false
      }
    }
  }
}
</script>

<style lang="scss">
.news__cta {

  @include desktop-down {

    .image-wrapper {
      padding-left: var(--grid-margin);
      margin-bottom: 100px;
    }
  }
}
</style>
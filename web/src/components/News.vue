<template>
  <Layout>
    <HeroSecondary
      :title="content.title"
      :image="content.hero.image"
    />
    <CtaSimple
      :content="ctaObject"
      class="news__cta"
    />
    <section class="awards pt-100 mb-100 flex fd-c">
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
    <section class="press flex fd-c">
      <div class="container mb-100">
        <h2 class="h2 upper">Press</h2>
        <ul class="list--nostyle list--two-column color--gray-tertiary">
          <li
            v-for="(press, index) in content.press"
            :key="index"
          >
            <span v-if="press.title" class="color--navy">{{ press.title }}</span>
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

export default {
  components: {
    HeroSecondary,
    CtaSimple
  },
  props: {
    content: Object
  },
  computed: {
    ctaObject() {
      return {
        largeText: this.content.featuredNews.title,
        _rawCopy: this.content.featuredNews._rawExcerpt,
        linkText: 'Read More',
        link: this.content.featuredNews.link,
        image: {
          asset: {
            url: this.content.featuredNews.mainImage.asset.url,
            metadata: {
              dimensions: {
                height: this.content.featuredNews.mainImage.asset.metadata.dimensions.height,
                width: this.content.featuredNews.mainImage.asset.metadata.dimensions.width
              }
            }
          },
          alt: this.content.featuredNews.mainImage.alt
        },
        bgColor: {
          title: 'gray-light'
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
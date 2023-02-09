<template>
  <div class="news-feed flex fw">
    <Breadcrumbs
      :previous="breadcrumbLinks"
      :current="title"
    />
    <NewsFeedGrid :content="$static.news" />
  </div>
</template>

<script>
import NewsFeedGrid from '~/components/NewsFeedGrid'
import Breadcrumbs from '~/components/Breadcrumbs'

export default {
  components: {
    NewsFeedGrid,
    Breadcrumbs
  },
  props: {
    title: String
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          copy: 'Studio News',
          link: '/news'
        }
      ]
    }
  }
}
</script>

<static-query>
{
  news: allSanityNews(sortBy: "publishedAt") {
    edges {
      node {
        title
        slug {
          current
        }
        publishedAt (format: "M/D/YY")
        altThumbnail {
          caption
          captionStyle
          asset {
            url
            metadata {
              lqip
            }
          }
          alt
        }
        mainImage {
          asset {
            url
          }
          alt
        }
        flexibleContent {
					... on SanityFlexiblePullQuote {
						_type
						text
					}
          ... on SanitySimpleImagePair {
            imageLeft {
              asset {
                url
              }
              caption
              alt
            }
            imageRight {
              asset {
                url
              }
              caption
              alt
            }
          }
          ... on SanitySimpleImageWithText {
            image {
              asset {
                url
              }
              caption
              alt
            }
            imageLocation
            reverseMobile
            _rawText
          }
          ... on SanitySimplePortableTextWrapper {
            _rawExcerptPortableText
          }
          ... on SanitySimpleGallery {
            images {
              asset {
                url
              }
              caption
              alt
            }
          }
        }
      }
    }
  }
}
</static-query>
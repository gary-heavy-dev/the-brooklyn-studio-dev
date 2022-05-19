<template>
  <div class="news-feed flex pt-80">
    <NewsFeedGrid :content="$static.news" />
  </div>
</template>

<script>
import NewsFeedGrid from '~/components/NewsFeedGrid'

export default {
  components: {
    NewsFeedGrid
  },
}
</script>

<static-query>
{
  news: allSanityNews {
    edges {
      node {
        title
        slug {
          current
        }
        publishedAt
        mainImage {
          asset {
            url
          }
          alt
        }
        flexibleContent {
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
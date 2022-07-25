<template>
  <Homepage :content="$page.page" />
</template>

<script>
import Homepage from '~/components/Homepage'

export default {
  components: {
    Homepage
  },
  computed: {
    pageTitle() {
      return 'Home' 
    },
    // firstHeroImage() {
    //   return this.$page.page.slides.length ? this.$page.page.slides[0].image : null
    // },
    ogImage() {
      // return this.$page.page.ogImage || this.firstHeroImage || this.$page.settings.ogImage
      return this.$page.settings.ogImage
    },
    twitterImage() {
      // return this.$page.page.twitterImage || this.firstHeroImage || this.$page.settings.twitterImage
      return this.$page.settings.twitterImage
    },
    metaDescription () {
      const description = 'The Brooklyn Studio is an interdisciplinary architecture and design firm committed to restoring and enhancing New York City\'s historic fabric.'
      return description
    }
  },
  metaInfo() {
    return {
      title: this.pageTitle,
      titleTemplate: '%s | ' + this.$page.settings.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.metaDescription
        },
         {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.metaDescription
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.ogImage ? `${this.ogImage.asset.url}?w=1200&h=630&fit=crop` : ''
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDescription
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: this.twitterImage ? `${this.twitterImage.asset.url}?w=800&h=418&fit=crop` : ''
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
}
</script>

<page-query>
{
  settings: sanitySiteSettings (id: "siteSettings") {
    title
    description
    ogImage {
      asset {
        url
      }
    }
    twitterImage {
      asset {
        url
      }
    }
  }
  page: sanityHome(id: "542616c1-f362-4f33-b903-4f4add184641") {
    introSection {
      introLarge
      introLink
      introLinkText
      introImagePrimary {
        alt
        caption
        captionStyle
        asset {
          url
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
      introImageSecondary {
        alt
        caption
        captionStyle
        asset {
          url
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
      _rawIntroSmall
    }
    flexibleContent {
      ... on SanityCtaGallery {
        _type
        heading
        _rawCopy
        linkText
        link
        gallery {
          caption
          captionStyle
          asset {
            url
          }
          alt
        }
        imageGalleryLocation
        reverseMobile
        bgColor {
          title
          value
        }
        paddingSize
      }
      ... on SanityCtaSimple {
        _type
        heading
        largeText
        _rawCopy
        linkText
        link
        image {
          caption
          captionStyle
          asset {
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
          alt
        }
        bgColor {
          title
          value
        }
        imageStyle
        imageWidth
        textLocation
        reverseMobile
        paddingSize
      }
      ... on SanityFeaturedTeamMember {
        _type
        heading
        _rawCopy
        teamMember {
          name
          title
          slug {
            current
          }
          image {
            caption
            captionStyle
            asset {
              url
            }
            alt
          }
        }
      }
      ... on SanityLinkGallery {
        _type
        title
        intro
        image {
          caption
          captionStyle
          asset {
            url
          }
          alt
          caption
          captionStyle
        }
        links {
          copy
          image {
            caption
            captionStyle
            asset {
              url
            }
            alt
            caption
            captionStyle
          }
          link {
            ... on SanityAdaptiveReuse {
              slug {
                current
              }
              heroImage {
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
            }
            ... on SanityInteriorDesign {
              slug {
                current
              }
              heroImage {
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
            }
            ... on SanityResidentialArchitecture {
              slug {
                current
              }
              heroImage {
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
            }
          }
        }
      }
    }
  }
}
</page-query>

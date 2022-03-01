<template>
  <Homepage :content="$page.page" />
</template>

<script>
import Homepage from '~/components/Homepage'

export default {
  components: {
    Homepage
  },
  metaInfo() {
    return {
      title: 'Home',
      titleTemplate: '%s | The Brooklyn Studio',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'The Brooklyn Studio is an interdisciplinary architecture and design firm committed to restoring and enhancing New York City\'s historic fabric.'
        },
        // {
        //   key: 'og:title',
        //   name: 'og:title',
        //   content: (this.casestudy ? this.casestudy.title : '') + ' ' + this.$static.metadata.siteName
        // },
        // {
        //   key: 'og:description',
        //   name: 'og:description',
        //   content: this.casestudy ? this.casestudy.description : '',
        // },
        // {
        //   key: 'og:image',
        //   name: 'og:image',
        //   content: this.casestudy && this.casestudy.mainImage.asset ? this.casestudy.mainImage.asset.url : (this.$static.settings.ogImage ? this.$static.settings.ogImage.asset.url : '')
        // },
        // {
        //   key: 'twitter:title',
        //   name: 'twitter:title',
        //   content: (this.casestudy ? this.casestudy.title : '') + ' ' + this.$static.metadata.siteName
        // },
        // {
        //   key: 'twitter:description',
        //   name: 'twitter:description',
        //   content: this.casestudy ? this.casestudy.description : '',
        // },
        // {
        //   key: 'twitter:image',
        //   name: 'twitter:image',
        //   content: this.casestudy && this.casestudy.mainImage.asset ? this.casestudy.mainImage.asset.url : (this.$static.settings.ogImage ? this.$static.settings.ogImage.asset.url : '')
        // }
      ]
    }
  }
}
</script>

<page-query>
{
  page: sanityHome(id: "542616c1-f362-4f33-b903-4f4add184641") {
    introSection {
      introLarge
      introLink
      introLinkText
      introImagePrimary {
        alt
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

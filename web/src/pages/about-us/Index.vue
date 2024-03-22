<template>
  <AboutUs :content="$page.page" />
</template>

<script>
import AboutUs from '~/components/AboutUs'

export default {
  components: {
    AboutUs
  },
  computed: {
    pageTitle() {
      return this.$page.page.title 
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
      const description = 'The Brooklyn Studio is an architecture and interior design firm committed to restoring and enhancing New York City\'s historic fabric.'
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
          property: 'twitter:title',
          content: this.$page.settings.title + ' | ' + this.pageTitle
        },
        {
          key: 'twitter:description',
          property: 'twitter:description',
          content: this.metaDescription
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: this.twitterImage ? `${this.twitterImage.asset.url}?w=800&h=418&fit=crop` : ''
        },
        {
          key: 'twitter:card',
          property: 'twitter:card',
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
  page: sanityAbout(id: "09600be0-7d43-4636-8569-fed6ef5d2985") {
    title
    hero {
      image {
        alt
        caption
        captionStyle
        asset {
          url
          metadata {
            lqip
          }
        }
      }
    }
    introSection {
      introHeading
      _rawIntroCopy
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
            lqip
          }
        }
      }
    }
    flexibleContent {
      ... on SanityCtaGallery {
        _type
        heading
        navTitle
        _rawCopy
        linkText
        link
        gallery {
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
        backgroundColor {
          label
          value
        }
        imageGalleryLocation
        reverseMobile
        paddingSize
      }
      ... on SanityCtaSimple {
        _type
        heading
        navTitle
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
        backgroundColor {
          label
          value
        }
        imageStyle
        imageWidth
        textLocation
        reverseMobile
        paddingSize
      }
      ... on SanityScrollingGallery {
        _type
        title
        navTitle
        intro
        image {
          caption
          captionStyle
          asset {
            url
          }
          alt
        }
        sections {
          heading
          copy
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
      ... on SanityFeaturedTeamMember {
        _type
        navTitle
        heading
      }
      ... on SanityLinkGallery {
        _type
        navTitle
        title
      }
      ... on SanityCtaComplex {
        _type
        navTitle
        leftImage {
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
        heading
        _rawCopy
        links {
          link
          linkText
        }
        rightImage {
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
      }
    }
  }
}
</page-query>

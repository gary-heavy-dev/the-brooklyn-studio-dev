<template>
  <AboutUs :content="$page.page" />
</template>

<script>
import AboutUs from '~/components/AboutUs'

export default {
  components: {
    AboutUs
  },
  metaInfo() {
    return {
      title: 'About Us',
      titleTemplate: '%s | The Brooklyn Studio',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Our approach to architecture and design is at once rigorously academic and endlessly playful. We take seriously our role as stewards of the built environment—always mindful of the historical, cultural, and environmental context in which we work.'
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

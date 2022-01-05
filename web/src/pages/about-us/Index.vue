<template>
  <AboutUs :content="$page.page" />
</template>

<script>
import AboutUs from '~/components/AboutUs'

export default {
  components: {
    AboutUs
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
        asset {
          url
          metadata {
            lqip
          }
        }
      }
      introImageSecondary {
        alt
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
        _rawCopy
        linkText
        link
        gallery {
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
        largeText
        _rawCopy
        linkText
        link
        image {
          asset {
            url
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
        intro
        image {
          asset {
            url
          }
          alt
        }
        sections {
          heading
          copy
          image {
            asset {
              url
            }
            alt
          }
        }
      }
      ... on SanityFeaturedTeamMember {
        _type
        heading
      }
      ... on SanityLinkGallery {
        _type
        title
      }
      ... on SanityCtaComplex {
        _type
        leftImage {
          asset {
            url
            metadata {
              lqip
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
</page-query>

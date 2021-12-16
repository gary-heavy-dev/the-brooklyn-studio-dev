<template>
  <Homepage :content="$page.page" />
</template>

<script>
import Homepage from '~/components/Homepage'

export default {
  components: {
    Homepage
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
        }
      }
      introImageSecondary {
        alt
        asset {
          url
        }
      }
      _rawIntroSmall
    }
    flexibleContent {
      ... on SanityCtaGallery {
        _type
        heading
        copy
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
        links {
          copy
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

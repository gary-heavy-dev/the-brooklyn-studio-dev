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
      introLinkText
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
            metadata {
              lqip
            }
          }
          alt
        }
        imageGalleryLocation
        reverseMobile
        bgColor {
          value
        }
      }
      ... on SanityCtaSimple {
        _type
        heading
      }
      ... on SanityFeaturedTeamMember {
        _type
        heading
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

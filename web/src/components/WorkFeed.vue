<template>
  <div class="work-feed">
    <WorkFeedGrid
      data-category="residential-architecture"
      :content="$static.res"
      :prev="'Adaptive Reuse'"
      :next="'Interior Design'"
    />
    <WorkFeedGrid
      data-category="interior-design"
      :content="$static.int"
      :prev="'Residential Architecture'"
      :next="'Adaptive Reuse'"
    />
    <WorkFeedGrid
      data-category="adaptive-reuse"
      :content="$static.ad"
      :prev="'Interior Design'"
      :next="'Residential Architecture'"
    />
  </div>
</template>

<script>
import WorkFeedGrid from '~/components/WorkFeedGrid'

export default {
  components: { WorkFeedGrid },

  computed: {
    grids() {
      return document.getElementsByClassName('work-feed__grid')
    }
  },

  mounted() {
    this.updateActiveGridFromHash(this.$route.hash)
  },

  watch: {
    '$route.hash'(newHash) {
      this.updateActiveGridFromHash(newHash)
    }
  },

  methods: {
    updateActiveGridFromHash(hash) {
      const category = (hash || '#residential-architecture').replace('#', '')
      const grids = this.grids

      Array.prototype.forEach.call(grids, grid => {
        if (grid.classList.contains('current-grid')) {
          grid.classList.add('filtering')
          setTimeout(() => {
            grid.classList.remove('current-grid', 'filtering')
          }, 300)
        }
      })

      setTimeout(() => {
        Array.prototype.forEach.call(grids, grid => {
          if (grid.dataset.category === category) {
            grid.classList.add('filtering')
            grid.classList.add('current-grid', 'loaded')
            setTimeout(() => grid.classList.remove('filtering'), 250)
          }
        })
      }, 300)
    }
  }
}
</script>

<style lang="scss">
.work-feed__grid {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>

<static-query>
{
  res: sanityResidentialArchitecture(id: "a81592fc-d8ae-4c15-8315-9005a57b2d75") {
    title
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
    mobileHeroImage {
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
    projectReferences {
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
      project {
        title
        slug {
          current
        }
        displayTitle {
          inactiveLink
          overlayText
        }
        image {
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
        projectCategories {
          title
        }
      }
    }
    projectCategories {
      title
      slug {
        current
      }
    }
  }
  int: sanityInteriorDesign(id: "ee8279ca-9f8d-47c5-926a-c88d46d45d5b") {
    title
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
    mobileHeroImage {
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
    projectReferences {
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
      project {
        title
        slug {
          current
        }
        displayTitle {
          inactiveLink
          overlayText
        }
        image {
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
  ad: sanityAdaptiveReuse(id: "35a99ecb-fd40-41ae-a0e0-8ec5527ebf44") {
    title
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
    mobileHeroImage {
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
    projectReferences {
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
      project {
        title
        slug {
          current
        }
        displayTitle {
          inactiveLink
          overlayText
        }
        image {
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
</static-query>

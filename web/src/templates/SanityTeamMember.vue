<template>
  <Layout>
    <TeamMember :content="$page.teamMember" />
  </Layout>
</template>

<script>
import TeamMember from '~/components/TeamMember'

export default {
  components: {
    TeamMember
  },
  computed: {
    description() {
      const des = this.$page.teamMember._rawBio ? this.$toPlainText(this.$page.teamMember._rawBio) : this.$page.settings.description
      const count = 155
      return des.slice(0, count) + (des.length > count ? '...' : '')
    }
  },
  metaInfo() {
    return {
      title: this.$page.teamMember.name,
      titleTemplate: '%s | ' + this.$page.settings.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description
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
query TeamMember ($id: ID!) {
  settings: sanitySiteSettings (id: "siteSettings") {
    title
    description
  }
  teamMember: sanityTeamMember (id: $id) {
    name
    slug {
      current
    }
    title
    _rawBio
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
    questionnaire {
      perfectHappiness
      greatestFear
      greatestExtravagance
      talent
      favoriteColor
      favoriteVirtue
      livingArchitect
      deadArchitect
      buildingTrait
      projectType
      favoriteAuthor
      heroOfFiction
      favoriteArtist
      historicalFigure
      treasuredPossession
      whereToLive
      qualityInOthers
      twoBooks
    }
  }
}
</page-query>

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
  }
}
</script>

<page-query>
query TeamMember ($id: ID!) {
  teamMember: sanityTeamMember (id: $id) {
    name
    slug {
      current
    }
    title
    _rawBio
    image {
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

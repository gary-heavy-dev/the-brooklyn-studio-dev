<template>
  <div class="team-feed">
    <SecondaryHero
      :title="content.title"
      :image="content.hero.image"
    />
    <div class="flex">
      <div class="team-feed__grid container grid">
        <g-link
          v-for="(member, index) in $static.team.edges"
          :key="index"
          class="team-feed__card"
          :to="'/team/' + member.node.slug.current"
        >
          <BaseImage
            v-if="member.node.image"
            :src="member.node.image"
            :lazy="true"
            :x="286"
            :y="375"
          />
          <h3
            v-if="member.node.name"
            class="h4"
          >{{ member.node.name }}</h3>
          <span v-if="member.node.title">{{ member.node.title }}</span>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryHero from '~/components/SecondaryHero'

export default {
  components: {
    SecondaryHero
  },
  data() {
    return {
      sizes: {
        mobile: 196,
        tablet: 320,
        laptop: 272,
        desktop: 286,
        hd: 386,
        fourK: 772
      }
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss">
.team-feed {

  &__grid {
    grid-template-columns: repeat(2, 1fr);

    @include laptop {
      grid-template-columns: repeat(3, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(12, 1fr);
    }
  }

  &__card {
    text-decoration: none;
    margin-bottom: 40px;
    grid-column: span 1;
    
    @include laptop {
      margin-bottom: 100px;
    }

    @include desktop {
      grid-column: span 3;
    }
  }
}
</style>

<static-query>
{
  team: allSanityTeamMember(sortBy: "name", order: ASC) {
    edges {
      node {
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
  }
}
</static-query>
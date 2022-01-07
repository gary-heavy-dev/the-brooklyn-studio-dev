<template>
  <div class="team-feed">
    <HeroSecondary
      :title="content.title"
      :image="content.hero.image"
      :margin="true"
    />
    <div class="flex w-100">
      <div class="team-feed__grid container grid">
        <g-link
          v-for="(member, index) in $static.team.edges"
          :key="index"
          class="team-feed__card"
          :to="'/about-us/team/' + member.node.slug.current"
        >
          <BaseImage
            v-if="member.node.image"
            class="mb-30"
            :src="member.node.image"
            :lazy="true"
            :sizes="sizes"
            :x="286"
            :y="375"
          />
          <h3
            v-if="member.node.name"
            class="color--navy"
          >{{ member.node.name }}</h3>
          <span
            v-if="member.node.title"
            class="color--gray-tertiary sub upper"
          >{{ member.node.title }}</span>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSecondary from '~/components/HeroSecondary'

export default {
  components: {
    HeroSecondary
  },
  data() {
    return {
      sizes: {
        mobile: 196,
        tablet: 320,
        laptop: 272,
        desktop: 286,
        hd: 374,
        fourK: 708
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
    grid-gap: 0 20px;

    @include laptop {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0 36px;
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
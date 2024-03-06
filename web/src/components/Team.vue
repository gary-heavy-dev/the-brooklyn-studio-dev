<template>
  <div class="team-feed">
    <HeroSecondary :title="content.title" :image="content.hero.image" :margin="true" />
    <div class="flex w-100">
      <div class="team-feed__grid container">
        <g-link
          v-for="(member, index) in sortedTeamMembers"
          :key="index"
          class="team-feed__card"
          :to="'/about-us/team/' + member.node.slug.current"
        >
          <div class="grid__card">
            <BaseImage
              v-if="member.node.secondaryImage || member.node.image"
              class="mb-30"
              :src="member.node.secondaryImage ? member.node.secondaryImage : member.node.image"
              :lazy="true"
              :sizes="sizes"
              :x="1042"
              :y="1302"
              :caption="
                member.node.secondaryImage
                  ? member.node.secondaryImage.caption
                  : member.node.image.caption
              "
              :captionStyle="
                member.node.secondaryImage
                  ? member.node.secondaryImage.captionStyle
                  : member.node.image.captionStyle
              "
            />
            <h3 v-if="member.node.name" class="color--navy-light">{{ member.node.name }}</h3>
            <span v-if="member.node.title" class="color--gray-tertiary sub upper">{{
              member.node.title
            }}</span>
          </div>
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
  },
	computed: {
  sortedTeamMembers() {
    return this.$static.team.edges.sort((a, b) => {
      if (a.node.excludeAsFeaturedTeamMember && !b.node.excludeAsFeaturedTeamMember) {
        return 1;
      }
      if (!a.node.excludeAsFeaturedTeamMember && b.node.excludeAsFeaturedTeamMember) {
        return -1;
      }
      return 0;
    });
  },
}
}
</script>

<style lang="scss">
.team-feed {
  &__grid {
    display: grid;
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
  team: allSanityTeamMember(sortBy: "lastName", order: ASC) {
    edges {
      node {
        name
        title
        slug {
          current
        }
        image {
          caption
          captionStyle
          asset {
            url
          }
          alt
        }
        secondaryImage {
          caption
          captionStyle
          asset {
            url
          }
          alt
        }
				excludeAsFeaturedTeamMember
      }
    }
  }
}
</static-query>

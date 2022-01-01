<template>
  <section class="team-member-featured flex color--white background--navy w-100 p-100">
    <div class="team-member-featured__inner container grid grid--12-desktop">
      <div class="team-member-featured__copy flex ai-c">
        <div class="team-member-featured__copy-inner">
          <h2
            v-if="content.heading"
            class="upper h2"
          >{{ content.heading }}</h2>
          <BaseBlockContent
            v-if="content._rawCopy"
            :blocks="content._rawCopy"
          />
          <g-link
            class="upper button"
            :to="'/team/' + featuredMember.slug.current"
          >Meet {{ featuredMember.name }}<span v-if="featuredMember.title">, {{ featuredMember.title }}</span></g-link>
        </div>
      </div>
      <BaseImage
        v-if="featuredMember.image"
        :src="featuredMember.image"
        :sizes="sizes"
        :lazy="true"
        :x="286"
        :y="375"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  },
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 661,
        laptop: 855,
        desktop: 286,
        hd: 386,
        fourK: 772
      }
    }
  },
  computed: {
    featuredMember() {
      if (this.content.teamMember) {
        return this.content.teamMember
      } else {
        return {
          image: {
            asset: {
              url: 'https://placekitten.com/g/286/375'
            },
            alt: 'BKS KITTEN!'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.team-member-featured {

  &__copy {

    @include desktop {
      grid-column: span 8;
    }

    p {
      max-width: var(--max-width--readable-lg);
    }
  }

  .base-image {

    @include desktop {
      grid-column: span 3/13;
    }
  }
}
</style>

<static-query>
{
  allSanityTeamMember {
    edges {
      node {
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
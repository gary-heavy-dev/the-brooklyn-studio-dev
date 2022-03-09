<template>
  <section
    class="team-member-featured flex color--white background--navy w-100 p-100 p-mobile-copy-block"
    :id="content.navTitle ?  $toKebabCase(content.navTitle) : ''"
  >
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
            class="upper button mt-60"
            :to="'/about-us/team/' + featuredMember.slug.current"
            @click.native="$scrollToTop"
          ><span>Meet {{ featuredMember.name }}, </span><span v-if="featuredMember.title">{{ featuredMember.title }}</span></g-link>
        </div>
      </div>
      <BaseImage
        v-if="featuredMember.image"
        :src="featuredMember.image"
        :sizes="sizes"
        :lazy="true"
        :x="286"
        :y="375"
        :caption="featuredMember.image.caption"
        :captionStyle="featuredMember.image.captionStyle"
        v-view="$iAmRevealed"
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
        const mems = this.$static.allSanityTeamMember.edges.length
        const i = Math.floor(Math.random() * mems)
        return this.$static.allSanityTeamMember.edges[i].node
      }
    },
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

    .button {

      @include desktop-down {
        margin-bottom: 41px;

        span {
          display: block;
        }
      }
    }
  }

  .base-image {

    @include desktop {
      grid-column: span 3/13;
    }

    @include desktop-down {
      max-width: 73%;
      margin: 0 auto;
    }
  }
}
</style>

<static-query>
{
  allSanityTeamMember {
    edges {
      node {
        name
        title
        image {
          caption
          captionStyle
          asset {
            url
          }
          alt
        }
        slug {
          current
        }
      }
    }
  }
}
</static-query>
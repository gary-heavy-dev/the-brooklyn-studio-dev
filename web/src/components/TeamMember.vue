<template>
  <div class="team-member flex w-100 fw" id="teamMember">
    <div class="team-member__inner container grid grid--12-desktop pb-80">
      <div class="team-member__headshot">
        <div class="breadcrumbs pb-40 upper sub color--gray-tertiary">
          <g-link
            to="/about-us"
          >
            <span>About</span>
          </g-link>
          <g-link
            to="/about-us/team"
          >
            <span>People</span>
          </g-link>
          <span
            v-if="content.name"
          >{{ content.name }}</span>
        </div>
        <BaseImage
          v-if="content.image"
          :src="content.image"
          :lazy="true"
          :sizes="sizes"
          :x="286"
          :y="375"
        />
      </div>
      <div class="team-member__copy mw-readable">
        <h1
          v-if="content.name"
          class="h3 h3--alt color--navy"
        >{{ content.name }}</h1>
        <div
          v-if="content.title"
          class="team-member__title mb-40 sub--lg upper color--gray-tertiary"
        >{{ content.title }}</div>
        <BaseBlockContent
          v-if="content._rawBio"
          class="small"
          :blocks="content._rawBio"
        />
        <TeamMemberQuestionnaire
          v-if="content.questionnaire"
          :content="content.questionnaire"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberQuestionnaire from '~/components/TeamMemberQuestionnaire'

export default {
  components: {
    TeamMemberQuestionnaire
  },
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 661,
        laptop: 855,
        desktop: 387,
        hd: 521,
        fourK: 1042 // by 1366
      }
    }
  },
  props: {
    content: Object
  },
  methods: {
    // https://stackoverflow.com/questions/52637835/dynamically-change-background-color-on-scroll
    // https://codepen.io/atomiks/pen/dgMNwG
    fadeBg() {
      const [red, green, blue] = [248, 247, 247]
      const bgZone = document.getElementById('teamMember')
      const y = 1 + (window.scrollY || window.pageYOffset) / 100000
      const [r, g, b] = [red * y, green * y, blue * y].map(Math.round)
      bgZone.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.fadeBg);
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("scroll", this.fadeBg);
    }
  }
}
</script>

<style lang="scss">
.team-member {
  position: relative;
  // background: rgb(255,255,255);
  // background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(248,247,247,1) 100%);

  &__inner {
    min-height: 100vh;
    background-color: inherit;
  }

  &__headshot {

    @include desktop {
      position: sticky;
      top: 0px;
      margin-top: calc(var(--header-height) * -1);
      grid-column: span 4;
      height: fit-content;
    }
  }

  &__copy {
    background-color: inherit;

    @include desktop {
      grid-column: 6/13;
      padding-top: 110px;
    }
  }

  .breadcrumbs {
    padding-top: 108px;

    a {
      text-decoration: none;

      &:after {
        content: "/";
        padding: 0 9px;
      }

      span,
      &:after {
        transition: opacity 0.2s ease-in-out;
        opacity: 0.7;
      }

      span:hover {
        opacity: 1;
      }
    }
  }
}
</style>
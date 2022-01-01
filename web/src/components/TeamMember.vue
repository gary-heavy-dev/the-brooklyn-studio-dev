<template>
  <div class="team-member flex fw background--gray-light">
    <div class="team-member__inner container grid grid--12-desktop pb-80">
      <div class="team-member__headshot">
        <div class="breadcrumbs pt-60 pb-40">
          <g-link
            class="color--gray-tertiary"
            to="/about-us"
          >About / </g-link>
          <g-link
            class="color--gray-tertiary"
            to="/team"
          >People / </g-link>
          <span v-if="content.name">{{ content.name }}</span>
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
          class="h3"
        >{{ content.name }}</h1>
        <div
          v-if="content.title"
          class="team-member__title"
        >{{ content.title }}</div>
        <BaseBlockContent
          v-if="content._rawBio"
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
  }
}
</script>

<style lang="scss">
.team-member {
  position: relative;

  &__inner {
    min-height: 100vh;
  }

  &__headshot {

    @include desktop {
      position: sticky;
      top: 35px;
      grid-column: span 4;
      height: fit-content;
    }
  }

  &__copy {

    @include desktop {
      grid-column: 6/13;
      padding-top: 110px;
    }
  }

  .breadcrumbs {

    a {
      text-decoration: none;
    }
  }
}
</style>
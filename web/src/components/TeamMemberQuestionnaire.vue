<template>
  <div class="team-member-questionnaire color--gray-tertiary">
    <div class="team-member-questionnaire__intro pb-20 mb-40">
      <div class="pt-100">
        <h3 class="h5 color--navy-light">The Proust Questionnaire</h3>
        <div class="small">Taking inspiration from a popular nineteenth-century parlor game, we sat down with each member of our team and asked them a few questions about their inspirations and aspirations.</div>
      </div>
      <!-- <div class="fade pb-40 w-100"></div> -->
    </div>
    <div class="team-member-questionnaire__questions">
      <div
        v-if="content.perfectHappiness"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your idea of perfect happiness?</h4>
        <span class="color--gray-tertiary" v-html="content.perfectHappiness"></span>
      </div>
      <div
        v-if="content.greatestFear"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your greatest fear?</h4>
        <span class="color--gray-tertiary" v-html="content.greatestFear"></span>
      </div>
      <div
        v-if="content.greatestExtravagance"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your greatest extravagance?</h4>
        <span class="color--gray-tertiary" v-html="content.greatestExtravagance"></span>
      </div>
      <div
        v-if="content.talent"
        class="mb-40"
      >
        <h4 class="color--navy-light">What talent would you most like to have?</h4>
        <span class="color--gray-tertiary" v-html="content.talent"></span>
      </div>
      <div
        v-if="content.favoriteColor"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your favorite color?</h4>
        <span class="color--gray-tertiary" v-html="content.favoriteColor"></span>
      </div>
      <div
        v-if="content.favoriteVirtue"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your favorite virtue?</h4>
        <span class="color--gray-tertiary" v-html="content.favoriteVirtue"></span>
      </div>
      <div
        v-if="content.livingArchitect"
        class="mb-40"
      >
        <h4 class="color--navy-light">Which living architect or designer do you most admire?</h4>
        <span class="color--gray-tertiary" v-html="content.livingArchitect"></span>
      </div>
      <div
        v-if="content.deadArchitect"
        class="mb-40"
      >
        <h4 class="color--navy-light">Which dead architect or designer do you most admire?</h4>
        <span class="color--gray-tertiary" v-html="content.deadArchitect"></span>
      </div>
      <div
        v-if="content.buildingTrait"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is the trait that you most appreciate in a building?</h4>
        <span class="color--gray-tertiary" v-html="content.buildingTrait"></span>
      </div>
      <div
        v-if="content.projectType"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your favorite type of project to work on?</h4>
        <span class="color--gray-tertiary" v-html="content.projectType"></span>
      </div>
      <div
        v-if="content.favoriteAuthor"
        class="mb-40"
      >
        <h4 class="color--navy-light">Who is your favorite author?</h4>
        <span class="color--gray-tertiary" v-html="content.favoriteAuthor"></span>
      </div>
      <div
        v-if="content.heroOfFiction"
        class="mb-40"
      >
        <h4 class="color--navy-light">Who is your hero of fiction?</h4>
        <span class="color--gray-tertiary" v-html="content.heroOfFiction"></span>
      </div>
      <div
        v-if="content.favoriteArtist"
        class="mb-40"
      >
        <h4 class="color--navy-light">Who is your favorite artist?</h4>
        <span class="color--gray-tertiary" v-html="content.favoriteArtist"></span>
      </div>
      <div
        v-if="content.historicalFigure"
        class="mb-40"
      >
        <h4 class="color--navy-light">Which historical figure do you most identify with?</h4>
        <span class="color--gray-tertiary" v-html="content.historicalFigure"></span>
      </div>
      <div
        v-if="content.treasuredPossession"
        class="mb-40"
      >
        <h4 class="color--navy-light">What is your most treasured possession?</h4>
        <span class="color--gray-tertiary" v-html="content.treasuredPossession"></span>
      </div>
      <div
        v-if="content.whereToLive"
        class="mb-40"
      >
        <h4 class="color--navy-light">Where would you like to live?</h4>
        <span class="color--gray-tertiary" v-html="content.whereToLive"></span>
      </div>
      <div
        v-if="content.qualityInOthers"
        class="mb-40"
      >
        <h4 class="color--navy-light">What quality do you most admire in others?</h4>
        <span class="color--gray-tertiary" v-html="content.qualityInOthers"></span>
      </div>
      <div
        v-if="content.twoBooks"
        class="mb-40"
      >
        <h4 class="color--navy-light">Stranded on a desert island, you have two books in your possession. What are they?</h4>
        <span class="color--gray-tertiary" v-html="content.twoBooks"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss">

.team-member-questionnaire {
  background-color: inherit;
  position: relative;
  z-index: 1;

  &__intro {
    position: sticky;
    top: 0px;
    background-color: inherit;
    border-bottom: 1px solid #908887;

    .h5 {
      
      @include desktop-down {
        margin-bottom: 8px;
      }
    }
  }

  &__questions {

    h4 {
      font-weight: 500;
    }
  }
}
</style>
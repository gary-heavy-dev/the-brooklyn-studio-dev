<template>
  <div class="team-member-questionnaire">
    <div class="team-member-questionnaire__intro">
      <div class="background--gray-light pt-80 pb-20">
        <h3 class="h5">The Proust Questionnaire</h3>
        <div>Taking inspiration from a popular nineteenth-century parlor game, we sat down with each member of our team and asked them a few questions about their inspirations and aspirations.</div>
      </div>
      <div class="fade pb-40 w-100"></div>
    </div>
    <div
      v-if="content.perfectHappiness"
      class="mb-40"
    >
      <h4>What is your idea of perfect happiness?</h4>
      <span>{{ content.perfectHappiness }}</span>
    </div>
    <div
      v-if="content.greatestFear"
      class="mb-40"
    >
      <h4>What is your greatest fear?</h4>
      <span>{{ content.greatestFear }}</span>
    </div>
    <div
      v-if="content.greatestExtravagance"
      class="mb-40"
    >
      <h4>What is your greatest extravagance?</h4>
      <span>{{ content.greatestExtravagance }}</span>
    </div>
    <div
      v-if="content.talent"
      class="mb-40"
    >
      <h4>What talent would you most like to have?</h4>
      <span>{{ content.talent }}</span>
    </div>
    <div
      v-if="content.favoriteColor"
      class="mb-40"
    >
      <h4>What is your favorite color?</h4>
      <span>{{ content.favoriteColor }}</span>
    </div>
    <div
      v-if="content.favoriteVirtue"
      class="mb-40"
    >
      <h4>What is your favorite virtue?</h4>
      <span>{{ content.favoriteVirtue }}</span>
    </div>
    <div
      v-if="content.livingArchitect"
      class="mb-40"
    >
      <h4>Which living architect do you most admire?</h4>
      <span>{{ content.livingArchitect }}</span>
    </div>
    <div
      v-if="content.deadArchitect"
      class="mb-40"
    >
      <h4>Which dead architect do you most admire?</h4>
      <span>{{ content.deadArchitect }}</span>
    </div>
    <div
      v-if="content.buildingTrait"
      class="mb-40"
    >
      <h4>What is the trait that you most appreciate in a building?</h4>
      <span>{{ content.buildingTrait }}</span>
    </div>
    <div
      v-if="content.projectType"
      class="mb-40"
    >
      <h4>What is your favorite type of project to work on?</h4>
      <span>{{ content.projectType }}</span>
    </div>
    <div
      v-if="content.favoriteAuthor"
      class="mb-40"
    >
      <h4>Who is your favorite author?</h4>
      <span>{{ content.favoriteAuthor }}</span>
    </div>
    <div
      v-if="content.favoriteArtist"
      class="mb-40"
    >
      <h4>Who is your favorite artist?</h4>
      <span>{{ content.favoriteArtist }}</span>
    </div>
    <div
      v-if="content.historicalFigure"
      class="mb-40"
    >
      <h4>Which historical figure do you most identify with?</h4>
      <span>{{ content.historicalFigure }}</span>
    </div>
    <div
      v-if="content.whereToLive"
      class="mb-40"
    >
      <h4>Where would you like to live?</h4>
      <span>{{ content.whereToLive }}</span>
    </div>
    <div
      v-if="content.qualityInOthers"
      class="mb-40"
    >
      <h4>What quality do you most admire in others?</h4>
      <span>{{ content.qualityInOthers }}</span>
    </div>
    <div
      v-if="content.twoBooks"
      class="mb-40"
    >
      <h4>Stranded on a desert island, you have two books in your possession. What are they?</h4>
      <span>{{ content.twoBooks }}</span>
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

  &__intro {
    position: sticky;
    top: 0px;
  }
}
</style>
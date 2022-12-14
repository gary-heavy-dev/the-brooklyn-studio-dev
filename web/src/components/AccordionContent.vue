<template>
  <div class="accordion-content">
    <div
      v-for="(block, index) in content.textBlocks"
      :key="index"
      class="mb-60 mw-readable"
    >
      <h3
        v-if="block.heading"
        class="h3 mb-15"
      >{{ block.heading }}</h3>
      <BaseBlockContent
        v-if="block._rawCopy"
        :blocks="block._rawCopy"
      />
    </div>
    <div class="responsibilities">
      <h3
        v-if="content.responsibilities"
        class="h5 mb-15"
      >Responsibilities</h3>
      <div
        v-for="(responsibility, index) in content.responsibilities"
        :key="'responsibility-' + index"
        class="mb-60 mw-readable"
      >
        <h4
          v-if="responsibility.heading"
          class="medium mb-15"
        >{{ responsibility.heading }}</h4>
        <ul>
          <li
            v-for="(listItem, index) in responsibility.listItems"
            :key="'responsibility-list-item-' + index"
          >{{ listItem }}</li>
        </ul>
      </div>
    </div>
    <div
      v-if="content.requirements"
      class="requirements mb-60"
    >
      <h3
        class="h5 mb-15"
      >Qualifications</h3>
      <ul>
        <li
          v-for="(requirement, index) in content.requirements"
          :key="'requirement-' + index"
        >{{ requirement }}</li>
      </ul>
    </div>
    <BaseBlockContent
      v-if="$static.notes._rawPostNotes"
      class="mb-30"
      :blocks="$static.notes._rawPostNotes"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<static-query>
{
  notes: sanityCareers(id: "b5f270ac-9a77-4236-bf33-70041dd025c6") {
    _rawPostNotes
  }
}
</static-query>

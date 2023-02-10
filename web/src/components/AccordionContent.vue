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

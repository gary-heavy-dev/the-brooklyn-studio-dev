<template>
  <div class="flexible-text container flex jc-c mb-100">
    <div class="flexible-text__inner text-center mw-readable--large">{{ content.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>
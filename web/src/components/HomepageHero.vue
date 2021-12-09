<template>
  <section class="homepage-hero background--navy">
    <TheLogo />
  </section>
</template>

<script>
import TheLogo from '~/components/TheLogo'

export default {
  components: {
    TheLogo
  }
}
</script>

<style lang="scss">
.homepage-hero {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>

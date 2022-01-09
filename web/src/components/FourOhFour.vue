<template>
  <Layout>
    <div class="four-oh-four flex w-100">
      <div class="four-oh-four__inner container flex ai-c jc-c">
        <Logo />
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.four-oh-four {
  height: 100vh;

  &__inner {

    svg {
      max-width: 100%;

      @include desktop {
        max-width: 60%;
      }
    }
  }
}
</style>
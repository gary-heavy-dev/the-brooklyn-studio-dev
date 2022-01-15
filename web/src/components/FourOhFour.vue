<template>
  <Layout>
    <div class="four-oh-four flex w-100">
      <div class="four-oh-four__inner container flex ai-c jc-c">
        <FourOhFourGraphic />
      </div>
    </div>
  </Layout>
</template>

<script>
import FourOhFourGraphic from '~/components/FourOhFourGraphic'

export default {
  components: {
    FourOhFourGraphic 
  }
}
</script>

<style lang="scss">
.four-oh-four {
  min-height: 100vh;

  &__inner {
    padding: 145px 0;

    svg {
      max-width: 100%;

      @include desktop {
        max-width: 41%;
      }
    }
  }
}
</style>
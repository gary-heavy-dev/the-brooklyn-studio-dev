<template>
  <Layout>
    <!-- <HomepageHero v-show="$route.path == '/'" /> -->
    <TheHeader />
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <TheFooter />
  </Layout>
</template>

<script>
import HomepageHero from '~/components/HomepageHero'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    HomepageHero,
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all .25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

main.main {
  padding-top: var(--header-height);
  background-color: var(--color--white);

  > div {
    min-height: 100vh;
    width: 100%;
  }
}
</style>

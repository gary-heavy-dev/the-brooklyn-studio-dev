<template>
  <Layout>
    <HomepageHero v-if="$route.path == '/'" />
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
  },
  updated() {
    const b = document.body
    // b.classList.remove('home-hero-in-view')

    if (b.classList.contains('menu--open')) {
      b.classList.add('menu--closing')
      setTimeout(() => { b.classList.remove('menu--open') }, 400)
      setTimeout(() => { b.classList.remove('menu--closing') }, 700)
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all .25s;
}

// .fade-enter,
// .fade-leave-to {
//   opacity: 0.00001;
// }

main.main {
  background-color: var(--color--white);
  // padding-top: var(--header-height);

  > div {
    min-height: 100vh;
    width: 100%;
  }
}
</style>

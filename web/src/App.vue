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
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 1s ease-in-out;
}
.slide-right-enter-to {
  position: absolute;
  right: 0;
}
.slide-left-enter-to {
  position: absolute;
  left: 0;
}
.slide-right-enter {
  position: absolute;
  right: -100%;
}
.slide-left-enter {
  position: absolute;
  left: -100%;
}
.slide-right-leave-to {
  position: absolute;
  left: -100%;
}
.slide-left-leave-to {
  position: absolute;
  right: -100%;
}
.slide-right-leave {
  position: absolute;
  left: 0;
}
.slide-left-leave {
  position: absolute;
  right: 0;
}
main.main {

  > div {
    min-height: 100vh;
    width: 100%;
  }
}
</style>

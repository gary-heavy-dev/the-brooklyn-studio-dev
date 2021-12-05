<template>
  <Layout>
    <HomepageHero v-show="$route.path == '/'" />
    <TheHeader />
    <main class="main">
      <transition :name="transitionName" :mode="modeName">
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
  data() {
    return {
      transitionName: 'fade',
      modeName: 'out-in'
    }
  },
  watch: {
    $route(to, from) {
      const res = '/projects/residential-architecture'
      const ad = '/projects/adaptive-reuse'
      const int = '/projects/interior-design'

      if((from.path == res && to.path == ad) || (from.path == ad && to.path == int) || (from.path == int && to.path == res)) {
        this.transitionName = 'slide-right'
        this.modeName = ''
      } else if((from.path == ad && to.path == res) || (from.path == int && to.path == ad) || (from.path == res && to.path == int)) {
        this.transitionName = 'slide-right'
        this.modeName = ''
      } else {
        this.transitionName = 'fade'
        this.modeName = 'out-in'
      }
      console.log(this.transitionName)
    }
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
.slide-right-leave-active {
  transition: all 0.75s ease-out;
}
.slide-right-enter-to {
  position: absolute;
  right: 0;
}
.slide-right-enter {
  position: absolute;
  right: -100%;
}
.slide-right-leave-to {
  position: absolute;
  left: -100%;
}
.slide-right-leave {
  position: absolute;
  left: 0;
}
main.main {
  // min-height: 100vh;
  // width: 100%;
  position: relative;

  > div {
    min-height: 100vh;
    width: 100%;
  }
}
</style>

<template>
  <Layout>
    <HomepageHero v-show="$route.path == '/'" />
    <TheHeader />
    <WorkFeedCarousel
      v-show="$route.path == res || $route.path == ad || $route.path == int"
    />
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
import WorkFeedCarousel from '~/components/WorkFeedCarousel'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {

  components: {
    HomepageHero,
    WorkFeedCarousel,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      transitionName: 'fade',
      modeName: 'out-in',
      res: '/projects/residential-architecture',
      int: '/projects/interior-design',
      ad: '/projects/adaptive-reuse'
    }
  },
  watch: {
    $route(to, from) {
      if((from.path == this.res && to.path == this.ad) || (from.path == this.ad && to.path == this.int) || (from.path == this.int && to.path == this.res)) {
        this.transitionName = 'slide-right'
        this.modeName = ''
      } else if((from.path == this.ad && to.path == this.res) || (from.path == this.int && to.path == this.ad) || (from.path == this.res && to.path == this.int)) {
        this.transitionName = 'slide-left'
        this.modeName = ''
      } else {
        this.transitionName = 'fade'
        this.modeName = 'out-in'
      }
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

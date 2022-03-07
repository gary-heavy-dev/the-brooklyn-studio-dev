<template>
  <Layout>
    <HomepageHero
      v-show="$route.path == '/' && introStatus == null"
      @passed="hideIntro"
    />
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
  data() {
    return {
      // if (typeof sessionStorage !== 'undefined')
      introStatus: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('intro') : null
    }
  },
  methods: {
    hideIntro() {
      this.introStatus = true
    }
  },
  updated() {
    const b = document.body
    // b.classList.remove('home-hero-in-view')

    if (b.classList.contains('menu--open')) {
      b.classList.add('menu--closing')
      setTimeout(() => { b.classList.remove('menu--open') }, 400)
      setTimeout(() => { b.classList.remove('menu--closing') }, 700)
    }
  },
  created() {
    if (typeof document !== "undefined") {
      setTimeout(() => document.body.classList.add('page-loaded'), 300)
    }
  },
  watch: {
    $route (to, from) {
      if (typeof document !== "undefined") {
        document.body.classList.remove('page-loaded')
        setTimeout(() => document.body.classList.add('page-loaded'), 300)
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

.page-loaded {

  .fade--in-up {
    opacity: 1;
    transform: translateY(0px);
  }
}

.fade--in-up {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease-in-out;
  transition-delay: 0.2s;
}

main.main {
  background-color: var(--color--white);
  // padding-top: var(--header-height);

  > div {
    min-height: 100vh;
    width: 100%;
  }
}
</style>

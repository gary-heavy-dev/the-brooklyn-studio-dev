<template>
  <header
    :class="['the-header background--white flex ai-c jc-c headroom', {'headroom--unpinned': scrolled}]"
    v-on="{ handleScroll }"
    id="theHeader"
  >
    <div class="container w-100 flex jc-sb">
      <g-link to="/" class="flex ai-c">
        <LogoType
          class="the-header__logo"
        />
      </g-link>
      <div class="the-header__menu color--gray-tertiary">
        <g-link to="/about-us">About</g-link>
        <g-link to="/projects/">Projects</g-link>
      </div>
    </div>
  </header>
</template>

<script>
import LogoType from '~/components/LogoType'

export default {
  components: {
    LogoType
  },
  data() {
    return {
      limitPosition: 78,
      scrolled: false,
      lastPosition: 0
    };
  },
  methods: {
    handleScroll() {
      // https://codepen.io/kode88/pen/XRpXej
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
        // move up!
      } 
      
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
        // move down
      }
      
      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
}
</script>

<style lang="scss">
.the-header {
  height: var(--header-height);
  top: 0;
  position: fixed;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000;
  width: 100%;
  z-index: 999999999;

  &__logo {
    height: 17px;
  }

  &__menu {

    a {
      margin-left: 63px;
    }
  }

  a {
    text-decoration: none;

    &.active {
      color: var(--color--navy);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &.headroom {
    will-change: transform;
    transition: transform 200ms linear;
  }
  &.headroom--pinned {
      transform: translateY(0%);
  }
  &.headroom--unpinned {
      transform: translateY(-100%);
  }
}
</style>

<template>
  <nav
    class="about-us-nav"
    id="aboutUsNav"
    aria-label="Secondary About Us Page Navigation"
  >
    <scrollactive
      id="aboutUsNavInner"
      :class="['about-us-nav__inner headroom flex ai-c jc-c xsmall color--gray-tertiary background--white w-100', {'headroom--stacked': scrolled}]"
      v-on="{ handleScroll }"
      :offset="60"
    >
      <a
        href="#approach"
        class="scrollactive-item"
      >Approach</a>
      <a
        v-for="(item, index) in content"
        :key="index"
        :href="'#' + $toKebabCase(item.navTitle)"
        class="scrollactive-item"
      >{{ item.navTitle }}</a>
    </scrollactive>
  </nav>
</template>

<script>
export default {
  props: {
    content: Array
  },
  data() {
    return {
      limitPosition: 0,
      scrolled: false,
      lastPosition: 0
    };
  },
  methods: {
    handleScroll() {
      // https://codepen.io/kode88/pen/XRpXej
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = false
        // move up!
      } 
      
      if (this.lastPosition > window.scrollY) {
        this.scrolled = true
        // move down
      }
      
      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.handleScroll)
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("scroll", this.handleScroll)
    }
  }
}
</script>

<style lang="scss">
.about-us-nav {
  position: sticky;
  top: 0;
  z-index: 99999;

  &__inner {
    position: absolute;
    height: 60px;
    border-bottom: 1px solid var(--color--gray-secondary);
  }

  a {
    text-decoration: none;
    padding: 0 30px;

    &:hover {
      color: var(--color--navy);
    }
  }
}

body:not(.hero-in-view) .headroom--stacked {
  transform: translateY(var(--header-height));
}
</style>
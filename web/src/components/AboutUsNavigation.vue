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
      :duration="currentDuration"
      bezier-easing-value=".5,0,.35,1"
    >
      <a
        :data-index="1"
        href="#approach"
        class="scrollactive-item"
        @mouseover="setDuration"
      >Approach</a>
      <a
        v-for="(item, index) in content"
        :key="index"
        :data-index="index + 2"
        :href="'#' + $toKebabCase(item.navTitle)"
        class="scrollactive-item"
        @mouseover="setDuration"
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
      scrolling: false,
      timer: null,
      lastPosition: 0,
      currentIndex: 0,
      nextIndex: 0,
      currentDuration: 1500
    };
  },
  methods: {
    setDuration(e) {
      if (this.scrolling === false) {
        this.nextIndex = e.target.dataset.index
        const diff = Math.abs(this.currentIndex - this.nextIndex)
        if (diff <= 1) {
          this.currentDuration = 1500
        } else {
          this.currentDuration = 1000 + 500 * Math.abs(this.currentIndex - this.nextIndex)
        }
      }
    },
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

      const self = this

      if(this.timer !== null) {
        clearTimeout(this.timer);        
        this.scrolling = true
      }
      this.timer = setTimeout(function() {
        self.scrolling = false
      }, 50);

      // Adjust scrollactive duration
      const links = document.getElementsByClassName('scrollactive-item')
      Array.prototype.forEach.call(links, function(link) {
        if (link.classList.contains('is-active')) {
          self.currentIndex = link.dataset.index
        }
      })
    },
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.handleScroll)
     }
  },
  mounted() {
    setTimeout(() => {
      this.currentIndex = 1
      // console.log(this.currentIndex)
    }, 500);
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
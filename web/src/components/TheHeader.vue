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
      <nav
        class="the-header__menu color--gray-tertiary"
        aria-label="Main Navigation"
      >
        <ul>
          <li>
            <g-link to="/about-us">About</g-link>
          </li>
          <Dropdown />
          <li>
            <g-link to="/news">News</g-link>
          </li>
          <li>
            <g-link to="/contact">Contact</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import LogoType from '~/components/LogoType'
import Dropdown from '~/components/Dropdown'

export default {
  components: {
    LogoType,
    Dropdown
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
  border-bottom: 1px solid var(--color--gray-secondary);

  > div,
  > div > nav > ul,
  > div > nav > ul > li > button {
    height: 100%;
  }

  &__logo {
    height: 17px;
  }

  &__menu {
    display: grid;
    place-items: center;


    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;

      li {
        padding: 0;
      }
    }

    > ul {
      grid-auto-flow: column;

      > li {
        margin: 0;
        display: flex;
        align-items: center;

        &:last-child {

          > a {
            margin-right: 0;
          }
        }

        > a,
        > button {
          margin: 0 31.5px;
          display: inline-block;
        }
      }
    }
  }

  a,
  button {
    text-decoration: none;
    transition: color 0.2s linear;

    &.active,
    &:hover {
      text-decoration: none;
      color: var(--color--navy);
    }
  }
}

.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}
</style>

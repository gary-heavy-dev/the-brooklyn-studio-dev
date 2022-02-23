<template>
  <header
    :class="['the-header background--white flex ai-c jc-c headroom', {'headroom--unpinned': scrolled}]"
    v-on="{ handleScroll }"
    id="theHeader"
  >
    <div class="container w-100 flex jc-sb">
      <g-link to="/" class="flex ai-c" aria-label="Link to Homepage">
        <LogoType
          class="the-header__logo"
        />
      </g-link>
      <nav
        class="the-header__menu color--gray-tertiary"
        aria-label="Main Navigation"
      >
        <MenuToggle />
        <ul>
          <li>
            <g-link to="/about-us">About</g-link>
          </li>
          <li class="mobile-only">
            <g-link to="/projects/#residential-architecture">Projects</g-link>
          </li>
          <Dropdown />
          <li>
            <g-link to="/news">News</g-link>
          </li>
          <li>
            <g-link to="/contact">Contact</g-link>
          </li>
          <MenuMobileFooter class="mobile-only" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import LogoType from '~/components/LogoType'
import Dropdown from '~/components/Dropdown'
import MenuToggle from '~/components/MenuToggle'
import MenuMobileFooter from '~/components/MenuMobileFooter'

export default {
  components: {
    LogoType,
    Dropdown,
    MenuToggle,
    MenuMobileFooter
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
    },
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
  position: sticky;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000;
  width: 100%;
  z-index: 999999999;
  border-bottom: 1px solid var(--color--gray-secondary);

  > div,
  > div > nav > ul,
  > div > nav > ul > li > button {
    @include desktop {
      height: 100%;
    }
  }

  &__logo {
    height: 13px;

    @include laptop {
      height: 17px;
    }
  }

  &__menu {
    display: grid;
    place-items: center;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      transition: opacity 0.3s ease-in-out;

      @include desktop-down {
        display: none;
        position: fixed;
        top: var(--header-height);
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color--navy);
        color: white;
        height: calc(100vh - var(--header-height));
      }

      @include desktop {
        display: grid;
        position: relative;
      }

      li {
        padding: 0;
      }

      > * {
        transition: opacity 0.3s ease-in-out 0.2s;
        opacity: 1;
      }
    }

    > ul {
      grid-auto-flow: column;

      > li {
        margin: 0;
        display: flex;
        align-items: center;

        &:last-of-type {

          > a {
            padding-right: 0;
          }
        }

        > a,
        > button {
          padding: 0 31.5px;
          display: inline-block;

          @include desktop-down {
            font-size: 25px;
            width: 100%;
            padding: 19px var(--grid-margin);
            border-bottom: 1px solid var(--color--gray-tertiary);
            transition: all 0.2s ease-in-out;

            &:hover,
            &.active {
              background-color: var(--color--white);
            }
          }
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

.menu--open,
.menu--closing,
.menu--open.menu--opening {

  .the-header__menu {

    ul {
      display: flex;
      flex-direction: column;
    }
  }
}

.menu--closing,
.menu--open.menu--opening {

  .the-header__menu {

    ul {
      opacity: 0;

      > * {
        opacity: 0;
      }
    }
  }
}

.menu--open {
  
  .the-header__menu {

    ul {
      opacity: 1;
    }
  }
}

@include desktop {

  .headroom {
    will-change: transform;
    transition: transform 200ms linear;
  }

  .headroom--pinned {
    transform: translateY(0%);
  }

  body:not(.home-hero-in-view) {

    .headroom--unpinned {
      transform: translateY(-100%);
    }
  }
}
</style>

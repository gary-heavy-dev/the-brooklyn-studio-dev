<template>
  <header
    :class="[
      'the-header background--white flex ai-c jc-c headroom',
      { 'headroom--unpinned': scrolled && hasScrolledOnce }
    ]"
    v-on="{ handleScroll }"
    id="theHeader"
  >
    <div class="container w-100 flex jc-sb">
      <g-link to="/" class="flex ai-c" aria-label="Link to Homepage" @click.native="$scrollToTop">
        <LogoType class="the-header__logo" />
      </g-link>
      <nav class="the-header__menu color--gray-tertiary" aria-label="Main Navigation">
        <MenuToggle />
        <ul>
          <li class="mobile-only">
            <g-link to="/about-us">About</g-link>
          </li>
          <Dropdown
            :name="'about'"
            :primary="aboutDropdown.primary"
            :secondary="aboutDropdown.secondary"
          />
          <li class="mobile-only">
            <g-link to="/projects?type=all">Projects</g-link>
          </li>
          <DropdownProjects
            :name="'projects'"
            :primary="projectsDropdown.primary"
            :secondary="projectsDropdown.secondary"
          />
          <li class="mobile-only">
            <g-link to="/about-us/team">Our Team</g-link>
          </li>
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
import DropdownProjects from '~/components/DropdownProjects'
import MenuToggle from '~/components/MenuToggle'
import MenuMobileFooter from '~/components/MenuMobileFooter'

export default {
  components: {
    LogoType,
    Dropdown,
    DropdownProjects,
    MenuToggle,
    MenuMobileFooter
  },
  props: {
    isStuckOnHomepage: {
      type: Boolean,
      default: false
    },
    isHomepage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      limitPosition: 78,
      scrolled: false,
      lastPosition: 0,
      headerKey: 0,
      hasScrolledOnce: false,
      projectsDropdown: {
        primary: {
          link: '/projects',
          linkText: 'Projects'
        },
        secondary: [
          {
            link: '/projects?type=residential-architecture',
            linkText: 'Residential Architecture'
          },
          {
            link: '/projects?type=interior-design',
            linkText: 'Interior Design'
          },
          {
            link: '/projects?type=adaptive-reuse',
            linkText: 'Adaptive Reuse'
          }
        ]
      },
      aboutDropdown: {
        primary: {
          link: '/about-us',
          linkText: 'About'
        },
        secondary: [
          {
            link: '/about-us',
            linkText: 'About Us'
          },
          {
            link: '/about-us/team',
            linkText: 'Our Team'
          },
          {
            link: '/careers',
            linkText: 'Career Opportunities'
          },
          {
            link: '/credits',
            linkText: 'Site Credits'
          }
        ]
      }
    }
  },
  methods: {
    handleScroll() {
      if (!this.isStuckOnHomepage && this.isHomepage) return

      // Mark that user has scrolled at least once
      if (!this.hasScrolledOnce && window.scrollY > 0) {
        this.hasScrolledOnce = true
      }

      // via https://codepen.io/kode88/pen/XRpXej
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false
        // move down
      }

      this.lastPosition = window.scrollY
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.lastPosition = window.scrollY
      if (window.scrollY > 0) {
        this.hasScrolledOnce = true
      }
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
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
  z-index: 40;
  border-bottom: 1px solid var(--color--gray-secondary);

  > .container {
    z-index: inherit;
  }

  > div,
  > div > nav > ul,
  > div > nav > ul > li > button {
    @include desktop {
      height: 100%;
    }
  }

  &__logo {
    height: 13px;
    margin: auto 0;

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
            @include desktop {
              margin-right: 0;
            }

            @include desktop-down {
              padding-right: 0;
            }
          }
        }

        > a,
        > button > a {
          @include desktop {
            position: relative;
            display: inline-block;
            line-height: normal;

            &:after {
              content: '';
              position: absolute;
              right: 0;
              bottom: -3px;
              background: var(--color--navy-light);
              height: 1px;
              width: 0;
              transition: width 0.35s ease-in-out, background 0.35s ease-in-out,
                opacity 0.35s ease-in-out;
              opacity: 0;
            }

            &:hover,
            &.active {
              &:after {
                left: 0;
                right: auto;
                width: 100%;
              }
            }

            &.active {
              &:after {
                opacity: 0.5;
              }
            }

            &:hover {
              &:after {
                background: var(--color--navy);
                opacity: 1;
              }
            }
          }
        }

        > a,
        > button {
          @include desktop {
            margin: 0 31.5px;
            display: inline-block;
          }

          @include desktop-down {
            padding: 0 31.5px;
            font-size: 25px;
            width: 100%;
            padding: 19px var(--grid-margin);
            border-bottom: 1px solid var(--color--gray-tertiary);
            transition: all 0.2s ease-in-out;

            &:hover,
            &.active--exact {
              background-color: var(--color--white);
              color: var(--color--navy-light);
            }
          }
        }
      }
    }
  }

  > a,
  button a {
    text-decoration: none;
    transition: color 0.2s linear;

    &.active,
    &:hover {
      text-decoration: none;
      color: var(--color--navy-light);
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

  .headroom--unpinned {
    transform: translateY(-100%);
  }
}
</style>

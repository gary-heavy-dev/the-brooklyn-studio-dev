<template>
  <li
    class="dropdown"
    @mouseleave="closeDropdown"
  >
    <button
      type="button"
      class="dropdown__title"
      :aria-expanded="String(expanded)"
      aria-controls="projects-dropdown"
      @click="expanded = !expanded"
    >
      <g-link to="/projects/#residential-architecture">Projects</g-link>
    </button>
    <ul
      class="dropdown__menu"
      id="projects-dropdown"
    >
      <li>
        <g-link :to="'/projects/#residential-architecture'">Residential Architecture</g-link>
      </li>
      <li>
        <g-link :to="'/projects/#adaptive-reuse'">Adaptive Reuse</g-link>
      </li>
      <li>
        <g-link :to="'/projects/#interior-design'">Interior Design</g-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    closeDropdown(e) {
      this.expanded = false
      const button = e.target.querySelector('button')
      button.focus()
      button.blur()
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  position: relative;

  @include desktop-down {
    display: none !important;
  }

  ul.dropdown__menu {
    position: absolute;
    min-width: 22ch;
    width: max-content;
    top: var(--header-height);
    height: 0;
    opacity: 0;
    transition: 200ms all 150ms ease-out;
    pointer-events: none;

    li {
      margin: 0;
      color: var(--color--gray-light);
      margin-left: 7.5px;

      &:not(:last-child) {

        a {
          border-bottom: 1px solid var(--color--gray-tertiary);
        }
      }

      a {
        display: block;
        padding: 14px 24px;
        background-color: var(--color--navy);
        transition: all 0.2s ease-in-out;

        &:hover,
        &.active {
          background-color: var(--color--white);
          color: var(--color--navy);
        }
      }
    }
  }
}

.headroom:not(.headroom--unpinned),
.home-hero-in-view .headroom {

  .dropdown {

    &:hover,
    &:focus-within {

      .dropdown__menu {
        opacity: 1;
        height: auto;
        visibility: visible;
        pointer-events: all;
      }
    }
  }
}
</style>
<template>
  <li
    class="dropdown"
    @mouseleave="closeDropdown"
  >
    <button
      type="button"
      class="dropdown__title"
      v-if="primary"
      :aria-expanded="String(expanded)"
      :aria-controls="name + '-dropdown'"
      @click="expanded = !expanded"
    >
      <g-link
        :to="primary.link"
      >{{ primary.linkText }}</g-link>
    </button>
    <ul
      class="dropdown__menu"
      :id="name + '-dropdown'"
    >
      <li
        v-for="(link, index) in secondary"
        :key="index"
      >
        <g-link
          :to="link.link"
        >{{ link.linkText }}</g-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    primary: Object,
    secondary: Array,
    name: String
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    closeDropdown(e) {
      this.expanded = false
      const button = e.target.querySelector('button')
      console.log('me button:', button)
      button.focus()
      button.blur()
    },
    // closeOnRouteChange(e) {
    //   this.expanded = false
    //   const link = e.target
    //   const button = link.closest('.dropdown').firstChild
    //   console.log('link:', link, 'button:', button)
    //   button.focus()
    //   button.blur()
    // }
  },
  watch: {
    $route (to, from) {
      this.closeOnRouteChange
      console.log('Changin!', this.expanded)
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
        &.active--exact {
          background-color: var(--color--white);
          color: var(--color--navy-light);
        }
      }
    }
  }
}

.page-loaded .headroom:not(.headroom--unpinned) {

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
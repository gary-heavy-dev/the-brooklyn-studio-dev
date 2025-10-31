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
      <g-link :to="primary.link">{{ primary.linkText }}</g-link>
    </button>
    <ul
      class="dropdown__menu"
      :id="name + '-dropdown'"
    >
      <li
        v-for="(link, index) in secondary"
        :key="index"
      >
        <g-link class="small" :to="link.link">{{ link.linkText }}</g-link>
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
          border-bottom: 1px solid var(--color--white);
        }
      }

      a {
        display: block;
        padding: 6px 14px;
        background-color: var(--color--navy);
        transition: all 0.2s ease-in-out;
        color: var(--color--gray-light);

        &:hover,
        &.active--exact {
          background-color: var(--color--gray-tertiary-light);
          color: var(--color--navy);
        }
      }
    }
  }
}

.headroom:not(.headroom--unpinned) {

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

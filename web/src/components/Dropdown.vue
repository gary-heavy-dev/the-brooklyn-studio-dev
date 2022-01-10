<template>
  <li class="dropdown">
    <button
      type="button"
      class="dropdown__title"
      aria-expanded="false"
      aria-controls="projects-dropdown"
    >Projects</button>
    <ul
      class="dropdown__menu"
      id="projects-dropdown"
    >
      <li>
        <g-link :to="'/projects#residential-architecture'">Residential Architecture</g-link>
      </li>
      <li>
        <g-link :to="'/projects#adaptive-reuse'">Adaptive Reuse</g-link>
      </li>
      <li>
        <g-link :to="'/projects#interior-design'">Interior Design</g-link>
      </li>
    </ul>
  </li>
</template>

<style lang="scss">
.dropdown {
  position: relative;

  ul.dropdown__menu {
    position: absolute;
    min-width: 23ch;
    top: var(--header-height);
    height: 0;
    opacity: 0;
    transition: 200ms all 120ms ease-out;
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
        padding: 18px 25px 11px;
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
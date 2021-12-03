<template>
  <header
    class="the-header background--white flex ai-c jc-c"
    id="theHeader"
  >
    <div class="container flex jc-sb">
      <g-link to="/">The Brooklyn Studio</g-link>
      <div class="the-header__menu">
        <g-link to="/about-us">About Us</g-link>
        <g-link to="/projects/residential-architecture">Residential Architecture</g-link>
        <g-link to="/projects/adaptive-reuse">Adaptive Reuse</g-link>
        <g-link to="/projects/interior-design">Interior Design</g-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.the-header {
  height: var(--header-height);
  position: sticky;
  top: 0;
  z-index: 999999999;
  border-bottom: 1px solid var(--color--gray-tertiary);

  &__menu {

    a {
      margin-left: 63px;
    }
  }
}
</style>

<template>
  <header
    class="the-header background--white flex ai-c jc-c"
    id="theHeader"
  >
    <div class="container w-100 flex jc-sb">
      <g-link to="/">The Brooklyn Studio</g-link>
      <div class="the-header__menu">
        <g-link to="/about-us">About Us</g-link>
        <g-link to="/projects/">Projects</g-link>
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

  &__menu {

    a {
      margin-left: 63px;
    }
  }
}
</style>

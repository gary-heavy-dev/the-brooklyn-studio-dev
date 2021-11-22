<template>
  <header class="the-header" id="theHeader">
    <g-link to="/">The Brooklyn Studio</g-link>
    <g-link to="/about-us">About Us</g-link>
  </header>
</template>

<style lang="scss">
.the-header {
  padding: 20px;
  height: 53px;
  position: sticky;
  top: 0;
  z-index: 999999999;
  background-color: white;
  border-bottom: 1px solid var(--color--gray-tertiary);
  display: flex;
  justify-content: space-between;
}
</style>

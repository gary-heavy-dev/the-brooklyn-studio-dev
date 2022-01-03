<template>
  <nav class="about-us-nav xsmall color--gray-tertiary background--white flex ai-c jc-c">
    <g-link to="/#">Approach</g-link>
    <g-link to="/#">Guiding Principles</g-link>
    <g-link to="/#">The Row House</g-link>
    <g-link to="/#">Interiors</g-link>
    <g-link to="/#">Sustainable Future</g-link>
    <g-link to="/#">Brooklyn</g-link>
    <g-link to="/#">Our Studio</g-link>
  </nav>
</template>

<style lang="scss">
.about-us-nav {
  position: sticky;
  top: 0;
  z-index: 99999;
  height: 60px;
  border-bottom: 1px solid #e5e5e5;

  a {
    text-decoration: none;
    padding: 0 30px;

    &:hover {
      color: var(--color--navy);
    }
  }
}
</style>
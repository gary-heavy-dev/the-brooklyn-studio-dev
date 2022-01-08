<template>
  <nav class="about-us-nav xsmall color--gray-tertiary background--white flex ai-c jc-c">
    <a
      href="#approach"
      v-scroll-to="{
        el: '#approach',
        offset: -59
      }" 
    >Approach</a>
    <a
      v-for="(item, index) in content"
      :key="index"
      :href="'#' + $toKebabCase(item.navTitle)"
      v-scroll-to="{
        el: '#' + $toKebabCase(item.navTitle),
        offset: -59
      }" 
    >{{ item.navTitle }}</a>
  </nav>
</template>

<script>
export default {
  props: {
    content: Array
  }
}
</script>

<style lang="scss">
.about-us-nav {
  position: sticky;
  top: 0;
  z-index: 99999;
  height: 60px;
  border-bottom: 1px solid var(--color--gray-secondary);

  a {
    text-decoration: none;
    padding: 0 30px;

    &:hover {
      color: var(--color--navy);
    }
  }
}
</style>
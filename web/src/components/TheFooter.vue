<template>
  <footer class="the-footer flex fw p-40" id="theFooter">
    <div class="container grid grid--12-desktop w-100 mb-40">
      <Logo
        class="col-span--2"
      />
      <div class="the-footer__links">
        <g-link to="/about-us">About</g-link>
        <g-link to="/projects">Projects</g-link>
        <g-link to="/#">News</g-link>
        <g-link to="/#">Contact</g-link>
      </div>
      <div class="the-footer__newsletter col-span--4">Join Our Newsletter</div>
      <div class="social-icons">
        <LogoInstagram
          class="social-icon__instagram"
        />
      </div>
    </div>
    <div class="container w-100 text-center">© 2021 The Brooklyn Studio of Architecture and Interiors | Privacy Policy</div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
import LogoInstagram from '~/components/LogoInstagram'

export default {
  components: {
    Logo,
    LogoInstagram
  }
}
</script>

<style lang="scss">
.the-footer {
  background-color: var(--color--gray-secondary);

  &__links {
    grid-column: 4/6;

    a {
      display: block;
    }
  }

  .social-icons {
    grid-column-end: 13;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .social-icon__instagram {
    width: 36px;
  }
}
</style>
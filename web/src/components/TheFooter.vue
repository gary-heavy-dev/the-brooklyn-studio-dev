<template>
  <footer class="the-footer flex fw p-40 color--gray-tertiary background--gray-light" id="theFooter">
    <div class="container grid grid--12-desktop w-100 mb-40">
      <Logo
        class="col-span--2"
      />
      <nav
        class="the-footer__links xsmall"
        aria-label="Secondary Footer Navigation"
      >
        <g-link to="/about-us">About</g-link>
        <g-link to="/projects">Projects</g-link>
        <g-link to="/news">News</g-link>
        <g-link to="/contact">Contact</g-link>
      </nav>
      <div class="the-footer__newsletter col-span--4 xsmall">Join Our Newsletter</div>
      <div class="social-icons">
        <LogoInstagram
          class="social-icon__instagram"
        />
      </div>
    </div>
    <div class="container grid grid--12-desktop w-100 xxsmall">
      <div class="the-footer__credits">© 2021 The Brooklyn Studio of Architecture and Interiors | Privacy Policy</div>
    </div>
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

  &__links {
    grid-column: 4/6;

    a {
      display: block;
      margin-bottom: 11px;
    }
  }

  &__credits {

    @include desktop {
      grid-column: 4/12;
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
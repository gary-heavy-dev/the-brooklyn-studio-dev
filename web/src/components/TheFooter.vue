<template>
  <footer class="the-footer p-40 color--gray-tertiary background--gray-light" id="theFooter">
    <div class="grid grid--12-desktop">
      <div class="footer__logo col-span--2 flex">
        <Logo />
      </div>
      <nav
        class="the-footer__links xsmall"
        aria-label="Secondary Footer Navigation"
      >
        <g-link to="/about-us">About</g-link>
        <g-link to="/projects">Projects</g-link>
        <g-link to="/news">News</g-link>
        <g-link to="/contact">Contact</g-link>
        <g-link to="/about-us/team">Team</g-link>
        <g-link to="/careers">Careers</g-link>
      </nav>
      <div class="the-footer__newsletter col-span--6 xsmall flex fd-c jc-sb">
        <form
          action=""
          class="flex fd-c"
        >
          <label for="">Join Our Newsletter:</label>
          <div class="input-wrapper">
            <input class="xxsmall" type="email" placeholder="Your Email">
            <button>Submit</button>
          </div>
          <div class="xxsmall the-footer__newsletter-notice">By signing up, you are also agreeing to The Brooklyn Studio's <strong>Privacy Policy.</strong></div>
        </form>
        <div class="xxsmall the-footer__credits desktop-only">© 2022 The Brooklyn Studio of Architecture | Privacy Policy</div>
      </div>
      <div class="social-icons">
        <a
          v-if="$static.settings.socialLinkIg"
          :href="$static.settings.socialLinkIg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to The Brooklyn Studio Instagram Account"
        >
          <LogoInstagram
            class="social-icon__instagram"
          />
        </a>
      </div>
    </div>
    <div class="grid grid--12-desktop xxsmall mobile-only">
      <div class="xxsmall the-footer__credits text-center">© 2022 The Brooklyn Studio of Architecture<br>Privacy Policy</div>
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

  @include desktop {
    display: flex;
    flex-wrap: wrap;
  }

  > div {

    @include desktop {
      @include container;
      width: 100%;
    }
  }

  .footer__logo {
    justify-content: flex-start;
    
    @include desktop-down {
      border-bottom: 1px solid var(--color--gray-secondary);
    }

    svg {
      display: block;
      max-width: 177px;
      width: 100%;

      @include desktop-down {
        width: 40.5%;
        margin: 0 auto;
        padding: 15px 0 40px;
      }
    }
  }

  &__links {
    grid-column: 4/6;

    a {
      display: block;

      &:last-child {
        margin-bottom: 0;
      }

      @include desktop {
        margin-bottom: 11px;
      }

      @include desktop-down {
        padding: 15px var(--grid-margin);
      }
    }
  }

  &__links a,
  &__newsletter {

    @include desktop-down {
      border-bottom: 1px solid var(--color--gray-secondary);
    }
  }

  &__newsletter {

    form {
      align-items: flex-start;

      .input-wrapper {
        margin-bottom: 15px;
        max-width: 436px;
      }
    }

    @include desktop-down {
      padding-bottom: 17px;
      margin-bottom: 18px;
    }
  }

  &__newsletter form,
  &__credits {

    @include desktop-down {
      @include container;
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
    justify-content: center;

    @include desktop {
      justify-content: flex-end;
    }

    @include desktop-down {
      margin-bottom: 5px;
    }

    svg {
      width: 36px;
    }
  }
}
</style>

<static-query>
query {
  settings: sanitySiteSettings(id: "siteSettings") {
    socialLinkIg
  }
}
</static-query>
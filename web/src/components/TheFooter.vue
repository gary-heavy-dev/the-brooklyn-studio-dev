<template>
  <footer class="the-footer p-40 background--navy" id="theFooter">
    <div class="grid grid--12-desktop">
      <g-link
        to="/"
        aria-label="Link to Homepage"
        class="footer__logo col-span--2 flex"
        @click.native="$scrollToTop"
      >
        <PlaceholderLogo class="white" />
      </g-link>
      <nav
        class="the-footer__links the-footer__links--col1 xsmall"
        aria-label="Secondary Footer Navigation Column 1"
      >
        <g-link to="/about-us">About</g-link>
        <g-link to="/projects">Projects</g-link>
        <g-link to="/news">News</g-link>
        <g-link to="/contact">Contact</g-link>
        <g-link to="/about-us/team">Team</g-link>
      </nav>
      <nav
        class="the-footer__links the-footer__links--col2 xsmall"
        aria-label="Secondary Footer Navigation Column 2"
      >
        <g-link to="/careers">Careers</g-link>
        <NewsletterForm />
      </nav>
      <div class="social-icons">
        <a
          v-if="$static.settings.socialLinkIg"
          :href="$static.settings.socialLinkIg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to The Brooklyn Studio Instagram Account"
        >
          <LogoInstagram class="social-icon__instagram" />
        </a>
        <a
          v-if="$static.settings.socialLinkLinkedIn"
          :href="$static.settings.socialLinkLinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to The Brooklyn Studio LinkedIn Account"
        >
          <LogoLinkedIn class="social-icon__instagram" />
        </a>
      </div>
      <div class="the-footer__newsletter col-span--6 xsmall flex fd-c jc-sb">
        <div class="xxsmall the-footer__credits desktop-only">
          © 2025 The Brooklyn Studio of Architecture |
          <g-link to="/privacy-policy">Privacy Policy</g-link> |
          <g-link to="/credits">Site Credits</g-link>
        </div>
      </div>
    </div>
    <div class="grid grid--12-desktop xxsmall mobile-only">
      <div class="xxsmall the-footer__credits text-center">
        © 2025 The Brooklyn Studio of Architecture<br /><g-link to="/privacy-policy"
          >Privacy Policy</g-link
        >
        | <g-link to="/credits">Site Credits</g-link>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
import PlaceholderLogo from '~/components/PlaceholderLogo'
import LogoInstagram from '~/components/LogoInstagram'
import NewsletterForm from '~/components/NewsletterForm'
import LogoLinkedIn from '~/components/LogoLinkedIn'

export default {
  components: {
    Logo,
    LogoInstagram,
    LogoLinkedIn,
    NewsletterForm,
    PlaceholderLogo
  }
}
</script>

<style lang="scss">
.the-footer {
  @include desktop {
    display: flex;
    flex-wrap: wrap;
  }

  & .grid {
    row-gap: 30px;
  }

  > div {
    @include desktop {
      @include container;
      width: 100%;
    }
  }

  .footer__logo {
    justify-content: flex-start;
    height: min-content;
    grid-column-start: 2;
    grid-column-end: 4;

    @include desktop-down {
      border-bottom: 1px solid var(--color--white);
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
    a {
      display: block;

      &:hover {
        color: inherit;
      }
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

  &__links--col1 {
    grid-column: 5/7;

    @include desktop-down {
      grid-column: 5/11;
    }
  }

  &__links--col2 {
    grid-column: 7/10;

    @include desktop-down {
      grid-column: 5/11;
      border-bottom: 1px solid var(--color--white);
    }
  }

  &__links a,
  &__newsletter {
    @include desktop-down {
      border-bottom: 1px solid var(--color--white);
    }
  }

  &__newsletter {
    grid-column: 5/11;

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
    padding-top: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;

    @include desktop {
      padding-top: 0px;
      grid-column-start: 11;
      justify-content: flex-end;
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
    socialLinkLinkedIn
  }
}
</static-query>

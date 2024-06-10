<template>
  <div class="menu__footer flex fd-c ai-c jc-c w-100">
    <div class="menu__footer-inner flex fd-c ai-c w-100">
      <Logo class="white" />
      <div class="social-icon__container">
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
          aria-label="Link to The Brooklyn Studio Instagram Account"
        >
          <LogoLinkedIn class="social-icon__linkedin" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import LogoInstagram from '~/components/LogoInstagram'
import LogoLinkedIn from '~/components/LogoLinkedIn'

export default {
  components: {
    Logo,
    LogoInstagram,
    LogoLinkedIn
  }
}
</script>

<style lang="scss">
.menu__footer {
  height: 100%;
  margin: 72px auto;
  text-align: center;

  .brooklyn-studio-logo {
    max-width: 177px;

    @include desktop-down {
      width: 40.5%;
    }
  }

  .social-icon__container {
    display: flex;
    gap: 5px;
  }

  .social-icon__instagram,
  .social-icon__linkedin {
    width: 47px;
    margin: 54px auto 0;
  }

  .social-icon__linkedin g path:last-child {
    fill: var(--color--navy) !important;
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

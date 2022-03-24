<template>
  <div class="menu__footer flex fd-c ai-c jc-c w-100">
    <div class="menu__footer-inner flex fd-c ai-c w-100">
      <Logo class="white" />
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

  .social-icon__instagram {
    width: 47px;
    margin: 54px auto 0;
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
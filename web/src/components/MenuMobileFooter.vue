<template>
  <div class="menu__footer">
    <Logo class="white" />
    <LogoInstagram
      class="social-icon__instagram"
    />
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
  width: 50%;
  margin: auto auto 72px;
  text-align: center;

  .brooklyn-studio-logo {
    padding-top: 62px;
    min-width: 200px;
  }

  .social-icon__instagram {
    width: 47px;
    margin: 54px auto 0;
  }
}
</style>
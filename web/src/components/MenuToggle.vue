<template>
  <button
    id="menuToggle"
    aria-expanded="false"
    aria-controls="menu"
    @click="toggleMenu"
  >
    <svg width="22" height="1" viewBox="0 0 22 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22" height="1" fill="currentColor"/>
    </svg>
    <svg width="22" height="1" viewBox="0 0 22 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22" height="1" fill="currentColor"/>
    </svg>
    <svg width="22" height="1" viewBox="0 0 22 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22" height="1" fill="currentColor"/>
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const b = document.body
      if (b.classList.contains('menu--open')) {
        b.classList.add('menu--closing')
        setTimeout(() => { b.classList.remove('menu--open') }, 400)
        setTimeout(() => { b.classList.remove('menu--closing') }, 700)
      } else {
        b.classList.add('menu--opening', 'menu--open')
        setTimeout(() => { b.classList.remove('menu--opening') }, 100)
      }
    }
  }
}
</script>

<style lang="scss">
#menuToggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15px;

  > * {
    transition: all 0.1s linear;
  }

  @include desktop {
    display: none;
  }
}

.menu--open {

  #menuToggle {

    svg:first-child {
      transform: rotate(45deg) translateY(3px) translateX(3px);
    }

    svg:nth-child(2) {
      opacity: 0;
      transform: rotate(45deg);
    }

    svg:last-child {
      transform: rotate(-45deg) translateY(-4px) translateX(4px);
    }
  }
}
</style>
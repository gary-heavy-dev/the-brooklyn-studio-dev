
<template>
  <div class="lightbox-close">
    <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="1" fill="black"/>
    </svg>
    <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="1" fill="black"/>
    </svg>
  </div>
</template>

<style lang="scss">
.lightbox-close {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99999999;
  cursor: pointer;
  width: 80px;
  height: 80px;

  svg {
    position: absolute;
    top: 49px;
    right: 36px;

    @include desktop-down {
      width: 16px;
      right: var(--grid-margin);
    }

    &:first-child {
      transform: rotate(-45deg);
    }

    &:last-child {
      transform: rotate(45deg);
    }
  }
}
</style>
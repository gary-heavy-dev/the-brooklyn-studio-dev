<template>
  <div class="accordion-status">
    <svg width="21" height="1" viewBox="0 0 21 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="1" fill="black"/>
    </svg>
    <svg width="21" height="1" viewBox="0 0 21 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="1" fill="black"/>
    </svg>
  </div>
</template>

<style lang="scss">
.accordion-status {
  position: absolute;
  right: 0;
  top: 10px;

  @include desktop {
    top: 15px;
  }

  svg {
    position: absolute;
    transition: all 0.2s ease-in-out;

    @include desktop-down {
      width: 16px;
    }

    &:first-child {
      transform: rotate(-90deg);
    }

    &:last-child {
      transform: rotate(-180deg);
      opacity: 1;
    }
  }
}

.active {

  .accordion-status {

    svg {

      &:first-child {
        transform: rotate(0deg);
      }

      &:last-child {
        transform: rotate(0deg);
        opacity: 0;
      }
    }
  }
}
</style>
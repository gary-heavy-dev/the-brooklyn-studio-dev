<template>
  <div :class="'container flexible-two-image mb-90 flexible-two-image--layout-' + content.imageLayout + ' spacing-' + content.spacing">
    <div class="flexible-two-image__left-image">
      <BaseImage
        v-if="content.imageLeft"
        :src="content.imageLeft"
        :lazy="true"
        :sizes="sizesLarge"
        :caption="content.imageLeft.caption"
        :captionStyle="content.imageLeft.captionStyle"
        v-view="$iAmRevealed"
        @click.native="openLightbox"
      />
    </div>

    <div class="flexible-two-image__right-image">
      <BaseImage
        v-if="content.imageRight"
        :src="content.imageRight"
        :lazy="true"
        :sizes="sizesSmall"
        :caption="content.imageRight.caption"
        :captionStyle="content.imageRight.captionStyle"
        v-view="$iAmRevealed"
        @click.native="openLightbox"
      />
    </div>
  </div>
</template>

<script>
import eventHub from '~/utils/eventHub'

export default {
  props: {
    content: Object
  },
  data() {
    return {
      sizesSmall: {
        mobile: 338,
        tablet: 544,
        laptop: 721,
        desktop: 387,
        hd: 521,
        fourK: 1042
      },
      sizesLarge: {
        mobile: 514,
        tablet: 714,
        laptop: 940,
        desktop: 693,
        hd: 927,
        fourK: 1854
      }
    }
  },
  methods: {
    openLightbox(e) {
      eventHub.$emit('open-lightbox', e.target.getAttribute('data-lightbox'))
    }
  }
}
</script>

<style lang="scss">
.flexible-two-image {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;

  @include laptop {
    grid-template-columns: 1fr 1fr;
  }

  &__left-image,
  &__right-image {
    width: 100%;
  }

  &.spacing-small {
    gap: 30px;

    @include laptop {
      gap: 35px;
    }

    @include desktop {
      gap: 40px;
    }
  }

  &.spacing-medium {
    gap: 40px;

    @include laptop {
      gap: 50px;
    }

    @include desktop {
      gap: 60px;
    }
  }

  &.spacing-large {
    gap: 60px;

    @include laptop {
      gap: 70px;
    }

    @include desktop {
      gap: 80px;
    }
  }

  &--layout-50-50 {
    max-height: 554px;

    @include laptop {
      grid-template-columns: 1fr 1fr;
    }
  }

  &--layout-33-67 {
    max-height: 540px;

    @include laptop {
      grid-template-columns: 34.7% 65.3%;
    }
  }

  &--layout-67-33 {
    max-height: 540px;

    @include laptop {
      grid-template-columns: 65.3% 34.7%;
    }
  }

  .base-image,
  .base-image__inner {
    height: 100%;
  }
}
</style>

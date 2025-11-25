<template>
  <div
    :class="
      'ratio-image-pair container grid grid--23-desktop ratio-image-pair--' + content.ratio
    "
  >
    <div class="ratio-image-pair__left">
      <BaseImage
        v-if="content.imageLeft"
        :src="content.imageLeft"
        :lazy="true"
        :sizes="sizesLarge"
        :caption="content.imageLeft.caption"
        :x="content.imageLeft.asset.metadata.dimensions.width"
        :y="content.imageLeft.asset.metadata.dimensions.height"
        :captionStyle="content.imageLeft.captionStyle"
        v-view="$iAmRevealed"
        @click.native="openLightbox"
      />
    </div>

    <div class="ratio-image-pair__right">
      <BaseImage
        v-if="content.imageRight"
        :src="content.imageRight"
        :lazy="true"
        :sizes="sizesLarge"
        :caption="content.imageRight.caption"
        :x="content.imageRight.asset.metadata.dimensions.width"
        :y="content.imageRight.asset.metadata.dimensions.height"
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
    content: {
      type: Object,
      required: true
    }
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
.grid--23-desktop {
  @include desktop {
    display: grid;
    grid-template-columns: repeat(23, 1fr);
  }
}

.ratio-image-pair {
  width: 100%;
  overflow: hidden;

  gap: 0;
  margin-bottom: 40px;

  @include laptop {
    gap: 35px;
  }

  @include desktop {
    gap: 0;
    margin-bottom: 70px;
  }

  &__left {
    margin-bottom: 40px;
    @include desktop {
      margin-bottom: 0px;
    }
  }

  &__left,
  &__right {
    width: 100%;
    grid-column: span 12;
  }

  &--50-50 {
    .ratio-image-pair__left {
      grid-column: 1 / 12;
    }
    .ratio-image-pair__right {
      grid-column: 13 / 24;
    }
  }

  &--33-67 {
    .ratio-image-pair__left {
      grid-column: 1 / 9;
    }
    .ratio-image-pair__right {
      grid-column: 10 / 24;
    }
  }

  &--67-33 {
    .ratio-image-pair__left {
      grid-column: 1 / 15;
    }
    .ratio-image-pair__right {
      grid-column: 16 / 24;
    }
  }

  .base-image,
  .base-image__inner {
    height: 100%;
  }
}
</style>

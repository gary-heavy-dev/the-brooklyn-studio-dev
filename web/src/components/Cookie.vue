<template>
  <section
    :class="['team-member-featured', { reverse: reverse }]"
    class="flex color--white background--navy w-100 p-100 p-mobile-copy-block"
  >
    <div class="team-member-featured__inner container grid grid--12-desktop">
      <div class="team-member-featured__copy flex ai-c">
        <div class="team-member-featured__copy-inner">
          <h2 class="upper h2">{{ cookie.name }}</h2>
          <BaseBlockContent v-if="cookie._rawDescription" :blocks="cookie._rawDescription" />
          <g-link
            class="upper button mt-60"
            :to="`cookies/${cookie.recipe.slug.current}`"
            @click.native="$scrollToTop"
          >
            <span>{{ cookie.recipe.title }}</span>
          </g-link>
        </div>
      </div>
      <BaseImage
        v-if="cookie.image"
        :src="cookie.image"
        :sizes="sizes"
        :lazy="true"
        :x="286"
        :y="375"
        :caption="cookie.image.caption"
        :captionStyle="cookie.image.captionStyle"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cookie: {
      type: Object,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sizes: {
        mobile: 413,
        tablet: 661,
        laptop: 855,
        desktop: 286,
        hd: 386,
        fourK: 772
      }
    }
  }
}
</script>
<style lang="scss">
.team-member-featured {
  &.reverse {
    .team-member-featured__copy {
      @include desktop {
        order: 2;
        grid-column: 5 / -1;
      }
    }

    .base-image {
      @include desktop {
        order: 1;
        grid-column: 1 / 4;
      }
    }
  }

  &__copy {
    @include desktop {
      grid-column: span 8;
    }

    p {
      max-width: var(--max-width--readable-lg);
    }

    .button {
      @include desktop-down {
        margin-bottom: 41px;

        span {
          display: block;
        }
      }
    }
  }

  .base-image {
    @include desktop {
      grid-column: span 3/13;
    }

    @include desktop-down {
      max-width: 73%;
      margin: 0 auto;
    }
  }
}
</style>

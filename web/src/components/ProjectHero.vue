<template>
  <div :class="['project-hero container pos-rel', { 'mb-100': hideHeader }]">
    <div class="project-hero__title w-100 flex jc-sb">
      <h1 v-if="displayTitle && displayTitle.displayTitleStatus" class="h2 color--navy fade--in-up">
        <span v-html="displayTitle.lineOne"></span><br />
        <span v-html="displayTitle.lineTwo"></span>
      </h1>
      <h1 v-else class="h2 color--navy fade--in-up" id="projectHeading" v-html="heading"></h1>

      <scrollactive :duration="currentDuration" bezier-easing-value=".5,0,.35,1">
        <a
          :data-index="1"
          href="#projectInfo"
          class="scrollactive-item project-hero__title-info color--gray h3 fade--in-up"
          @mouseover="setDuration"
          >Info</a
        >
      </scrollactive>
    </div>
    <div class="project-hero__img-wrapper" v-if="!hideHero">
      <BaseImage
        v-if="mobileImage"
        class="mobile-only"
        :lazy="true"
        :src="mobileImage"
        :caption="mobileImage.caption"
        :captionStyle="mobileImage.captionStyle"
      />
      <BaseImage
        v-if="image"
        :class="['project-hero-mobile', { 'desktop-only': mobileImage }]"
        :lazy="true"
        :src="image"
        :caption="image.caption"
        :captionStyle="image.captionStyle"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displayTitle: Object,
    heading: String,
    image: Object,
    hideHero: Boolean,
    mobileImage: Object,
    hideHeader: Boolean
  },
  data() {
    return {
      limitPosition: 0,
      scrolled: false,
      scrolling: false,
      timer: null,
      lastPosition: 0,
      currentIndex: 0,
      nextIndex: 0,
      currentDuration: 3000
    }
  },
  methods: {
    setDuration(e) {
      if (this.scrolling === false) {
        this.nextIndex = e.target.dataset.index
        const diff = Math.abs(this.currentIndex - this.nextIndex)
        if (diff <= 1) {
          this.currentDuration = 3000
        } else {
          this.currentDuration = 1000 + 500 * Math.abs(this.currentIndex - this.nextIndex)
        }
      }
    },
    handleScroll() {
      // https://codepen.io/kode88/pen/XRpXej
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = false
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = true
        // move down
      }

      this.lastPosition = window.scrollY

      const self = this

      if (this.timer !== null) {
        clearTimeout(this.timer)
        this.scrolling = true
      }
      this.timer = setTimeout(function() {
        self.scrolling = false
      }, 50)

      // Adjust scrollactive duration
      const links = document.getElementsByClassName('scrollactive-item')
      Array.prototype.forEach.call(links, function(link) {
        if (link.classList.contains('is-active')) {
          self.currentIndex = link.dataset.index
        }
      })
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  mounted() {
    setTimeout(() => {
      this.currentIndex = 1
      // console.log(this.currentIndex)
    }, 500)
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="scss">
.project-hero {
  &__title {
    padding-top: 50px;
    padding-bottom: 40px;

    .h2 {
      margin-bottom: 0;
    }
  }

  &__title-info {
    @include laptop {
      padding-right: 40px;
    }
  }

  .project-hero__img-wrapper {
    margin-bottom: 40px;
    @include laptop {
      margin-bottom: 70px;
    }
  }

  .base-image__inner {
    aspect-ratio: 3/2;
  }
}
</style>

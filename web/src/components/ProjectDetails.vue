<template>
  <section class="project-details background--gray-secondary">
    <div id="projectInfo" class="project-details__inner container">
      <div class="project-details__intro">
        <p class="project-details__intro-txt" v-if="content.detailsIntro">
          {{ content.detailsIntro }}
        </p>
        <div class="project-details__intro-images gap-20" v-if="content.detailsGallery">
          <div
            v-for="(image, index) in content.detailsGallery"
            :key="index"
            :class="index % 2 === 0 ? 'small' : 'large'"
          >
            <BaseImage
              v-if="image"
              :src="image"
              :lazy="true"
              :sizes="sizes"
              :caption="image.caption"
              :captionStyle="image.captionStyle"
            />
          </div>
        </div>
      </div>

      <div class="project-details__info" :class="{ 'has-further-reading': hasFurtherReading }">
        <div class="project-details__info-item">
          <div
            v-for="(stat, index) in content.detailsBuildingInfo.filter(
              // USE CLEANED STRING FOR ROBUST COMPARISON
              s => normalizeHeading(s.heading) !== 'further reading'
            )"
            :key="index"
          >
            <h4 class="project-details__info-item-sub sub upper color--gray-tertiary mb-15">
              {{ stat.heading }}
            </h4>
            <div v-if="stat.link && stat.newTab" class="xsmall project-details__info-item-desc">
              <a
                class="project-details--building-info-link"
                v-bind:href="stat.link"
                target="_blank"
                rel="noopener"
                >{{ stat.text }}</a
              >
            </div>
            <div
              v-else-if="stat.link && !stat.newTab"
              class="xsmall project-details__info-item-desc"
            >
              <a class="project-details--building-info-link" v-bind:href="stat.link">{{
                stat.text
              }}</a>
            </div>
            <div v-else class="xsmall project-details__info-item-desc">{{ stat.text }}</div>
          </div>
        </div>

        <div class="project-details__info-item">
          <div v-for="(credit, index) in content.detailsCredits" :key="index">
            <h4 class="project-details__info-item-sub sub upper color--gray-tertiary">
              {{ credit.heading }}
            </h4>
            <div class="xsmall project-details__info-item-desc">{{ credit.text }}</div>
          </div>
        </div>

        <div
          v-if="hasFurtherReading"
          class="project-details__info-item project-details__info-item--further-reading"
        >
          <div
            v-for="(stat, index) in content.detailsBuildingInfo.filter(
              // USE CLEANED STRING FOR ROBUST COMPARISON
              s => normalizeHeading(s.heading) === 'further reading'
            )"
            :key="index"
          >
            <h4 class="project-details__info-item-sub sub upper color--gray-tertiary mb-15">
              {{ stat.heading }}
            </h4>
            <div v-if="stat.link && stat.newTab" class="xsmall project-details__info-item-desc">
              <a
                class="project-details--building-info-link"
                v-bind:href="stat.link"
                target="_blank"
                rel="noopener"
                >{{ stat.text }}</a
              >
            </div>
            <div
              v-else-if="stat.link && !stat.newTab"
              class="xsmall project-details__info-item-desc"
            >
              <a class="project-details--building-info-link" v-bind:href="stat.link">{{
                stat.text
              }}</a>
            </div>
            <div v-else class="xsmall project-details__info-item-desc">{{ stat.text }}</div>
          </div>
        </div>
      </div>
      <scrollactive :duration="currentDuration" bezier-easing-value=".5,0,.35,1">
        <a
          :data-index="1"
          href="#projectHeading"
          class="scrollactive-item project-details__scroll-top upper button"
          @mouseover="setDuration"
          >Back To Top</a
        >
      </scrollactive>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
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
      currentDuration: 3000,
      sizes: {
        mobile: 413,
        tablet: 660,
        laptop: 855,
        desktop: 489,
        hd: 656,
        fourK: 1313
      }
    }
  },
  methods: {
    // New helper method to trim and lowercase the heading for comparison
    normalizeHeading(str) {
      if (typeof str === 'string') {
        return str.trim().toLowerCase()
      }
      return ''
    },
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
      // ... (handleScroll logic remains the same)
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
  },
  computed: {
    hasFurtherReading() {
      const furtherReadingItems = this.content.detailsBuildingInfo.filter(
        // Use the new helper method for robust check
        s => this.normalizeHeading(s.heading) === 'further reading'
      )
      return furtherReadingItems && furtherReadingItems.length > 0
    }
  }
}
</script>

<style lang="scss">
.project-details {
  padding-top: 40px;
  padding-bottom: 40px;

  &__inner {
    gap: 40px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @include laptop {
      gap: 50px;
      grid-template-columns: 4fr 6fr;
    }
  }

  &__info {
    gap: 40px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @include laptop {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .project-details__info:not(.has-further-reading) {
    @include laptop {
      > .project-details__info-item:nth-child(1) {
        grid-column: 2 / 3;
      }

      > .project-details__info-item:nth-child(2) {
        grid-column: 3 / 4;
      }
    }
  }

  &__intro {
    max-width: 600px;
  }

  &__intro-txt {
    margin-bottom: 40px;
  }

  &__intro-images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .small {
      width: 40%;
    }

    .large {
      width: calc(60% - 20px);
    }

    img {
      max-height: 180px;

      @include laptop {
        max-height: 200px;
      }
    }
  }

  &__info-item-sub {
    margin-bottom: 2.5px;
  }

  &__info-item-desc {
    margin-bottom: 15px;
  }
}
</style>

<template>
  <form
    id="newsletterForm"
    class="flex fd-c"
    name="newsletter"
    method="post"
    v-on:submit.prevent="handleSubmit"
    :action="getRoutePath"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="Newsletter Form" />
    <p hidden>
      <label> Don't fill this out: <input name="bot-field" /> </label>
    </p>

    <div class="newsletter-trigger" @click="isFormVisible = !isFormVisible">
      Join Our Newsletter
    </div>

    <transition name="fade-slide">
      <div v-if="isFormVisible" class="newsletter-content">
        <div class="input-wrapper">
          <input
            id="newsletterInput"
            class="xxsmall"
            type="email"
            name="email"
            :placeholder="signUpMessage"
            v-model="formData.email"
          />
          <button id="newsletterButton">Submit</button>
        </div>
        <div class="xxsmall the-footer__newsletter-notice">
          By signing up, you are also agreeing to The Brooklyn Studio's
          <strong><g-link to="/privacy-policy">Privacy Policy.</g-link></strong>
        </div>
      </div>
    </transition>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      signUpMessage: 'Your Email',
      isFormVisible: false
    }
  },
  computed: {
    getRoutePath() {
      return this.$route.path
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    successMessage() {
      document.getElementById('newsletterForm').reset()
      document.getElementById('newsletterInput').placeholder = 'Thank You For Signing Up!'
      setTimeout(function() {
        document.getElementById('newsletterButton').blur()
      }, 500)
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
        .then(res => {
          if (res) {
            this.successMessage()
          }
        })
        .catch(error => alert(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.newsletter-trigger {
  cursor: pointer;
  @include desktop {
    margin-bottom: 11px;
  }

  @include desktop-down {
    padding: 15px var(--grid-margin);
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-enter-to,
.fade-slide-leave {
  opacity: 1;
  transform: translateY(0);
}
.newsletter-content {
  input {
    margin-bottom: 7px;
  }
  @include desktop {
    margin-bottom: 11px;
  }

  @include desktop-down {
    padding: 15px var(--grid-margin);
  }

  .the-footer__newsletter-notice a {
    border: none;
    padding: 7px 0;
  }
}
</style>

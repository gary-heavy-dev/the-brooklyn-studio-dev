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
    <input type="hidden" name="form-name" value="Newsletter Form"/>
    <p hidden>
      <label>
        Don't fill this out: <input name="bot-field"/>
      </label>
    </p>
    <label for="">Join Our Newsletter:</label>
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
    <div class="xxsmall the-footer__newsletter-notice">By signing up, you are also agreeing to The Brooklyn Studio's <strong>Privacy Policy.</strong></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      signUpMessage: 'Your Email'
    }
  },
  computed: {
    getRoutePath() {
      return this.$route.path;
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
      setTimeout(function(){
        document.getElementById('newsletterButton').blur()
      }, 500)
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(res => {
        if (res) {
          this.successMessage()
        }
      })
      .catch(error => alert(error))
    }
  },
}
</script>
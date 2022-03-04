// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// Import custom g-image srcset mapper
import gImageMap from './utils/gImageMap'

// Import kebab case conversion utility for slug conversion
import toKebabCase from './utils/toKebabCase'

// Import Smoothscroll polyfill
import smoothscroll from 'smoothscroll-polyfill';

// Import Lottie Player
import LottieVuePlayer from "@lottiefiles/vue-lottie-player"

if (process.isClient && typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

// Import lazysizes functionality
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

// Import viewport checking functionality
// https://github.com/vtimofeev/vue-check-view
import checkView from 'vue-check-view'

// Import vue-scrollactive plugin
import VueScrollactive from 'vue-scrollactive';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'preconnect',
    href: 'https://cdn.sanity.io/'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  // Inject global g-image srcset builder
  Vue.prototype.$gImageMap = gImageMap

  // Inject general reveal util
  Vue.prototype.$iAmRevealed = function() {
    // console.log(this.percent)
    this.element.classList.add('have-u-seen-me')

    if (this.percent >= 0.2) {
      this.element.classList.add('seent-it')
    }
  }

  // Add vue-check-view
  Vue.use(checkView)

  // Initialize VueScrollactive
  Vue.use(VueScrollactive)

  // Initialize Lottie Player
  Vue.use(LottieVuePlayer)

  // Smooth scroll to top
  Vue.prototype.$scrollToTop = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  // Inject kebab case conversion utility
  Vue.prototype.$toKebabCase = toKebabCase

  // Delay the scroll-to-top behavior caused by Vue Router to eliminate nasty flash on page transitions
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html#async-scrolling
  router.options.scrollBehavior = function(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (from.hash && to.hash) {
          // console.log("to:", to.hash)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 300)
    })
  }
}

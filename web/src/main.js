// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// Import custom g-image srcset mapper
import gImageMap from './utils/gImageMap'

// Import lazyloading functionality
import VueLazyload from 'vue-lazyload'

// Import lazysizes functionality
import 'lazysizes'

// Import viewport checking functionality
// https://github.com/vtimofeev/vue-check-view
import checkView from 'vue-check-view'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  // Inject global g-image srcset builder
  Vue.prototype.$gImageMap = gImageMap

  // Add VueLazyload options
  Vue.use(VueLazyload, {
    // lazyCOmponent: true,
    observer: true
  })

  // Add vue-check-view
  Vue.use(checkView)

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

  // Do router stuff!
  // router.beforeEach((to, from, next) => {
  //   console.log('to:', to)
  //   console.log('from:', from)
  // })
}

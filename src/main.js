import Vue from 'vue'
import App from './App.vue'
import VueYoutube from 'vue-youtube'
import checkView from 'vue-check-view'
import VueRellax from 'vue-rellax'
import vuetimeline from "@growthbunker/vuetimeline"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart,faRing,faUsers,faGifts,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto';

library.add(faHeart,faGifts,faRing,faUsers,faQuestionCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollTo)
Vue.use(VueRellax)
Vue.use(vuetimeline , {
  theme: "light",

})
Vue.use(checkView)
Vue.use(VueYoutube)

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
     container: "body",
     duration: 600,
     easing: "ease-in-out",
     offset:1000,
     force: true,
     cancelable: true,

     x: false,
     y: true
 })

new Vue({
  render: h => h(App),
}).$mount('#app')

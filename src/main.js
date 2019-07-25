import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BuyModalComponent from './components/Shared/BuyModal'
import * as fb from 'firebase/app'
import vuetify from './plugins/vuetify'

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAWX6SlDtBDvbpkaYoAJaIcvM3PpX4YJfA',
      authDomain: 'itc-ads-151d8.firebaseapp.com',
      databaseURL: 'https://itc-ads-151d8.firebaseio.com',
      projectId: 'itc-ads-151d8',
      storageBucket: 'itc-ads-151d8.appspot.com',
      messagingSenderId: '572093498772',
      appId: '1:572093498772:web:ebd8f4b9922e6d65'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
        this.$store.dispatch('fetchAds')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')

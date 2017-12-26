import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAFg2sM5MzDYAjrAjpT_qWdhaK5SYMmDFw',
      authDomain: 'meetup-ac7a4.firebaseapp.com',
      databaseURL: 'https://meetup-ac7a4.firebaseio.com',
      projectId: 'meetup-ac7a4',
      storageBucket: 'gs://meetup-ac7a4.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})

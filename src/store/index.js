import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
        id: '1',
        title: 'New York',
        date: new Date(),
        location: 'NY',
        description: 'Its NY'
      },
      {imageUrl: 'http://api.theweek.com/sites/default/files/styles/tw_image_9_4/public/iStock-519162622.jpg?itok=nfRcImuY&resize=1260x560',
        id: '2',
        title: 'New York 2',
        date: '2017-07-15',
        location: 'SF',
        description: 'Its SF'
      },
      {imageUrl: 'http://www.wibbitz.com/wp-content/uploads/2015/06/new_york_city.jpg',
        id: '3',
        title: 'New York 3',
        date: new Date(),
        location: 'Canada',
        description: 'Its Canada'
      }
    ],
    user: {
      id: '1',
      registerMeetups: [1]
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '23'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})

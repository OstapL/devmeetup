<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large router to="/meetup" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome Meetups</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', id: '1', title: 'New York'},
        {imageUrl: 'http://api.theweek.com/sites/default/files/styles/tw_image_9_4/public/iStock-519162622.jpg?itok=nfRcImuY&resize=1260x560', id: '2', title: 'New York 2'},
        {imageUrl: 'http://www.wibbitz.com/wp-content/uploads/2015/06/new_york_city.jpg', id: '3', title: 'New York 3'}
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style lang="css" scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0, 0.5);
    color: white;
    font-size: 2em;
    width: 100%;
    text-align: center;
    padding: 20px;
  }
</style>

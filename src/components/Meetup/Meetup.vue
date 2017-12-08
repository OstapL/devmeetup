<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2 class="primary--text">{{ meetup.title}}</h2>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="370px">
          </v-card-media>
          <v-card-text>
            <div><h3 class="info--text">17th July 2017 - Where it takes place</h3></div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nesciunt minima laborum a quia sunt velit consectetur aut ipsam quis temporibus, esse dignissimos accusamus itaque. Deserunt quasi voluptates voluptate sequi?</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <masthead  v-view="viewHandler"></masthead>
    <div :class="[{sticky: sticky }, 'nemo-nav']">
      <navigtion></navigtion>
    </div>

      <mowgli-story id="ourStory"></mowgli-story>
      <proposal  id="proposal"></proposal>
      <entourage  id="entourage"></entourage>
      <rsvp id="rsvp"></rsvp>
  </div>
</template>

<script>
import Masthead from './components/Masthead.vue';
import Navigtion from './components/Navigation.vue';
import MowgliStory from './components/Mowgli.vue';
import Proposal from './components/Proposal.vue';
import Entourage from './components/Entourage.vue';
import Rsvp from './components/Rsvp.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Masthead,
    Navigtion,
    MowgliStory,
    Proposal,
    Entourage,
    Rsvp
  },
  data: () => ({ sticky: false }),
  methods: {
    viewHandler (e) {
      if(e.type == 'exit' && e.percentInView == 0 && e.percentCenter < 0) {
        this.sticky = true
      } else {
        this.sticky = false
      }

    },
    getList() {
      let apiURL = 'http://localhost:4000/api/getEntourage';
      axios.get(apiURL)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {

  }


}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&display=swap');
  body {
    margin:0;
    padding:0;
    font-family: 'Noto Serif TC', serif;
  }

  #app {
    font-family: 'Noto Serif TC', serif;
  }


  .nemo-nav {
    display: block;
    position: relative;

  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    background: #fff;
  }
</style>

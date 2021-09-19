<template>
  <div id="app">
    <masthead  v-view="viewHandler"></masthead>
    <div :class="[{sticky: sticky }, 'nemo-nav']">
      <navigtion @openRsvp="openRsvp()"></navigtion>
    </div>

      <mowgli-story id="ourStory"></mowgli-story>
      <proposal  id="proposal"></proposal>
      <entourage  id="entourage"></entourage>
      <faq  id="faq"></faq>
      <rsvp id="rsvp" v-if="showRsvp" @close="openRsvp()"></rsvp>
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
import Faq from './components/Faq.vue';

export default {
  name: 'App',
  components: {
    Masthead,
    Navigtion,
    MowgliStory,
    Proposal,
    Entourage,
    Rsvp,
    Faq
  },

  data: () => ({ sticky: false,
  showRsvp:false }),
  methods: {
    viewHandler (e) {
      if(e.type == 'exit' && e.percentInView == 0 && e.percentCenter < 0) {
        this.sticky = true
      } else {
        this.sticky = false
      }

    },
    openRsvp() {
      console.log(this.showRsvp)
      this.showRsvp = !this.showRsvp
      console.log(this.showRsvp)
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
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("showRSVP");
    this.showRsvp  = !!c
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

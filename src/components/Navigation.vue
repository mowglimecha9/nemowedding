<template>
  <nav>
    <ul>
      <li>
        <a class="d" href="#" v-scroll-to="'#ourStory'">Our Story</a>
        <a class="i" href="#" v-scroll-to="'#ourStory'"><font-awesome-icon icon="heart" size="lg"  /></a>
      </li>
      <li>
        <a class="d" href="#" v-scroll-to="'#proposal'">The Proposal</a>
        <a class="i" href="#" v-scroll-to="'#proposal'"><font-awesome-icon icon="ring" size="lg"  /></a>
      </li>
      <li>
        <a class="d" href="#" v-scroll-to="'#entourage'">The Entourage</a>
        <a class="i" href="#" v-scroll-to="'#entourage'"><font-awesome-icon icon="users" size="lg"  /></a>
      </li>
      <li>
        <a class="d" href="#" v-scroll-to="'#faq'">FAQs</a>
        <a class="i" href="#" v-scroll-to="'#faq'"><font-awesome-icon icon="question-circle" size="lg"  /></a>
      </li>
      <li>
        <a class="d"  @click='openRsvp($e)'>RSVP</a>
        <a class="i"  @click='openRsvp($e)'><font-awesome-icon icon="envelope" size="lg"  /></a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
@import "./mixins/_mixins.scss";
@import "./vars/colors.scss";
@import "./vars/_breakpoints.scss";

  nav {
    border-bottom: 1px solid rgba(50, 60, 74, 0.2);
    box-shadow: 0px 1px 12px 2px rgba(50, 60, 74, 0.2);
    ul {
      list-style: none;
      padding: 0;
      margin:0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;

      li {
        flex: 1;
        box-sizing: border-box;
        padding: 24px 0;
        text-align: center;
        a {
          width: 100%;
          display: inline-block;
          font-size: 18px;
          letter-spacing: 2px;
          text-decoration: none;
          color: #122540;
          transition: all 0.2s ease-in;

          &:hover {
            color: #384A62;
            text-decoration:underline;
          }


          &.d {
            @include sm {
              display: none;
            }
          }
          &.i {
            display: none;
            @include sm {
              display: block;
            }
          }

        }
          @include sm {
            padding:8px;
            border-left: 1px solid $primary-very-light;
          }
      }
    }
  }
</style>
<script>

export default {
  name: 'Navigation',
  data:()=> {
    return {
      activeTab:''
    }
  },
  methods:{
    openRsvp() {
      this.$emit('openRsvp',true)
    }

  },
  mounted(){

  }

}
</script>

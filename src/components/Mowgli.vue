<template>
    <div>
        <h1>Our Story</h1>
        <div class="story-board-container">
            <div class="story-panel">
                <div class="story-image">
                    <div class="img-container" >
                        <span class="artefact-top"  v-rellax="rellax"></span>
                        <img src="../assets/Mowgli.jpg">
                        <span class="artefact-bottom"  v-rellax="rellax"></span>
                    </div>
                </div>
                <div class="story-text">
                    <h2>How I met Neza . . .</h2>
                    <p>TL;DR: I’m marrying the girl who friendzoned me 11 years ago.</p>
                    <p>I was this skinny, small, very quiet, and an average dude that sits at the back of the class. While she was enjoying the company of her friends she just made minutes ago. She smiles a lot, talks a lot and is clearly congenial. I would unconsciously steal glances at her and get bedazzled. </p>
                    <p>One fine day she asked for my number and I gave it to her without a second thought. Next morning she sent me a text saying “Hi Labz (Loves)”. I was stunned.</p>
                    <p>We exchanged texts almost everyday. Giving her subtle hints that I like her and I wanted to be more than just a friend. I finally mustered all the courage and told her my intentions and my feelings towards her. </p>
                    <p>She rejected me and I got friendzoned. (cue <a href='https://www.youtube.com/watch?v=9aofoBrFNdg' target="_blank">Just A friend</a>). Broken, I went out for a drink and cried in front of my friends. That day was the 8th of December 2010. Next morning, I came to class as if nothing happened. I treated her the same way and kept going.</p>
                    <p>Little did I know she’s already head over heels on me (can’t blame her really). Fast forward to 8 years. I bend the knee and ask her to marry me. She said yes (How can she say no to <a href='https://www.facebook.com/MazelTov9/' target="_blank">this?</a>). And in a few months time we’ll be exchanging vows. </p>
                    <p>"All my life, I second guess everything but if there’s one thing that I’m sure of is when i choose you.</p>
                </div>
            </div>
            <div class="story-panel">
                <div class="story-text">
                    <h2>How I met Mowgli.</h2>
                    <p>I can’t exactly remember how our friendship started. We were classmates from college and later on — he's one of my closest friends. We had this activity from one of our subjects — Group Guidance. The task was to give a letter to someone who you’re thankful for. Expectedly, I was not part of his list but my best friends (maid of honors) were. I think ‘twas a hint to get to know him.</p>
                    <p>It’s been roughly 12 years since we rode together on a jeepney. I initiated to pay for his fare instead of thank you. He said “I pay for your fare tomorrow” from there we looked for each other after class and took the jeepney together - and that’s how the strong friendship started. </p>
                    <p>8th December of 2010, I was seated in front of a computer when my phone beeps and he asks permission if he can woo, without a second thought - I said NO. I was not looking for anything at that time and maybe I was too afraid to ruin the friendship we built. The courtship lasted for 2 years - YES 2 YEARS until we graduated. </p>
                    <p>Our relationship is everything. We could be best friends, we could be boyfriend and girlfriend and sometimes enemies - that’s the good thing about him I can treat him like anyone in this world. A person whose nature is to give good advice, to forgive over and over and will not stop to remind me how I am worthy and imperfectly perfect. Here we are now, 8 years of being together without no monthsaries and anniversaries celebrated. How did we end up getting married on the day I friendzone him? God knows. </p>
                    <p>TL;DR: 11 years in the making. 2 years of courtship, 9 years of loving and hating each and we’re here…  finally getting married.</p>
                  </div>
                <div class="story-image">
                    <div class="img-container">
                        <span class="artefact-top"  v-rellax="rellax"></span>
                        <img src="../assets/Neza.jpg">
                        <span class="artefact-bottom"  v-rellax="rellax"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@import "./mixins/_mixins.scss";
@import "./vars/colors.scss";
@import "./vars/_breakpoints.scss";

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    h1 {
        font-family: 'Dancing Script', cursive;
        color:$primary;
        text-align: center;
        margin-top:24px;
        font-size: 2.5rem;
        margin-bottom: 8px;
    }
    .story-board-container {
        padding: 80px 0;
        width:100%;
        height: 100%;
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content:center;
        background-color: #ffffff;
        box-sizing: border-box;
        background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");

        @include sm {
            padding:20px 10px;
        }
    }

    .story-panel {
        border:3px solid #CABB83;
        border-radius: 12px;
        width: 80%;
        margin-bottom: 100px;
        height: auto;
        position: relative;
        display: flex;
        padding: 40px;
        align-items: center;
        flex-direction: row;
        justify-content: center;

         @include sm {
            padding:20px;
            margin-bottom: 40px;
            flex-direction: column;
        }

    }
     .story-image {
            flex: 1;
            height: auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;


            div.img-container {
                width: 50%;
                height: auto;
                z-index: 1;
                position: relative;

                @include sm {
                    width: 100%;
                }

                img {
                    width: 100%;

                    @include sm {
                        margin:8px 0;
                    }
                }

                span.artefact-top {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    right: -10px;
                    width: 150px;
                    height: 10px;
                    background: #384A62;
                    z-index: -1;

                     @include sm {
                        display: none;
                    }
                }

               span.artefact-bottom {
                    content: '';
                    position: absolute;
                    top: -50px;
                    left: -35px;
                    z-index: -1;
                    width: 90px;
                    height: 80px;
                    background: #384A62;

                    @include sm {
                        display: none;
                    }
                }
            }

        }

        .story-text {
            flex:1;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            height: 100%;

            flex-direction: column;
            padding: 0px 24px;

            @include sm {
                padding: 0px 8px;
            }

            h2 {
                color: #384A62;
            }

            p {
                font-family: 'Noto Sans', sans-serif;
                font-size: 14px;
                margin:8px 0;
                line-height: 1.5;

                @include sm {
                    line-height: 2;
                }
            }

        }
</style>
<script>
export default {
  name: 'MowgliStory',
   data() {
    return {
      rellax: {
        speed: 1,
        center:true,
        percentage:0.5
      }
    }
  },
  methods:{
  },
  mounted(){
  }

}
</script>

<template>
    <div>
        <h1>The Proposal</h1>
        <div class="story-board-container">
         <div class="story-panel">
             <vue-timeline-update
                :date="new Date('2020-10-29')"
                title="The Sales Pitch"
                description="<p class='timeline' style='width:100%'>I called her parents asking for their permission. It was nerve-racking! Nevertheless, relieving. Got all the blessings from them including my Father who appeared in my dream that night and gave me the 'GO Signal'."
                thumbnail="http://mowglimecha.com/photodump/call.jpg"
                category="The Call"
                icon="phone"
                color="turquoise"
                dateString=" "
                animation=true

            />
            <vue-timeline-update
                :date="new Date('2020-10-30')"
                title="Avengers Assemble"
                description="<p class='timeline'style='width:100%'>Imagine I was Nick Fury for a day and assembled all the Avengers to help me organize the most epic engagement ever. We divided and conquered. All the tasks were given and we had to do them in secret.</p>"
                thumbnail="http://mowglimecha.com/photodump/day1.jpg"
                category="The Preparation"
                icon="accessibility"
                color="turquoise"
                dateString=" "
                animation=true
            />
            <vue-timeline-update
                :date="new Date('2020-10-31')"
                title="The Heist"
                description="<p class='timeline'style='width:100%'>This time I felt like I was the 'Professor'. I meticulously planned everything while I looked for the perfect ring. But sadly it wasn't successful, she could smell that I'm up to something (at least my friends).</p>"
                thumbnail="http://mowglimecha.com/photodump/day2.jpg"
                category="The Heist"
                icon="pan_tool"
                color="turquoise"
                animation=true
                dateString=" "
            />
            <vue-timeline-update
                :date="new Date('2020-10-31')"
                title="Lord of the Ring"
                description="<p class='timeline'style='width:100%'>The Ring. Not my hand</p>"
                thumbnail="http://mowglimecha.com/photodump/day5.jpg"
                category="The Preparation"
                icon="radio_button_checked"
                color="turquoise"
                animation=true
                dateString=" "
            />
            <vue-timeline-update
                :date="new Date('2020-11-06')"
                title="The Story of Tonight"
                description="<p class='timeline'style='width:100%'>Raised a glass to restlessness. Unbeknownst to her, The boys are already prepping the house for the pièce de résistance. It's just timely that the 3 of them share the same birth month.</p>"
                thumbnail="http://mowglimecha.com/photodump/day3.jpg"
                category="The Distraction"
                icon="radio_button_checked"
                color="turquoise"
                animation=true
                dateString=" "
            />
             <vue-timeline-update
                :date="new Date('2020-11-06')"
                title="What Comes Next"
                description="<p class='timeline' style='width:100%'>My boys (whom I'm very thankful for up to this day) designed this sweet setup. They exceeded the expectation of what Kathleen had envisioned.</p>"
                thumbnail="http://mowglimecha.com/photodump/day8.jpg"
                category="The Setup"
                icon="radio_button_checked"
                color="turquoise"
                animation=true
                dateString=" "
            />
            <vue-timeline-update
                :date="new Date('2020-11-06')"
                title="The Room Where It Happens"
                description="<p class='timeline' style='width: 100%'>Kathleen as Director. Rhen as Props Coordinator. Ankush as Overall Plan Coordinator. Neeraj as Design Coordinator. Pankaj as Media Coordinator. Suraj as Photo and Video Coordinator. Kevin as Mowgli’s Legman.</p>"
                thumbnail="http://mowglimecha.com/photodump/day4.jpg"
                category="The Setup"
                icon="radio_button_checked"
                color="turquoise"
                animation=true
                dateString=" "
            />
            <vue-timeline-update
                :date="new Date('2020-11-06')"
                title="How can she say no to this?"
                description="<p class='timeline' style='width: 100%'>SHE SAID YES!</p>"
                thumbnail="http://mowglimecha.com/photodump/day6.jpg"
                category="The Setup"
                icon="radio_button_checked"
                color="turquoise"
                animation=true
                dateString=" "
            />
            <youtube width="100%" :video-id="videoId" class="video" ref="youtube" @playing="playing"></youtube>

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
        box-sizing: border-box;
        justify-content:center;
        background-color: #ffffff;
        background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");

        @include sm {
            padding:20px 10px;
        }
    }

    .story-panel {
        border:3px solid #CABB83;
        border-radius: 12px;
        width: 90%;
        height: auto;
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding: 40px;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        @include sm {
            padding:20px;
        }
    }

    .gb-vue-timeline-update__ago {
        display: none;
    }
    .timeline {
        width: 800px;

    }

    .video {
        width:50%
    }
    .story-image {
            flex: 1;
            height: auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;


            div.img-container {
                width: 75%;
                height: auto;
                z-index: 1;
                position: relative;

                img {
                    width: 100%;
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

            h2 {
                color: #384A62;
            }

            p {
                font-family: 'Noto Sans', sans-serif;
                font-size: 14px;
                margin:8px 0;
                line-height: 1.5;
            }
        }

</style>
<script>
export default {
  name: 'Proposal',
    data() {
    return {
      videoId: 'W5GkNUZ8eR4',
      playerVars: {
      }
    }
  },
}
</script>

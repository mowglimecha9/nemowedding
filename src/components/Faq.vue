<template>
    <div>
        <div class="story-board-container">
            <div class="story-panel">
                <div class='entourage-panel'>
                    <h2>FAQs</h2>
                    <div class="entourage-section">
                        <ul class="faq">
                            <li>
                                <h5>GIFTS</h5>
                                <p>With all that we have, we’ve been truly blessed. Your presence and prayers are all that we request, but if you desire to give, nonetheless, monetary gift is one we suggest.</p>
                            </li>
                            <li>
                                <h5>ADULT-ONLY AFFAIR </h5>
                                <p>As much as we love children, we want to give all our guests the opportunity to let their hair down and have a good time without having to worry about little eyes and ears. Thus, we politely request NO CHILDREN, EXCEPT for the ANGELS who are part of our entourage. </p>
                            </li>
                            <li>
                                <h5>UNPLUGGES CEREMONY  </h5>
                                <p>We have one plea: <br> Please keep our ceremony camera-free. Though our “I do’s” are unplugged, our reception is not. Once we make our first kiss, you’re free to take a shot! </p>
                            </li>
                            <li>
                                <h5>WHY IS RSVP SO IMPORTANT?  </h5>
                                <p>It’s for us to identify the guests who are attending. Your RSVP will help us determine the FINAL HEAD COUNT for food serving and guest list for the seating arrangement. </p>
                            </li>
                            <li>
                                <h5>I SAID “YES” TO THE RSVP BUT HAD A CHANGE OF PLANS. I CAN NO LONGER ATTEND THE WEDDING WHAT SHOULD I DO?  </h5>
                                <p>Please do let us know immediately so we can make the necessary changes in our seating arrangement and, we can offer the seat to someone else. </p>
                            </li>
                            <li>
                                <h5>I SAID “NO” TO THE RSVP BUT HAD A CHANGE OF PLANS. I CAN ATTEND NOW, WHAT SHOULD I DO? </h5>
                                <p>We already took your “NO” as FINAL CONFIRMATION. Please understand that we have allotted the seat to someone else when you declined the invitation. We can meet some other time after the wedding to catch up. Dinner, maybe? </p>
                            </li>
                            <li>
                                <h5>CAN I BRING SOMEONE ELSE WITH ME?  </h5>
                                <p>We request that only the allotted number of guests indicated in the invitation be followed. For e-invites, we mentioned the number of seats allotted for you and your family.  </p>
                                <p>As much as we would like to invite everyone, we can only accommodate a certain number of guests. That is why we created a scheme wherein people closest to our hearts can all be invited. Unfortunately, our scheme does not allow EVERYONE to be present, but only representatives per family. This does not mean that the other family member who wouldn’t or couldn’t be present aren’t as important as those who are present. We LOVE ALL of our families and this is the time where we ask for your utmost love and understanding. </p>
                            </li>
                        </ul>
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

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
    h1 {
        font-family: 'Dancing Script', cursive;
        color:$primary;
        text-align: center;
        margin-top:24px;
        font-size: 2.5rem;
        margin-bottom: 8px;
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
        flex-direction: row;

        @include sm {
            padding:20px;
            margin-bottom: 40px;
            flex-direction: column;
        }
    }
    .story-board-container {
        padding: 80px 0;
        width:100%;
        height: 100%;
        display: flex;
        align-items:center;
        flex-direction: row;
        box-sizing: border-box;
        justify-content:center;
        background-color: #ffffff;
        background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");

        @include sm {
            padding:20px;
        }
    }
    .entourage-panel {
        width: 100%;
        border-collapse: collapse;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        h2 {
            font-family: 'Dancing Script', cursive;
            font-size: 4rem;
            margin:20px 0;
            color:#384A62;
            text-align: center;

            @include sm {
                 font-size: 2rem;
            }
        }


        @include sm {
            width: 100%;
        }
    }

    .faq {
        list-style: none;

        li {
            display: block;
            margin-bottom: 32px;

            h5 {
                font-family: 'Open Sans', sans-serif;
                font-size:22px;
                margin:8px 0;
                width: 65%;
            }

            p {
                line-height: 1.5;
                font-family: 'Open Sans', sans-serif;
                width: 65%;
            }
        }

    }
</style>
<script>
export default {
  name: 'Faq',
   data() {
    return {

    }
  },
  methods:{
  },
  mounted(){
  }

}
</script>

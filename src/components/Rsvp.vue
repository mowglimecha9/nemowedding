<template>
   <div class="rsvp-container">
       <div class="rsvp-questionaire">
            <div class="rsvp-slides" v-if="step == 1">
                <p class="subtext">Mowgli &amp; Neza's Wedding</p>
                <p>If you're responding for you and a guest (or your family), you'll be able to RSVP for you entire group.</p>
                <input type="text" v-model="searchText" @keyup="hasSubmit = false" autofocus>
                <div class="loader-container" v-if="showLoader">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                <p v-if="hasSubmit && guests.length === 0">Oops! We're having trouble looking for the invite. Please contact us. You know where you can reach us!</p>
                <button @click="searchGuests()">Find Your Invitation</button>
            </div>
            <div class="rsvp-slides"  v-if="step == 2">
                <p class="subtext">We've found you in the guest list! Please confirm your name below to continue with your RSVP.</p>

                <ul>
                    <li v-for="guest in guests" :key="guest._id">
                        <input type="radio" :value="guest" :id="guest._id" name="guests" @click="selectedGuest = guest"><label :for="guest._id"> {{guest.Name}} </label>
                    </li>
                </ul>
                <button :disabled="!selectedGuest.Name" @click="confirm()">Confirm</button>
                <button class="search" @click="searchAgain()">Search Again</button>
            </div>
            <div class="rsvp-slides"  v-if="step == 3">
                <p class="subtext">RSVP</p>
                <p>{{selectedGuest.Name}}, we kindly request your reply before November 1st.</p>
                <div class="rsvp-ask" @click="userAccepted()">
                    <div class="box"><font-awesome-icon icon="check" class="icon" size="lg"  v-if="accepted"/></div>
                    <span>Yes, I will be there!</span>
                </div>
                <div class="rsvp-ask" @click="userDeclined()">
                    <div class="box"><font-awesome-icon icon="times" class="icon" size="lg" v-if="declined" /></div>
                    <span>No, I can't come.</span>
                </div>
                <button @click="confirmRSVP()">Confirm</button>
                <button class="search" @click="step = 1">Go Back</button>
            </div>
            <div class="rsvp-slides"  v-if="step == 4">
                <p class="subtext">Are you Vaccinated?</p>
                <p>{{selectedGuest.Name}}, for everyone's safety we encourage everyone to get Vaccinated.</p>
                <div class="rsvp-ask" @click="userVaccinated()">
                    <div class="box"><font-awesome-icon icon="check" class="icon" size="lg"  v-if="vac"/></div>
                    <span>Yes, I am Vaccinated</span>
                </div>
                <div class="rsvp-ask" @click="userSoonVac()">
                    <div class="box"><font-awesome-icon icon="calendar-alt" class="icon" size="lg"  v-if="soon"/></div>
                    <span>Scheduled to be Vaccinated.</span>
                </div>
                <div class="rsvp-ask" @click="userNAVac()">
                    <div class="box"><font-awesome-icon icon="times" class="icon" size="lg"  v-if="notapvac"/></div>
                    <span>Not Applicable (&lt; 18 yrs old)</span>
                </div>
                <div class="rsvp-ask" @click="userNoVac()">
                    <div class="box"><font-awesome-icon icon="times" class="icon" size="lg" v-if="novac" /></div>
                    <span>Not yet Vaccinated.</span>
                </div>

                <button @click="confirmVaccine()">Confirm</button>
                <button class="search" @click="step = 1">Go Back</button>
            </div>
            <div class="rsvp-slides"  v-if="step == 5">
                <p class="subtext">Phone Number</p>
                <p>Please give us your contact number</p>
                <input type="text" v-model="contactNumber" @keyup="hasSubmit = false" autofocus>
                <button @click="confirmNumber()">Confirm</button>
                <button class="search" @click="step = 1">Go Back</button>
            </div>
            <div class="rsvp-slides"  v-if="step == 6">
                <p class="subtext">Send the couple a message.</p>
                <p v-if="declined">Sorry to hear that you're unable to come.</p>
                <p v-if="accepted">Anything you want to say to the couple?</p>
                <textarea  v-model="message"></textarea>
                <button @click="confirmNote()">Confirm</button>
                <button class="search" @click="step = 1">Go Back</button>
            </div>
            <div class="rsvp-slides"  v-if="step == 7">
                <p class="subtext" v-if="declined">Thanks for being awesome! We have received your message. Hope to see you soon!</p>
                <p class="subtext" v-if="accepted && !novac">Thanks for being awesome! We have received your message. Looking forward to see you soon!</p>
                <p class="subtext" v-if="accepted && novac">Thanks for being awesome! We have received your message. We encourage our guests to get vaccinated.
                    It’s primarily for everyone’s safety and older loved ones who are higher at risk. Except for Children under 18 years old. Please let us know when you receive your vaccine. Thanks!</p>
                <button class="search" @click="startAgain()">Go Back</button>
            </div>
       </div>
        <span class="close" @click="close()">X Close</span>
   </div>
</template>
<style lang="scss" scoped>
@import "./mixins/_mixins.scss";
@import "./vars/colors.scss";
@import "./vars/_breakpoints.scss";
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Besley&family=Noto+Sans+SC:wght@100&display=swap');

        .close {
            font-family: 'Noto Sans SC', sans-serif;
            display: block;
            margin:8px 0;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
        }
        .rsvp-ask {
            display: flex;
            width: 100%;
            flex-direction: row;
            margin: 32px 0;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;


            span {
                width: 65%;
                font-size: 18px;
                font-family: 'Noto Sans SC', sans-serif;
            }
        }

        .icon {
             color:#4f76a9;
             font-size: 24px;
        }

        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border: 2px solid #4f76a9;
        }
        .loader-container {
            width: 100%;
        }
        .lds-ellipsis {
            display:block;
            margin: auto;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .lds-ellipsis div {
            position: absolute;
            top: 33px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: #658BC0;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes lds-ellipsis3 {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
        @keyframes lds-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(24px, 0);
            }
        }
    ul {
        list-style: none;
        margin:0;
        padding:0;
        margin-bottom:12px;
    }
    li {
        margin:12px 0;
        font-family: 'Noto Sans SC', sans-serif;
        font-size: 18px;
    }

    .rsvp-container {
        display: flex;
        position: fixed;
        top:0;
        left: 0;
        overflow: hidden;
        width:100%;
        height: 100%;
        background-color:rgba(6,19,29,26);
        z-index: 2;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .rsvp-questionaire {
        width: 450px;
        min-height: 360px;
        height: auto;
        padding: 40px;
        box-sizing: border-box;
        border-radius: 4px 4px 0 0;
        background-color: #f1ede6;
        box-shadow: 1px 2px 9px 0px #dac2c2;
        overflow: hidden;

        @include sm {
                width: 100%;
                min-height: 360px;
            }

        p {
            margin:4px 0;
            font-weight: 100;
            font-family: 'Noto Sans SC', sans-serif;

            &.subtext {
                font-size: 20px;
                font-family: 'Besley', serif;
                font-weight: 500;
                display: block;
                margin-bottom: 12px;
            }
        }

        textarea {
            resize: none;
            width:95%;
            margin:12px 0;
            height: 100px;
            background-color:transparent;
            border:1px solid #000;
            font-size: 18px;
            font-family: 'Noto Sans SC', sans-serif;
            padding:8px;
        }

        input[type=text] {
            width:95%;
            margin:24px 0;
            height: 40px;
            background-color:transparent;
            border:none;
            border-bottom:1px solid #000;
            font-size: 24px;
            font-family: 'Noto Sans SC', sans-serif;
            padding:8px ;

            &:focus {
                outline: none;
            }
        }
        button {
            font-family: 'Noto Sans SC', sans-serif;
            text-transform: uppercase;
            text-align: center;
            background-color:#223D61;
            width: 100%;
            border:none;
            padding:12px 0;
            color: #fff;
            margin-top:8px;
            letter-spacing: 1px;

            &:disabled {
                background: #71839c;
            }

            &:active {
                background: #2b5c9e;
            }
        }

        .rsvp-slides {
            transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .search {
            background: #5a6d86;
        }
    }
</style>
<script>
import axios from 'axios';
import API_URL from '../configs/config';
export default {
    name:'Rsvp',
    data: () => ({
        searchText: "",
        step:1,
        showLoader:false,
        guests: [],
        selectedGuest:{},
        hasSubmit:false,
        declined:false,
        accepted:false,
        vac:false,
        soon:false,
        notapvac:false,
        novac:false,
        contactNumber:""
    }),
    methods: {
        userVaccinated() {
            this.selectedGuest.Vaccinated = "Done"
            this.novac = false;
            this.soon = false;
            this.vac = true;
            this.notapvac = false;
        },
        userSoonVac() {
            this.selectedGuest.Vaccinated = "Soon"
            this.novac = false;
            this.soon = true;
            this.vac = false;
            this.notapvac = false;
        },
        userNAVac() {
            this.selectedGuest.Vaccinated = "Not Applicable"
            this.novac = false;
            this.soon = false;
            this.vac = false;
            this.notapvac = true;
        },
        userNoVac() {
            this.selectedGuest.Vaccinated = "Not Yet";
            this.novac = true;
            this.soon = false;
            this.vac = false;
            this.notapvac = false;
        },
        userDeclined() {
            this.declined = true;
            this.accepted = false;
            this.selectedGuest.Attending =false;
        },
        userAccepted() {
            this.declined = false;
            this.accepted = true;
            this.selectedGuest.Attending = true;
        },

        searchAgain() {
            this.step = 1;
            this.clearData();
        },
        confirm() {
            if(this.selectedGuest._id) {
                this.step = 3;
            }
        },
        confirmRSVP() {
            let apiURL = API_URL + '/update/';
                axios.put(apiURL,this.selectedGuest)
                    .then( (response) =>{
                      console.log(response)
                      if(this.selectedGuest.Attending) {
                        this.step = 4;
                      } else {
                        this.step = 6
                      }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        },
        confirmVaccine() {
            let apiURL = API_URL + '/updateVaccine/';
                axios.put(apiURL,this.selectedGuest)
                    .then( (response) =>{
                      console.log(response)
                      if(this.novac) {
                        this.step = 7;
                      } else {
                        this.step = 5;
                      }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        },
        startAgain() {
            this.clearData();
            this.step =1
        },
        confirmNumber() {
            this.selectedGuest.Phone = this.contactNumber
            let apiURL = API_URL + '/updateNo/';
                axios.put(apiURL,this.selectedGuest)
                    .then( (response) =>{
                      console.log(response)
                      this.step = 6;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        },
         confirmNote() {
            this.selectedGuest.Message = this.message;
            let apiURL = API_URL + '/updateMessage/';
                axios.put(apiURL,this.selectedGuest)
                    .then( (response) =>{
                      console.log(response)
                      this.step = 7;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        },
        close() {
            this.$emit('close',true)
        },
        clearData() {
            this.searchText = "";
            this.contactNumber  = "";
            this.selectedGuest = {};
            this.declined=false;
            this.accepted=false
            this.vac=false
            this.soon=false
            this.message = "";
            this.novac=false
        },
        sanitize(string) {
            return string[0].toUpperCase() + string.slice(1);
        },
        searchGuests() {
            this.showLoader = true;
            if(this.searchText.length >= 3) {
                let apiURL = API_URL + '/getEntourageByName/' + this.sanitize(this.searchText);
                axios.get(apiURL)
                    .then( (response) =>{
                        this.guests = response.data
                        this.showLoader = false;
                        this.hasSubmit = true;
                        if(this.guests.length > 0) {
                            this.step = 2;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                this.showLoader = false;
                return false
            }
        },

  }
}
</script>

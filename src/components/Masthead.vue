<template>
    <div class="masthead">
        <div class="card">
            <img src="../assets/logo.png">
            <!-- <span class="date">Wednesday, Eighth of December</span>
            <span class="date-i">Two Thousand Twenty One</span>
            <span class="date-i">Three in the afternoon</span>
            <span class="date-i">Redemptorist Church</span>
             <span class="date-i">Bacolod City</span> -->
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "./mixins/_mixins.scss";
@import "./vars/colors.scss";
@import "./vars/_breakpoints.scss";

.masthead {
        width:100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background:$primary-dark;
    }

    .card {
        border:3px solid #CABB83;
        border-radius: 12px;
        width: 90%;
        height: 90%;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        @include sm {
            width: 90%;
            height: 90%;

            img {
                width: 75%;
            }

            span {
                &.date {
                    font-size: 2vw!important;
                    color: #cabb82;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                &.date-i {
                    margin-bottom: 8px;
                    font-style: italic;
                    font-size: 2vw!important;
                    color: #cabb82;
                    text-transform: uppercase;
                }


            }
        }

        &::before {
            content: " ";
            border-radius: 12px;
            position: absolute;
            z-index: 1;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border: 3px solid #CABB83;
        }

          span {
            &.date {
                 font-size: 1vw;
                 color: #cabb82;
                 margin-bottom: 8px;
                 text-transform: uppercase;
            }

            &.date-i {
                 margin-bottom: 8px;
                font-style: italic;
                 font-size: 1vw;
                 color: #cabb82;
                 text-transform: uppercase;
            }


        }

    }

</style>



<script>
export default {
  name: 'Masthead',
}
</script>

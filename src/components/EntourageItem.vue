<template>
    <div class="item">
        <img :src=image>
        <span  class="name">{{name}}</span>
        <span class="title">{{title}}</span>
    </div>
</template>
<style lang="scss" scoped>
@import "./mixins/_mixins.scss";
@import "./vars/colors.scss";
@import "./vars/_breakpoints.scss";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
    .item {
        display: flex;
        font-family: 'Open Sans', sans-serif;
        flex:1;
        margin: 20px 0;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        align-items: center;

        img {
            width: 150px;
            height: auto;
            margin-bottom: 8px;

             @include sm {
                width: 100px;
            }
        }

        .name {
            font-weight: 700;
            color: #122540;
            display: block;
            margin-bottom: 4px;
            font-size: 16px;

            @include sm {
                font-size: 12px;
            }
        }

        .title {
            color:#323C4A ;
            font-size: 14px;

            @include sm {
                font-size: 10px;
            }
        }
    }
</style>
<script>
export default {
    name:'EntourageItem',
    props:{
        name:String,
        image:String,
        title:String,
        subTitle:String
    }
}
</script>

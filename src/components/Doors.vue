<template>
    <div>
        <div class="door-container">
            <div class="door neza" :class="{ 'toLeft': toAnimate}">
                Ne
            </div>
            <div class="door mowgli" :class="{ 'toRight': toAnimate}">
                Mo
            </div>
        </div>
        <button @click="init()">asdsd</button>
    </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&family=Coming+Soon&display=swap');
    .door-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
        align-items: center;
    }
    .door {
        display: flex;
        padding: 10px;
        background: #fff;
        width: 50vw;
        box-sizing: border-box;
        height: 100vh;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        transition: all 1s cubic-bezier(0,0,1,1);
    }

    .neza {

        justify-content: flex-end;
        font-family: 'Allura', cursive;
        font-size: 10em;
    }

    .mowgli {

        justify-content: flex-start;
        font-family: 'Coming Soon', cursive;
        font-size: 9em;
    }

    .toLeft {
       transform: translateX(-120%);
   }

   .toRight {
       transform: translateX(120%);
   }

</style>



<script>
export default {
  name: 'Doors',
  data: () => ({ toAnimate: false }),
  methods:{
    init(){
      this.toAnimate = !this.toAnimate
    }
  },
  mounted(){
  }

}
</script>

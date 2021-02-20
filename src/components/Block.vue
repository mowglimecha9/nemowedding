<template>
    <div class="block">
      <div class="image-block">
        <img src="../assets/nemo.jpeg">
      </div>
      <div class="text-block">
        <h1>Mowgli &amp; Neza</h1>
        <p>lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter
          in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
        <p>lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter
        in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
      </div>
    </div>
</template>


<style lang="scss" scoped>
    .block {
        display: flex;
        width: 60%;
        height: 100%;
        min-height: 300px;
        align-items: center;
    }

    .image-block {
      width:40%;

      img {
        width:100%;
      }
    }

    .text-block {
      height: 100%;
      color: #2c3e50;

      h1 {
        transform: translate(-50px, -50px);
        font-size: 40px;
        font-weight: 700;
        background-color: #2c3e50;
        color: #fff;
        padding: 8px;
        margin:0
      }

      p {
        width:350px;
        margin: 8px;
      }
    }
</style>



<script>
export default {
  name: 'Block',
}
</script>

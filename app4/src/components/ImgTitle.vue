
<script setup>
import { ref } from "vue";

const title = ref("Anton Kopti");
const srcImg = ref("selfpic.png");

const src2 = "../assets/selfpic.png"
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Hover over the image to see the effect.</p>
    <div class="container">
      <img src="../assets/selfpic.png" />
      <div class="overlay">My Name is {{ title }}</div>
    </div>
  </div>
</template>


<style>
* {
  box-sizing: border-box;
}

.container {
  position: relative;
  width: 50%;
  max-width: 300px;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

.container:hover .overlay {
  opacity: 1;
}
</style>
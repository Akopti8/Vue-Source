<script setup>
import { ref } from "vue";

const p1 = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis. Turpis egestas integer eget aliquet. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Imperdiet dui accumsan sit amet nulla facilisi. Non enim praesent elementum facilisis. In arcu cursus euismod quis viverra. Tincidunt tortor aliquam nulla facilisi cras. Laoreet sit amet cursus sit. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Magnis dis parturient montes nascetur ridiculus mus mauris.");
const p2 = ref("Blandit aliquam etiam erat velit scelerisque in dictum non. Lacus viverra vitae congue eu consequat ac felis. Porta nibh venenatis cras sed felis eget. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas sed sed risus pretium quam. Viverra orci sagittis eu volutpat odio. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Proin sed libero enim sed. Quam lacus suspendisse faucibus interdum posuere. Turpis in eu mi bibendum neque egestas congue. Elit sed vulputate mi sit amet mauris commodo.");
const p3 = ref("Nunc scelerisque viverra mauris in aliquam sem. Non blandit massa enim nec dui nunc mattis. Lorem ipsum dolor sit amet consectetur. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In metus vulputate eu scelerisque. Cursus metus aliquam eleifend mi. Elit duis tristique sollicitudin nibh sit amet commodo. Sed viverra ipsum nunc aliquet. Risus ultricies tristique nulla aliquet enim tortor at auctor. Eu scelerisque felis imperdiet proin. Neque egestas congue quisque egestas. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Nam aliquam sem et tortor consequat.");

function emptyp1(){
  p1.value= (p1.value === "")? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis. Turpis egestas integer eget aliquet. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Imperdiet dui accumsan sit amet nulla facilisi. Non enim praesent elementum facilisis. In arcu cursus euismod quis viverra. Tincidunt tortor aliquam nulla facilisi cras. Laoreet sit amet cursus sit. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Magnis dis parturient montes nascetur ridiculus mus mauris." : ""
}
function emptyp2(){
  p2.value= (p2.value ==="") ? "Blandit aliquam etiam erat velit scelerisque in dictum non. Lacus viverra vitae congue eu consequat ac felis. Porta nibh venenatis cras sed felis eget. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas sed sed risus pretium quam. Viverra orci sagittis eu volutpat odio. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Proin sed libero enim sed. Quam lacus suspendisse faucibus interdum posuere. Turpis in eu mi bibendum neque egestas congue. Elit sed vulputate mi sit amet mauris commodo." : "";
}
function emptyp3(){
  p3.value= (p3.value==="") ? "Nunc scelerisque viverra mauris in aliquam sem. Non blandit massa enim nec dui nunc mattis. Lorem ipsum dolor sit amet consectetur. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In metus vulputate eu scelerisque. Cursus metus aliquam eleifend mi. Elit duis tristique sollicitudin nibh sit amet commodo. Sed viverra ipsum nunc aliquet. Risus ultricies tristique nulla aliquet enim tortor at auctor. Eu scelerisque felis imperdiet proin. Neque egestas congue quisque egestas. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Nam aliquam sem et tortor consequat." : "";
}

</script>

<template>
  <div>

    <button @click="emptyp1()">Affect Paragraph 1</button> <br>
    <button @click="emptyp2()">Affect Paragraph 2</button> <br>
    <button @click="emptyp3()">Affect Paragraph 3</button>
<div class="grid-container">
  <div class="grid-item">{{ p1 }}</div>
  <div class="grid-item">{{ p2 }}</div>
  <div class="grid-item">{{ p3 }}</div> 
  </div></div>
</template>
<style>
.grid-container {
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
<template>
  <div class="grandparent">
    <h1>Grandparent Component</h1>
    <Parent />
  </div>
</template>
  
  <script setup>
import Parent from "./Parent.vue";
import { provide } from 'vue';

provide("grandparentData", "This data is from the Grandparent component");

</script>
  
  <style>
.grandparent {
  background-color: #f1c40f;
  padding: 20px;
}
</style>
  
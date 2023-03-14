<template>
    <div class="parent">
      <h2>Parent Component</h2>
      <p>Grandparent data: {{ grandparentData }}</p>
      <Child />
    </div>
  </template>
  
  <script setup>
  import Child from './Child.vue'
  import { provide, inject } from 'vue';

    provide('parentData', 'This data is from the Parent component')
    const grandparentData = inject('grandparentData');
  </script>
  
  <style>
  .parent {
    border: 2px solid #3498db;
    padding: 20px;
  }
  </style>
  
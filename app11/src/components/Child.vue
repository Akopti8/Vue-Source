<template>
      <div class="child" :style="{ border: '2px solid red', padding: '10px' }">
      <h3>Child Component</h3>
      <div class="container">
        <p>Grandparent data: {{ grandparentData }}</p>
        <p>Parent data: {{ parentData }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';

  const grandparentData = inject('grandparentData');
  const parentData = inject('parentData');

  </script>
  
  <style>
  .child {
    margin-top: 20px;
  }
  
  .container {
    background-color: #ecf0f1;
    padding: 20px;
  }
  </style>
  
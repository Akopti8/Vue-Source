<template>
    <div class="card">
      <h2>{{ cardData.title }}</h2>
      <p>{{ cardData.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    cardData: {
      type: Object,
      required: true,
    },
  });
  </script>
  
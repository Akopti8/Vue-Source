<template>
    <img :src="imgSrc" style="width: 200px; height: auto;">
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
  });
  const imgSrc = ref(props.src)

  </script>
  
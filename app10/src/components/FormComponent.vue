<template>
  <form @submit.prevent="submitForm">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="title">
    <label for="description">Description:</label>
    <textarea id="description" v-model="description"></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['submit-form']);

const title = ref('');
const description = ref('');

const submitForm = () => {
  const newCardData = {
    title: title.value,
    description: description.value,
  };
  emits('submit-form', newCardData);

  // Clear the input fields
  title.value = '';
  description.value = '';
};

// Return the reactive variables and functions

</script>

<template>
  <div class="app-container">
    <form-component @submit-form="addNewCard"></form-component>
    <div class="card-container">
      <card-component v-for="(card, index) in cards" :key="index" :card-data="card"></card-component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormComponent from './components/FormComponent.vue';
import CardComponent from './components/CardComponent.vue';

const cards = ref([]);

const addNewCard = (newCardData) => {
  cards.value.push(newCardData);
};
</script>
<style>
.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
}

.card h2 {
  font-size: 24px;
  margin-top: 0;
}

.card p {
  font-size: 16px;
  margin-bottom: 0;
}

form label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}

form input[type="text"],
form textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 20px;
}

form button[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
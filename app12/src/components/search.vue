<template>
  <form @submit.prevent="searchItem">
    <input v-model="search" type="text" placeholder="Search item">
    <button type="submit">Search</button>
  </form>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'SearchBar',
  setup() {
    const search = ref('');
    const route = useRoute();
    const router = useRouter();

    const searchItem = () => {
      if (search.value) {
        router.push(`/items/${search.value}`);
        search.value = '';
      }
    };

    return { search, searchItem };
  }
}
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  margin-left: auto;
}

input {
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
  margin-right: 10px;
}

button {
  border: none;
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>

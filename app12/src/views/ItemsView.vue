<template>
    <nav>
      <HomeNav />
      <Items />
      <SearchBar />
    </nav>
    <main>
      <div>
        <h2>Item List</h2>
        <div>
          <div v-if="$route.params.id">
            <div v-if="selectedItem">
              <Desc :name="selectedItem.name" :description="selectedItem.description" />
              <Image :src="selectedItem.image"/>
            </div>
            <div v-else>
              <p>No item found with ID: {{ $route.params.id }}</p>
            </div>
          </div>
          <div v-else>
            <ul>
              <li v-for="(item, index) in Data" :key="index">
                <router-link :to="'/items/' + item.name.toLowerCase()">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import Items from "../components/itemsnav.vue";
  import HomeNav from "../components/homenav.vue";
  import SearchBar from "../components/search.vue";
  import { useRoute } from "vue-router";
  import { watch, computed, ref  } from "vue";
  import Data from "../assets/data.js";
  import Desc from "../components/Description.vue"
  import Image from "../components/Image.vue"
  
  console.log(Data[1].image)
  const route = useRoute();
  let id = route.params.id;
  console.log(id);
  
  let label = undefined;
  setLabel();
  watch(() => route.params.id, setLabel);
  function setLabel() {
    console.log("params changed");
    console.log(route.params);
    let id = route.params.id;
    let friendName = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : "";
    label = id ? `${route.name} ${friendName}` : route.name;
  }
  
  const selectedItem = computed(() => {
    
    return Data.find((item) => item.name.toLowerCase() === route.params.id);
  });

  </script>
  
  <style>
  body {
    position: relative;
    margin: 5%;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  li img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
  
  li h3 {
    margin: 0;
  }
  
  li p {
    margin: 0;
    color: #777;
  }
  </style>
  
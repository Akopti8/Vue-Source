<template>
    <!-- The main container -->
    <div>
      <!-- Title and buttons for adding, removing, and shuffling items -->
      <h1>Vue Transitions Example</h1>
      <button @click="addItem">Add Item</button>
      <button @click="removeItem">Remove Item</button>
      <button @click="shuffleItems">Shuffle Items</button>
      
      <!-- The transition group for the list of items 
        teh name property will be used to add style for ransition in the stylesheet
        the tag emphasizes what king of html transition group it is and what it will contain
        -->
      <transition-group name="list" tag="ul">
        <!-- Loop through the state array and create a list item for each item in the array -->
        <li v-for="state in state" :key="state.id">
          {{ state.name }}
        </li>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import {reactive} from 'vue';
  
  // The reactive state array
  const state = reactive([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ])
  
  // Add a new item to the end of the state array
  function addItem() {
    const newItem = { id: state.length + 1, name: `Item ${state.length + 1}` }
    state.push(newItem)
  }
  
  // Remove the last item from the state array
  function removeItem() {
    state.pop()
  }
  
  // Shuffle the items in the state array
  function shuffleItems() {
    // Update the state array with the shuffled items
    state.value = shuffleArray(state)
  }
  
  // Helper function to shuffle an array
  function shuffleArray(array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex
  
    // Loop through each element of the array and swap it with a random element
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
  
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
  
    // Return the shuffled array
    return array
  }
  </script>
  
  <style>
 /* The CSS transitions for entering, leaving, and moving list items */
.list-enter-active,
.list-leave-active,
.move {
  transition: all 0.5s ease;
}

/* The CSS styles for list items entering the list */
.list-enter-from,
/* The CSS styles for list items leaving the list */
.list-leave-to,
/* The CSS styles for list items moving within the list */
.move {
  opacity: 0;
  transform: translateX(30px);
}

/* The CSS transitions for moving list items */
.list-move,
.move {
  transition: all 0.5s ease;
}


  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 1.2em;
    color: #333;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #007aff;
    color: #fff;
    border-radius: 5px;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
  }

  button:hover {
    background-color: #0066d5;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  div {
    max-width: 600px;
    margin: 0 auto;
  }
</style>

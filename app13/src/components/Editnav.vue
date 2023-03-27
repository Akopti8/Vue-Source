<!-- Items component -->
<template>
    <nav class="nav-items">
      <RouterLink class="link" to="/edit">Edit</RouterLink>
    </nav>
  </template>
  
  <style scoped>
  .nav-items {
    display: flex;
    justify-content: right;
    align-items: right;
  }
  
  .link {
    text-decoration: none;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .link:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
  
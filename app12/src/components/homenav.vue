<!-- HomeNav component -->
<template>
    <nav class="nav-home">
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </template>
  
  <style scoped>
  .nav-home {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
  
  a {
    text-decoration: none;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  a:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
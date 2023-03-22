<script setup>
    
    import Items from '../components/itemsnav.vue';
    import HomeNav from '../components/homenav.vue';
</script>

<template>
  <div class="container">
    <nav>
      <HomeNav />
      <Items />
    </nav>
    <main>
    </main>
    <div class="image-container">
      <img class="cartoon-image" src="../assets/powerpuff_girls.jpg" alt="Cartoon image">


    </div>
  </div>
</template>

<style>
.container {
  position: relative;
  margin: 5%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  color: #555;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 20px;
}

nav ul li:first-child {
  margin-left: 0;
}

.image-container {
  position: absolute;
  top: 473%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: roll-up 1s ease-in-out forwards;
}

.cartoon-image {
  max-width: 100%;
  max-height: 100%;
}

@keyframes roll-up {
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>

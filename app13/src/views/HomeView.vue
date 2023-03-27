<script setup>
import HomeNav from '../components/homenav.vue';
import EditNav from '../components/Editnav.vue';
import { useUserStore } from '../stores/user.js'
const contact = useUserStore();
console.log(contact.userInfo)

</script>

<template>
  <div class="about">
    <nav>
      <HomeNav />
      <EditNav />
    </nav>
    <div id="app">
      <div class="card">
        <div class="title">Contact Information</div>
        <div class="info">
          <div class="label">First Name:</div>
          <div class="value">{{ contact.userInfo.FName }}</div>
        </div>
        <div class="info">
          <div class="label">Last Name:</div>
          <div class="value">{{ contact.userInfo.LName }}</div>
        </div>
        <div class="info">
          <div class="label">Street Address:</div>
          <div class="value">{{ contact.userInfo.StreetAdress }}</div>
        </div>
        <div class="info">
          <div class="label">City:</div>
          <div class="value">{{ contact.userInfo.City }}</div>
        </div>
        <div class="info">
          <div class="label">State:</div>
          <div class="value">{{ contact.userInfo.State }}</div>
        </div>
        <div class="info">
          <div class="label">Zip:</div>
          <div class="value">{{ contact.userInfo.Zip }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.contact-page {
  padding-top: 70px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.navbar .logo {
  font-size: 24px;
  font-weight: bold;
}

.navbar .nav-links {
  display: flex;
}

.navbar .nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-left: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  padding: 20px;
  width: 400px;
}

.card-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.info {
  display: flex;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  width: 150px;
}

.value {
  margin-left: 10px;
}
.about{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>



<script setup>
import HomeNav from '../components/homenav.vue';
import EditNav from '../components/Editnav.vue';
import { useUserStore } from '../stores/user.js'
import { ref } from 'vue'

const contact = useUserStore();

const firstName = ref(contact.userInfo.FName);
const lastName = ref(contact.userInfo.LName);
const streetAddress = ref(contact.userInfo.StreetAdress);
const city = ref(contact.userInfo.City);
const state = ref(contact.userInfo.State);
const zip = ref(contact.userInfo.Zip);

function submitForm() {
  contact.userInfo = {
    FName: firstName.value,
    LName: lastName.value,
    StreetAdress: streetAddress.value,
    City: city.value,
    State: state.value,
    Zip: zip.value
  };
  alert("data updated")
}
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
        <form @submit.prevent="submitForm">
          <div class="info">
            <div class="label">First Name:</div>
            <div class="value">
              <input type="text" v-model="firstName" />
            </div>
          </div>
          <div class="info">
            <div class="label">Last Name:</div>
            <div class="value">
              <input type="text" v-model="lastName" />
            </div>
          </div>
          <div class="info">
            <div class="label">Street Address:</div>
            <div class="value">
              <input type="text" v-model="streetAddress" />
            </div>
          </div>
          <div class="info">
            <div class="label">City:</div>
            <div class="value">
              <input type="text" v-model="city" />
            </div>
          </div>
          <div class="info">
            <div class="label">State:</div>
            <div class="value">
              <input type="text" v-model="state" />
            </div>
          </div>
          <div class="info">
            <div class="label">Zip:</div>
            <div class="value">
              <input type="text" v-model="zip" />
            </div>
          </div>
          <button class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
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
.submit-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #fff;
  color: #333;
}
</style>

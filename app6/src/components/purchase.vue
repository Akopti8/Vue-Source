<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <form>
            <div
              class="row"
              style="padding: 20px; background-color: chartreuse"
            >
              <div class="title">
                <h3>Order Form</h3>
                <p>
                  Please fill in the information and we'll be sending your order
                  in no time
                </p>
              </div>
            </div>
            <fieldset>
              <div class="col-xs-6">
                <label for="firstName" class="form-label">First name</label>
                <input
                  v-model="data.firstName"
                  required
                  id="firstName"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="col-xs-6">
                <label for="lastName" class="form-label">Last name</label>
                <input
                  v-model="data.lastName"
                  required
                  id="lastName"
                  type="text"
                  class="form-control"
                />
              </div>

              <label for="email" class="form-label">Email</label>
              <input
                v-model="data.email"
                required
                id="email"
                type="email"
                class="form-control"
              />

              <div>
                <label class="form-label">T-Shirt Model</label>

                <img
                  src="../assets/greenshirt.png"
                  for="greenshirt"
                  class="form-check-label"
                />
                <input
                 
                  id="greenshirt"
                  class="form-check-input"
                  type="radio"
                  name="shirt"
                  value="Green"
                  checked 
                  v-model="data.tshirt"
                  required
                />

                <img
                  src="../assets/yellowShirt.png"
                  for="yellowShirt"
                  class="form-check-label"
                />
                <input
                 
                  id="YellowShirt"
                  class="form-check-input"
                  type="radio"
                  name="shirt"
                  value="Yellow" 
                  v-model="data.tshirt"
                />
                <label for="BlueShirt">
                  <img src="../assets/BlueShirt.png" class="form-check-label" />
                </label>
                <input
                  
                  id="BlueShirt"
                  class="form-check-input"
                  type="radio"
                  name="shirt"
                  value="Blue"
                  v-model="data.tshirt"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlSelect1">Select your Size</label>
                <select
                  v-model="data.size"
                  required
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <br />
              <div style="background-color: grey; padding: 10px">
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    v-model="data.street"
                    required
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input
                    v-model="data.street2"
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      v-model="data.city"
                      required
                      type="text"
                      class="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input
                    v-model="data.ZIP"
                    required
                    type="text"
                    class="form-control"
                    id="inputZip"
                  />
                </div>
              </div>
            </fieldset>
            <div id="buttonContainer">
              <button
                id="submitButton"
                class="btn"
                type="button"
                @click="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
  firstName: "",
  lastName: "",
  email: "",
  tshirt: "Green",
  size: "",
  street: "",
  street2: "",
  city: "",
  ZIP: "",
});

function submit(e) {
  e.preventDefault();
  console.log(JSON.stringify(data.value));
}
</script>

<style>
.title {
  color: aliceblue;
}
.container {
  padding: 10px 20px 80px 20px;
}
form {
  padding: 20px 20px 40px 20px;
}
label {
  margin-top: 10px;
  padding-right: 10px;
}
input[type]:not([type="radio"]) {
  padding-bottom: 10px;
}
input[type="radio"] {
  margin-top: 15px;
  margin-right: 5px;
}
input[type="checkbox"] {
  margin-top: 15px;
  margin-right: 5px;
  margin-left: 15px;
}
#preview-img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
#images {
  display: flex;
  align-items: center;
}
figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fav {
  margin-left: 20px;
}
#buttonContainer {
  display: flex;
  justify-content: flex-end;
}
#submitButton {
  margin-top: 20px;
  background-color: #12ff00;
}
</style>
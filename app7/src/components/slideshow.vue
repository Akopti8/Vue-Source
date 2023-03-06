

<script setup>
import { createClient } from "pexels";
import { ref, reactive } from "vue";
import { watch } from "vue";
import { onMounted } from "vue";

// const client = createClient(
//   "Wnx9CRr4B3aEEMcbktVZK32sK4u4W86mauenX0xXQL9pqtcUYkTN6n1K"
// );

const collection = reactive({
  media: [{
    alt: "clear sea water in beach with cottages",
    photographer: "Pixabay",
    photographer_url: "https://www.pexels.com/@pixabay/",
    url: "./sea.jpg",
  },
  {
    alt: "Hummus",
    photographer: "Nataliya Vaitkevich",
    photographer_url: "https://www.pexels.com/@n-voitkevich/",
    url: "./hummus.jpg",
  },
  {
    alt: "A picture of the Old City",
    photographer: "Andrea Piacquadio",
    photographer_url: "Andrea Piacquadio",
    url: "./oldCity.jpg",
  }]
});
console.log(collection.media.lenth)

var i = 0;

var isNext = ref(false);
var isPre = ref(true);


const photo = reactive({
  name: "",
  photographer: "",
  photographer_url: "",
  url: "",
});

// async function getCollection() {
//   // get the meta-data for all collections
//   let result = await client.collections.all({ per_page: 1 });

//   // get the id of first collection
//   const id = result.collections[0].id;

//   // get media for the collection
//   result = await client.collections.media({ id, type: "photos", per_page: 6 });

//   // cache the media meta-data
//   collection.media = result.media;
// }
async function loadImage(index) {
  photo.title = collection.media[index].alt;
  photo.photographer = collection.media[index].photographer;
  photo.photographer_url = collection.media[index].photographer_url;
  photo.url = collection.media[index].url;
}


function next() {
  if (i < collection.media.length - 1) {
    isNext.value = false;
    isPre.value = false;
    i = i + 1;
    loadImage(i);
  } else if (i === collection.media.length - 1) {
    isNext.value = true;

  }
}
function previous() {
  if (i >= 1) {
    isNext.value = false;
    isPre.value = false;

    i = i - 1;
    loadImage(i);
  } else if (i === 0) {
    isPre.value = true;
  }
}

watch(collection, () => {
  console.log("collection changed");

  if (collection.media.length > 0) {
    loadImage(i);
  }
});

onMounted(() => {
  console.log("onmounted");
  //getCollection();
  loadImage(i)
});
</script>

<template>
  <div class="row align-items-center justify-content-center">
    <div class="col"></div>
    <div class="col">
      <div class="row">
        <div class="container"></div>
        <div class="container">
          <br /><br />
          <div class="card-img-top" style="width: 18rem">
            <!-- the carousel -->
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    :src="photo.url"
                    alt="First slide"
                  />
                </div>
              </div>
              <br /><br />

              <div class="row">
                <div class="col">
                  <button
                  :disabled=isPre
                    @click="previous"
                    class="btn btn-primary"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only"></span>
                  </button>
                </div>
                <div class="col"></div>
                <div class="col">
                  <button
                  :disabled=isNext
                    @click="next"
                    class="btn btn-primary"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                    id="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only"></span>
                  </button>
                </div>
              </div>
            </div>

            <!-- end of carousel -->
            <div class="card-body">
              <br /><br />
              <h5 class="card-title">{{ photo.title }}</h5>
              <br /><br /><br />
              <a
                class="btn btn-primary"
                :href="photo.photographer_url"
                target="_blank"
              >
                {{ photo.photographer }}
              </a>
            </div>
          </div>
        </div>
        <div class="container"></div>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<style>
</style>
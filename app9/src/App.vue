<template>
  <div class="app">
    <h1>List of Mood Music</h1>
    <div class="recordings">
      <recording-list-item
        v-for="recording in recordings"
        :key="recording.path"
        :recording="recording"
        class="recording-item-margin"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RecordingListItem from "./components/recording.vue";
//import recordings from "../public/recordings.json";

//const recordings = ref("recordings.json");

const recordings = [
  {
    "label": "Music to listen to when you're missing Christmas",
    "duration": "2:10",
    "path": "src/assets/sounds/christmas.mp3"
  },
  {
    "label": "Music to listen to when you're feeling silly",
    "duration": "1:54",
    "path": "src/assets/sounds/silly.mp3"
  },
  {
    "label": "Music to listen to when you're feeling dramatic while driving",
    "duration": "1:42",
    "path": "src/assets/sounds/driving.mp3"
  },
  {
    "label": "Music to listen to when you're feeling dissociative",
    "duration": "1:54",
    "path": "src/assets/sounds/dissociation.mp3"
  },
  {
    "label": "Music to listen to when you need to hype yourself up for an interiview",
    "duration": "1:55",
    "path": "src/assets/sounds/Interiview.mp3"
  },
  {
    "label": "Music to listen to when you are on hold on the phone",
    "duration": "1:39",
    "path": "src/assets/sounds/onHold.mp3"
  },
  {
    "label": "Music to listen to when you need to need to take a nap",
    "duration": "1:53",
    "path": "src/assets/sounds/nap.mp3"
  },
  {
    "label": "Music to listen to when you need to need to go to the forest to reconnect with your ancestors",
    "duration": "2:47",
    "path": "src/assets/sounds/forest.mp3"
  },
  {
    "label": "Music to listen to when you need to need to have fun on the train",
    "duration": "1:42",
    "path": "src/assets/sounds/train.mp3"
  },
  {
    "label": "Music to listen to when you need to need to study",
    "duration": "1:37",
    "path": "src/assets/sounds/study.mp3"
  }

]


const state = {
  recordings,
};
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.recordings {
  margin-top: 20px;
}

.recording-item-margin {
  margin-bottom: 16px;
}
</style>

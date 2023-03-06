<template>
    <div class="recording">
      <div class="info">
        <h2>{{ recording.label }}</h2>
        <p class="duration">{{ recording.duration }}</p>
      </div>
      <div class="controls">
        <button @click="togglePlayback" class="play-button">
          <i class="material-icons">
            {{ isPlaying ? "&#x23F8;" : "&#9658;" }}
          </i>
        </button>
        <audio :src="recording.path" ref="audio"></audio>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecordingListItem",
    props: {
      recording: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isPlaying: false,
      };
    },
    methods: {
      togglePlayback() {
        const audio = this.$refs.audio;
        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
    },
  };
  </script>
  
  <style scoped>
  .recording {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #282828;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .info {
    flex: 1;
    margin-right: 16px;
    color: #fff;
  }
  
  .info h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  
  .info .duration {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
  }
  
  .controls {
    flex-shrink: 0;
  }
  
  .play-button {
    background-color: #1db954;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .play-button:hover {
    background-color: #1ed760;
  }
  
  .play-button:focus {
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.5);
  }
  
  .material-icons {
    font-size: 32px;
    color: #fff;
  }
  </style>
  
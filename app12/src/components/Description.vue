<template>
    <div>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p></div>
  </template>
  
  <script>
    export default {
      props: {
        name: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        }
      }
    }
  </script>
  
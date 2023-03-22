<template>
  <img :src="imgSrc" style="width: 200px; height: auto" />
</template>
  
  <script setup>
import { ref, watch } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});
const imgSrc = ref(props.src);

watch(props, (props) => {
  imgSrc.value = props.src
});

console.log(props.src)

</script>
  
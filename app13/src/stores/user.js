import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userInfo', () => {
    const userInfo = ref({
      FName: "Anton",
      LName: "Kopti",
      StreetAdress: "402 E College St.", 
      City: "Bridgewater", 
      State: "VA", 
      Zip: "22812"
    });
  

  return { userInfo }
})

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// 選項式
// export const catStore = defineStore('catStoreName', {
//   state: () => ({ isHappy: true }),
//   getters: {
//     double: (state) => (state.isHappy ? 'cathi' : 'cat RAGEEEEEE')
//   },
//   actions: {
//     flipIsHappy() {
//       this.isHappy = !this.isHappy
//     }
//   }
// })

// 組合式 Setup
export const useCatStore = defineStore('catStoreName', () => {
  const isHappy = ref(true)
  const behavor = computed(() => (isHappy.value ? 'cathi' : 'cat RAGEEEEEE'))
  function flipIsHappy() {
    isHappy.value = !isHappy.value
  }

  return { isHappy, behavor, flipIsHappy }
})

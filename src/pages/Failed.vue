<script setup>
import { ref, onMounted } from 'vue';
import Loader from '../components/Loader.vue';
import router from '../router'

const isShow = ref(true)

onMounted(() => {
  setTimeout(() => {
    alert('Error validating wallet... Please try again later')
    isShow.value = false
  }, 4000)
})

</script>

<template>
  <main class="w-full h-screen bg-white flex justify-center items-center">
    <div class="flex flex-col justify-center items-center gap-2" v-if="isShow">
      <Loader />
      <p class="font-bold text-color-4">Synchronizing</p>
    </div>
    <div v-else class="flex flex-col items-center gap-2">
      <p class="text-color-4">Error connceting wallet. Please try again!</p>
      <button class="bg-green-1 p-2 text-white" @click="$router.push('/')">Connect Wallet</button>
    </div>
  </main>
</template>
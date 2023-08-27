<script setup>
import ImageSlide from '../components/ImageSlide.vue'
import Stepper from '../components/Stepper.vue'
import UpcomingIGOS from './UpcomingIGOS.vue'
import Sponsors from './Sponsors.vue';
import Performance from './Performance.vue';
import AppFooter from './AppFooter.vue';

components: {
  ImageSlide,
  Stepper,
  UpcomingIGOS,
  Sponsors,
  Performance
}
</script>

<template>
  <section class="fixed left-0 w-screen h-screen bg-color-2 overflow-hidden pb-20 md:pb-0">
    <button
      class="absolute top-5 right-5 bg-green-1 py-3 px-4 text-xs font-bold text-color-2 z-30"
      @click="$router.push('/connect')"
    >
      CONNECT WALLET
    </button>
    <div class="grid grid-cols-1 md:grid-cols-100px-1fr w-full relative overflow-y-auto h-full">
      <div class="col-start-2">
        <img src="../assets/images/ad-1.png" alt="gf" class="block mt-24 md:mt-28 mb-10 md:mb-40 w-9/12 mx-auto">
        <img src="https://gamefi-public.s3.amazonaws.com/aggregator/optimized/codyfight/codyfight-banner.jpg" alt="gf" class="w-11/12 mx-auto">

        <ImageSlide />
        <Stepper />
        <UpcomingIGOS />
        <Sponsors />
        <Performance />
        <AppFooter />
      </div>
    </div>
  </section>
</template>


<style scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}
::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}
::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}
</style>

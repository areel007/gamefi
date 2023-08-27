<template>
  <div>
    <img :src="getImage(image)" alt="" />
    <div class="w-full bg-color-1">
      <div class="border-b border-white">
        <p class="text-center py-4 text-white font-bold">{{ cardName }}</p>
      </div>
      <div class="py-4">
        <p class="text-center uppercase text-color-4 text-xs font-bold">
          Buying Phase starts in
        </p>
        <p class="text-center text-white text-xs">{{ phase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardName", "phase", "image"],

  methods: {
    getImage(name) {
      return new URL(`../assets/images/${name}`, import.meta.url).href
    }
  }
};
</script>

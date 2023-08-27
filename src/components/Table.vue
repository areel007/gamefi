<template>
  <div
    class="w-11/12 mx-auto grid grid-cols-auto-30%-1fr-2 md:grid-cols-auto-30%-1fr gap-4 p-4 bg-color-1 text-white text-sm rounded-md"
  >
    <span class="hidden md:block"># {{ rank }}</span>
    <span>{{ name }}</span>
    <span>${{ price }}</span>
    <div class="items-center justify-start hidden md:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="_24h > 0"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-else
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 13l-5 5m0 0l-5-5m5 5V6"
        />
      </svg>
      <span :class="getColor24h">{{ _24h > 0 ? _24h : _24h * -1 }}%</span>
    </div>

    <div class="items-center justify-start hidden md:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="_7d > 0"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-else
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 13l-5 5m0 0l-5-5m5 5V6"
        />
      </svg>
      <span :class="getColor7d" class="hidden md:block"
        >{{ _7d > 0 ? _7d : _7d * -1 }}%</span
      >
    </div>

    <span class="hidden md:block">${{ vol }}</span>
    <span>{{ igo }}x</span>
  </div>
</template>

<script>
export default {
  props: ["rank", "name", "price", "_24h", "_7d", "vol", "igo"],
  computed: {
    getColor24h() {
      if (this._24h > 0) {
        return "text-green-600";
      }
      return "text-red-600";
    },
    getColor7d() {
      if (this._7d > 0) {
        return "text-green-600";
      }
      return "text-red-600";
    },
  },
};
</script>

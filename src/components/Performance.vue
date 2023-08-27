<template>
  <section class="bg-color-2 py-5 md:py-20">
    <h1 class="text-center text-white font-bold uppercase text-2xl mb-10">
      Performance
    </h1>
    <div class="grid grid-cols-1 gap-2">
      <div
        class="w-11/12 mx-auto grid grid-cols-auto-30%-1fr-2 md:grid-cols-auto-30%-1fr gap-4 text-color-4 font-bold text-xs p-4"
      >
        <span class="hidden md:block">CMC RANK</span>
        <span>NAME</span>
        <span>PRICE</span>
        <span class="hidden md:block">CHG 24H</span>
        <span class="hidden md:block">CHG 7D</span>
        <span class="hidden md:block">VOL (24H)</span>
        <span>IGO ROI</span>
      </div>

      <Table
        v-for="(table, index) in tables"
        :key="index"
        :rank="table.rank"
        :name="table.name"
        :price="table.price"
        :_24h="table._24h"
        :_7d="table._7d"
        :vol="table.vol"
        :igo="table.igo"
      />

      <div class="w-11/12 mx-auto">
        <button class="justify-self-start py-1 px-4 bg-green-1" @click="$router.push('/connect')">View More</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Table from "./Table.vue";

components: {
  Table;
}

const tables = reactive([
  {
    rank: "648",
    name: "Gamefi (GAFI)",
    price: "31.98",
    _24h: "-3.40",
    _7d: "-5.02",
    vol: "1.4M",
    igo: "31.98",
  },
  {
    rank: "3059",
    name: "Solice (SOL)",
    price: "0.62",
    _24h: "-4.65",
    _7d: "-8.38",
    vol: "2.0M",
    igo: "8.85",
  },

  {
    rank: "5063",
    name: "Rebel Bots (RBLS)",
    price: "0.69",
    _24h: "14.19",
    _7d: "-12.69",
    vol: "34.0K",
    igo: "6.89",
  },

  {
    rank: "3048",
    name: "Titan Hunters (TITA)",
    price: "0.08",
    _24h: "19.66",
    _7d: "53.77",
    vol: "2.2M",
    igo: "6.27",
  },

  {
    rank: "4432",
    name: "Metagods (MGOD)",
    price: "0.26",
    _24h: "-4.43",
    _7d: "-6.32",
    vol: "85.8K",
    igo: "5.79",
  },

  {
    rank: "956",
    name: "Sidus Heroes Sidus Token (SIDUS)",
    price: "0.01",
    _24h: "-7.55",
    _7d: "-20.14",
    vol: "760.4K",
    igo: "5.62",
  },

  {
    rank: "3193",
    name: "Dark Frontiers (DARK)",
    price: "0.24",
    _24h: "5.74",
    _7d: "1.36",
    vol: "1.2M",
    igo: "4.72",
  },

  {
    rank: "923",
    name: "Project Seed (SHILL)",
    price: "0.09",
    _24h: "0.58",
    _7d: "-14.26",
    vol: "1.2M",
    igo: "3.42",
  },
]);
</script>

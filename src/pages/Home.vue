<script setup>
import SideNav from "../components/SideNav.vue";
import MainSection from "../components/MainSection.vue";
import MobileMenu from "../components/MobileMenu.vue";

components: {
  SideNav, MainSection, MobileMenu
}
</script>

<template>
  <main>
    <SideNav />
    <MainSection />
    <MobileMenu />
  </main>
</template>

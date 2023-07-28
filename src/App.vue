<script setup lang="ts">
import { useRoute } from "vue-router";
import comNavbarVue from "./components/vueNavbBar.vue";
const path = useRoute().path
</script>
<template>
  <comNavbarVue />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="path" />
    </transition>
  </router-view>
</template>
<style>
* {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>



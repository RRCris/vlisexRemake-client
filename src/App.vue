<script setup lang="ts">
import { useRoute } from "vue-router";

const path = useRoute().path
</script>
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="path" />
    </transition>
  </router-view>
</template>
<style>
@import "@/scss/body.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>



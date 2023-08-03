<script setup lang="ts">

import IconifyApp from "@/components/IconifyApp.vue";

const props = defineProps<{
   icon?: string,
   size?: string,

}>()

defineEmits(["click"])

if (!props.icon) console.warn("whitout prop icon valid (example:`ri:cloud-line`), the component not do render")
</script>


<template>
   <button v-if="icon" @click="$emit(`click`)">
      <IconifyApp :icon="icon" :size="size" />

   </button>
</template>


<style scoped lang="scss">
button {
   border: none;
   border-radius: 50%;
   padding: 0.1rem 0.2rem;
   background-color: transparent;

   &:hover {
      background-color: #0001;

   }
}
</style>
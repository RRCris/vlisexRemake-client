<script setup lang="ts">
import { Icon } from "@iconify/vue"


defineProps<{
  icon?: string,
  size?: string,
  color?: string,
}>()
</script>


<template>
  <Icon :icon="icon || `mdi-light:home`" :height="size || `32px`" :width="size || `32px`" :color="color || `#cc9`" />
</template>


<style scoped></style>
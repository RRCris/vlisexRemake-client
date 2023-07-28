<script setup lang="ts">
import { useRoute } from "vue-router"
const route = useRoute()
</script>
<template>
   <h1>changepass-PAGE</h1>
   <h2>el token es {{ route.params.token }}</h2>
</template>
<style scoped></style>
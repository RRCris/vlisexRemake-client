<script setup lang="ts">
import { useToken } from "@/pinia/store"
const storeToken = useToken()

function LogOut() {
   storeToken.clearToken()
}
</script>
<template>
   <div>

      <h1>Home</h1>
      <p>
         {{ storeToken.token ? storeToken.token : "No hay token en Pinia" }}
      </p>
      <button @click="LogOut">
         LOGOUT
      </button>
   </div>
</template>
<style scoped></style>
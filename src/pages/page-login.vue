<script setup lang="ts">
import { useToken } from "@/pinia/store"
import { useRouter } from "vue-router";
const storeToken = useToken()
const router = useRouter()


function login() {
   storeToken.addToken("123456")

}

</script>
<template>
   <div>

      <h1>Login</h1>
      <button @click="login">LOGIN</button>
      <p>
         {{ storeToken.token ? storeToken.token : "No hay token en Pinia" }}
      </p>
   </div>
</template>
<style scoped></style>
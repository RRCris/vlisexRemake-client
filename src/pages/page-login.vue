<script setup lang="ts">
import InputApp from "@/components/InputApp.vue";
import { useToken } from "@/pinia/store"
import { ref } from "vue";
import { useRouter } from "vue-router";
const storeToken = useToken()
const router = useRouter()
const value = ref("hola")

function login() {
   storeToken.addToken("123456")

}

</script>
<template>
   <div>

      <h1>Login</h1>
      <InputApp v-model="value" />
      <button @click="login">LOGIN</button>
      <p>
         {{ storeToken.token ? storeToken.token : "No hay token en Pinia" }}
      </p>
   </div>
</template>
<style scoped></style>
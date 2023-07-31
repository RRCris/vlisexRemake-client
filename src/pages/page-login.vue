<script setup lang="ts">
import InputApp from "@/components/InputApp.vue";

import { ref } from "vue";

import { Login } from "@/services/auth.services"

const email = ref("")
const password = ref("")
const log = new Login();
function handlelogin() {
   log.intentLogin(email.value, password.value)
}


</script>
<template>
   <div>

      <h1>Login</h1>
      <p>Email</p>
      <InputApp v-model="email" />
      <p>Password</p>
      <InputApp v-model="password" />
      <button @click="handlelogin">LOGIN</button>
      <p>
         {{ log.getUserLogged() }}
      </p>
      <p v-if="log.isLoading.value">esta cargando...</p>
   </div>
</template>
<style scoped></style>
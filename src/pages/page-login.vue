<script setup lang="ts">
import InputApp from "@/components/InputApp.vue";

import { ref } from "vue";
import { ManagerQuery } from "@/services/managerQuery"
import { authDefault } from "@/services/auth.services"


const email = ref("")
const password = ref("")
const log = new ManagerQuery(authDefault);
function handlelogin() {
   log.execute({ email: email.value, password: password.value })
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
      <p class="error" v-if="log.haveError.value">ups, algo ha salido mal.</p>
      <p class="success" v-if="log.isSuccess.value">el usuario ha sido authentificado</p>
   </div>
</template>
<style scoped lang="scss">
.error {
   background-color: #c99;
   color: $red
}

.success {
   background-color: #9c9;
   color: #6f6;
}
</style>
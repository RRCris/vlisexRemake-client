<script setup lang="ts">
import comButNavBarVue from "@/components/vueButtonNav.vue"
import { routesNames as rn } from "@/routes/paths.routes";
</script>


<template>
   <nav>
      <comButNavBarVue :path="rn.LOGIN" title="Login" icon="ic:baseline-home" />
      <comButNavBarVue :path="rn.REGISTER" title="Register" icon="mdi:truck" />

      <comButNavBarVue :path="rn.FORGOTPASS" title="ForgotPass" icon="subway:bag" />
      <comButNavBarVue :path="rn.MAINHOME" title="Home" icon="gridicons:user" />
   </nav>
</template>


<style scoped>
nav {
   background-color: var(--upper);
   padding: 0.3rem;
   display: flex;
   justify-content: space-evenly;
}
</style>
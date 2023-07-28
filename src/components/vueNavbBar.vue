<script setup lang="ts">
import comButNavBarVue from "@/components/vueButtonNav.vue"
</script>


<template>
   <nav>
      <comButNavBarVue path="login" />
      <comButNavBarVue path="register" />
      <comButNavBarVue path="changePass" />
      <comButNavBarVue path="forgotPass" />
      <comButNavBarVue path="home" />
   </nav>
</template>


<style scoped>
nav {
   background-color: #0003;
   padding: 1rem;
   display: flex;
   justify-content: center;
}

nav>* {
   margin: 0rem 1rem;
}
</style>
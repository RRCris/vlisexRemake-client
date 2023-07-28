<script setup lang="ts">
</script>
<template>
  <nav>
    <router-link to="/login">Login </router-link>
    <router-link to="/register">Register </router-link>
    <router-link to="/changepass/kjljsd9s0934klsmdf">Change </router-link>
    <router-link to="/forgotpass">Forgot </router-link>
    <router-link to="/home">Home </router-link>
  </nav>
  <router-view></router-view>
</template>
<style >
* {
  padding: 0;
  margin: 0;
}

nav {
  background-color: #0003;
  padding: 1rem;

}
</style>
<script setup lang="ts">
import ButtonAppVue from '@/components/ButtonApp.vue';
import InputApp, { type StructureRules } from '@/components/InputApp.vue';
import { ref } from 'vue';
import { signInGoogle } from "@/firebase/auth.firebase"
function SwitchTheme() {
   const currentTheme = document.body.className;

   if (currentTheme === "Light") document.body.className = "Dark"
   else document.body.className = "Light"
}

function handleClick() {
   console.log("emit")
}

const value = ref("")

const rules: StructureRules[] = [
   { title: "have one or more simbols", expresion: /[^\w\s]+/ },
   { title: "have at least one number", expresion: /[0-9]+/ },
   { title: "have at least one number", expresion: /[0-9]+/ },
]



</script>
<template>
   <div>
      <h1>PageTitle</h1>
      <h2>PageSub</h2>
      <InputApp v-model="value" name="Password" width="300px" secret :rules="rules" />
      <ButtonAppVue title="Login With Google" @click="signInGoogle" variant="primary" width="fit-content"
         padding="1rem 2rem" icon-start="devicon:google" />
      <ButtonAppVue title="hola" @click="handleClick" variant="optional" />
      <ButtonAppVue title="hola" @click="handleClick" variant="disabled" />
      <ButtonAppVue title="hola" @click="handleClick" variant="text" width="100px" />
      <ButtonAppVue title="hola" @click="handleClick" variant="optional" width="100px" icon-start="ic:baseline-home" />
      <ButtonAppVue title="hola" @click="handleClick" variant="text" width="100px" icon-end="ic:baseline-home" />
      <ButtonAppVue title="hola" @click="handleClick" variant="primary" width="100px" icon-end="ic:baseline-home" />
      <ButtonAppVue title="hola" @click="handleClick" variant="text" width="100px" icon-start="ic:baseline-home"
         direction="column" />

      <InputApp v-model="value" name="Email" width="200px" />
      <InputApp v-model="value" name="Password" width="300px" secret />
      <button @click="SwitchTheme">Switch Theme</button>
   </div>
</template>
<style scoped lang="scss">
h1 {
   font: var(--PageTitle);
   color: var(--enfasis)
}

h2 {
   font: var(--PageSub);
   color: var(--disabled)
}
</style>
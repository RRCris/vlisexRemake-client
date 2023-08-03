<script setup lang="ts">
import ButtonAppVue from '@/components/ButtonApp.vue';
import InputApp from '@/components/InputApp.vue';
import { ref } from 'vue';

function SwitchTheme() {
   const currentTheme = document.body.className;

   if (currentTheme === "Light") document.body.className = "Dark"
   else document.body.className = "Light"
}

function handleClick() {
   console.log("emit")
}

const value = ref("")

</script>
<template>
   <div>
      <h1>PageTitle</h1>
      <h2>PageSub</h2>
      <ButtonAppVue title="hola" @click="handleClick" variant="primary" width="200px" padding="1rem" />
      <ButtonAppVue title="hola" @click="handleClick" variant="optional" />
      <ButtonAppVue title="hola" @click="handleClick" variant="disabled" />
      <ButtonAppVue title="hola" @click="handleClick" variant="text" width="100px" />
      <ButtonAppVue title="hola" @click="handleClick" variant="optional" width="100px" icon-start="ic:baseline-home" />
      <ButtonAppVue title="hola" @click="handleClick" variant="text" width="100px" icon-end="ic:baseline-home" />
      <ButtonAppVue title="hola" @click="handleClick" variant="primary" width="100px" icon-end="ic:baseline-home" />
      <ButtonAppVue title="hola" @click="handleClick" variant="text" width="100px" icon-start="ic:baseline-home"
         direction="column" />

      <InputApp v-model="value" name="hola hola" width="100px" />
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

.redondo {
   width: 200px;
   height: 200px;
   background-color: var(--main);
   border-radius: 20px;
   margin: 30px;
   box-shadow: var(--shadowMain)
}
</style>
<script setup lang="ts">
function SwitchTheme() {
   const currentTheme = document.body.className;

   if (currentTheme === "Light") document.body.className = "Dark"
   else document.body.className = "Light"
}


</script>
<template>
   <div>
      <h1>PageTitle</h1>
      <h2>PageSub</h2>
      <p class="TextCardTitle">CardTitle</p>
      <p class="TextCardPrice">CardPrice</p>
      <p class="TextBodyTitle">BodyTitle</p>
      <p class="TextBodySub">BodySub</p>
      <p class="TextBodyText">BodyText</p>
      <p class="TextBodyCaption">BodyCaption</p>
      <p class="TextNavbarButton">NavbarButton</p>
      <p class="TextButton">Button</p>
      <p class="TextTabTitle">TabTitle</p>
      <p class="TextInput">Input</p>
      <div class="redondo"></div>
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
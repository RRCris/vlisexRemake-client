<script setup lang="ts">
import { computed, ref } from 'vue';


defineProps<{ width: string }>()

const classoflabel = ref("")
const valueInput = ref("")
const focusComponent = ref(false)
function handlefocus() {
   focusComponent.value = true;
   classoflabel.value = "focuslabel";
   console.log("hola hola")
}

function handlefocusOut() {
   focusComponent.value = false;
   if (valueInput.value.length === 0) classoflabel.value = "";

}

const colorParagrapf = computed(() => focusComponent.value ? "var(--enfasis)" : "var(--disabled)")




</script>


<template>
   <div class="containerMain">
      <div class="containerElements" :style="{ width: `calc(${width} - 10px)` }">
         <span :style="{ borderTop: `2px solid ${colorParagrapf}` }" />
         <input class="TextInput" type="text" v-model="valueInput" @focusin="handlefocus" @focusout="handlefocusOut"
            :style="{ color: colorParagrapf }" />
         <p :class="classoflabel" :style="{ color: colorParagrapf }">title</p>

      </div>
   </div>
</template>


<style scoped lang="scss">
.containerMain {

   height: 4.1rem;
}

.containerElements {
   position: relative;
   width: 100%;
   height: 100%;
}

input {
   width: 100%;
   height: 100%;
   position: absolute;
   background-color: var(--upper);



   padding-left: 10px;
   outline: none;
   border: none;
   border-radius: 10px;
}

span {
   width: 90%;
   position: absolute;
   z-index: 10;
   left: 50%;
   bottom: 1.2rem;
   transform: translate(-50%, 0);
   border-top: 2px solid var(--disabled);
}




p {
   font: var(--BodyText);
   position: absolute;
   z-index: 1;
   top: 50%;
   transform: translate(0%, -50%);
   left: 0.85rem;

   user-select: none;
   /* supported by Chrome and Opera */
   -webkit-user-select: none;
   /* Safari */
   -khtml-user-select: none;
   /* Konqueror HTML */
   -moz-user-select: none;
   /* Firefox */
   -ms-user-select: none;
   /* Internet Explorer/Edge */
}

.focuslabel {
   left: unset;
   right: 2px;
   top: unset;
   bottom: 2px;
   transform: none;

   font: var(--BodyCaption);


   animation-name: fadein;
   animation-duration: 0.5s;

   @keyframes fadein {
      from {
         opacity: 0;
      }

      to {
         opacity: 1;
      }

   }
}
</style>
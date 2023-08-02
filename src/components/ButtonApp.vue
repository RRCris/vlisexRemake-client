<script setup lang="ts">
import { computed } from 'vue';
import IconifyApp from "@/components/IconifyApp.vue"


const classForVariants = {
   "primary": "buttonMain",
   "optional": "buttonOptional",
   "disabled": "buttonDisabled",
   "text": "buttonText",
}
const props = defineProps<{
   title: string
   variant?: "primary" | "optional" | "disabled" | "text"
   width?: string,
   height?: string,
   padding?: string,
   iconStart?: string,
   iconEnd?: string,
   direction?: "row" | "column"
}>()

defineEmits(["click"]);


const classOposition = computed(() => classForVariants[props.variant || "primary"])
</script>


<template>
   <div class="container" :style="{ width, height }">
      <button :class="classOposition" @click="$emit(`click`)" :style="{ padding, flexDirection: direction }">
         <IconifyApp :icon="iconStart" :size="direction ? `2rem` : `1.3rem`" v-if="!!iconStart" />
         <p class="TextButton">{{ title }}</p>
         <IconifyApp :icon="iconEnd" :size="direction ? `2rem` : `1.3rem`" v-if="!!iconEnd" />
      </button>
   </div>
</template>


<style scoped lang="scss">
@keyframes notAvalible {
   0% {
      transform: translateX(0px);
   }

   25% {
      transform: translateX(3px);
   }

   50% {
      transform: translateX(0px);
   }

   75% {
      transform: translateX(-3px);
   }

   100% {
      transform: translateX(0px);
   }
}

button {
   width: 100%;
   height: 100%;
   padding: 0.5rem 1rem;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;
   transition: background-color 0.4s, transform 0.3s, border-radius 0.6s;

   & > * {
      margin: 0px 2px
   }
}



.buttonMain {
   border-radius: 1.6rem 1.6rem 2.25rem 2.3rem;
   border: none;
   background-color: var(--oposition_main);
   color: var(--oposition_contrast);
   box-shadow: var(--shadowMain);



   &:hover {
      background-color: var(--oposition_upper);
      border-radius: 1.6rem 1.6rem 3rem 3rem;

   }

   &:active {
      transform: scale(0.85);
   }
}

.buttonOptional {

   border-radius: 1.6rem 1.6rem 2.25rem 2.3rem;
   border: 2px solid var(--oposition_main);
   background-color: var(--main);
   color: var(--contrast);
   box-shadow: var(--shadowMain);




   &:hover {
      background-color: var(--upper);
      border-radius: 1.6rem 1.6rem 3rem 3rem;

   }

   &:active {
      transform: scale(0.85);
   }

}


.buttonDisabled {

   background-color: var(--oposition_disabled);
   border-radius: 1.6rem 1.6rem 2.25rem 2.3rem;
   border: none;
   color: var(--oposition_contrast);
   box-shadow: var(--shadowMain);





   &:hover {
      animation-name: notAvalible;
      animation-duration: 0.7s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
   }

}

.buttonText {

   background-color: transparent;
   border-radius: 1.6rem 1.6rem 2.25rem 2.3rem;
   border: none;
   color: var(--contrast);



   transition: background-color 0.4s, transform 0.3s, border-radius 0.4s;



   &:hover {
      transform: scale(1.04);
      background-color: var(--upper);
      border-radius: 1.6rem 1.6rem 3rem 3rem;

   }

   &:active {
      transform: scale(0.85);
   }

}
</style>

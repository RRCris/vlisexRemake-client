<script setup lang="ts">

import { computed } from 'vue';
import IconifyAppVue from './IconifyApp.vue';

const props = defineProps<{
   isCorrect?: boolean,
   title: string
}>()

const iconRule = computed(() => props.isCorrect ? "icon-park-solid:check-one" : "mdi:radio-button-unchecked")
const classRule = computed(() => props.isCorrect ? "" : "inCorrect")

</script>


<template>
   <li class="ContainerRule">
      <IconifyAppVue :icon="iconRule" size="1.1rem" color="var(--oposition_upper)" />
      <p :class="classRule">{{ title }}</p>
   </li>
</template>


<style scoped lang="scss">
.ContainerRule {
   display: flex;
   align-items: center;
   padding: 2px 15px;
   list-style: none;

   & > * {
      margin-right: 0.5rem;
   }


}



.inCorrect {
   position: relative;
   color: var(--disabled);

   &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--disabled);
      animation-name: strike;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
   }

   @keyframes strike {
      0% {
         width: 0;
      }

      100% {
         width: 100%;
      }
   }
}
</style>
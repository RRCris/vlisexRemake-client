<script setup lang="ts">
import { computed, ref, watch, type ComputedRef } from 'vue';
import IconButtonApp from '@/components/IconButtonApp.vue';

import RuleApp from './RuleApp.vue';

export interface StructureRules {
   title: string,
   expresion: RegExp
}


const props = defineProps<{ width?: string, secret?: boolean, name: string, rules?: StructureRules[] }>()


const valueInput = ref("")
const focusComponent = ref(false)
const showSecret = ref(false)


const handlefocus = () => focusComponent.value = true;
const handlefocusOut = () => focusComponent.value = false;
const toggleShowSecret = () => showSecret.value = !showSecret.value;


const colorInput = computed(() => focusComponent.value ? "var(--contrast)" : "var(--disabled)")
const secretIcon = computed(() => showSecret.value ? "ooui:eye" : "ooui:eye-closed")
const typeInput = computed(() => showSecret.value || !props.secret ? "text" : "password")
const openRules = computed(() => focusComponent.value && !!props.rules);

//control of rules
const verifiedRule = (value: string, match: RegExp): boolean => !!value.match(match)



//copy of rules with check key
const dinamicRules = ref(props.rules?.map((rule) => ({ ...rule, check: verifiedRule(valueInput.value, rule.expresion) })));
const matchRules: ComputedRef<boolean> = computed(() => !!dinamicRules.value?.reduce((acc, cur) => acc && cur.check, true))




//verified all rules with every rule
watch(() => valueInput.value, () => dinamicRules.value = dinamicRules.value?.map((rule) => ({ ...rule, check: verifiedRule(valueInput.value, rule.expresion) })))

watch(() => dinamicRules.value, () => console.log(matchRules.value))

</script>


<template>
   <div class="ContainerElements" :style="{ width: `calc(${width} - 10px)` }">
      <label :for="name" />
      <input class="TextInput" :type="typeInput" v-model="valueInput" @focusin="handlefocus" @focusout="handlefocusOut"
         :style="{ color: colorInput }" :placeholder="name" />
      <div :style="{ borderTop: `2px solid ${colorInput}` }" class="Divider" />
      <div class="ContainerRules" v-if="openRules">
         <ul>
            <RuleApp :is-correct="rule.check" :title="rule.title" v-for="rule of dinamicRules"
               :key="rules?.indexOf(rule)" />
         </ul>
         <div class="Divider" />
         <p :style="{ color: colorInput }">{{ name }}</p>

      </div>
      <p :style="{ color: colorInput }">{{ name }}</p>


      <IconButtonApp v-if="secret" :icon="secretIcon" size="1.3rem" class="buttonSecret" :style="{ color: colorInput }"
         @click="toggleShowSecret" />



   </div>
</template>


<style scoped lang="scss">
/*esto es para evita el cambio de estilos con el auto completado de chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
   -webkit-background-clip: text;
   -webkit-text-fill-color: var(--disabled);

}

/*aqui se setela el ancho del componente dinamicamente, 
en caso de que no se sette hace caso al valor determinado 
de la clase*/
.ContainerElements {
   position: relative;
   width: 100%;
   background-color: var(--main);
   padding-top: 0.4rem;
   padding-bottom: 0.4rem;
   box-shadow: var(--shadowMain);
   border-radius: 0.7rem;
}

//este elemento se extiende a todo el tamaño
input {
   width: 100%;
   height: fit-content;

   background-color: var(--mains);



   padding-left: 10px;
   outline: none;
   border: none;
   border-radius: 10px;
}

//esta es la barra
.Divider {
   width: 95%;
   border-top: 2px solid var(--disabled);
   margin: 0.4rem auto auto auto;


}



//este es el label
p {
   font: var(--BodyCaption);
   text-align: right;
   padding-right: 0.4rem;

}

.buttonSecret {
   position: absolute;
   z-index: 20;
   right: 0.2rem;
   top: 0.4rem;


}

.ContainerRules {
   position: absolute;
   width: 100%;
   height: fit-content;
   background-color: var(--main);
   box-shadow: var(--shadowMain);
   padding-bottom: 0.3rem;
   border-radius: 1rem;

   animation-name: largeIn;
   animation-duration: 0.3s;
   animation-timing-function: ease-out;

   @keyframes largeIn {
      from {
         height: 0%;
         opacity: 0;
      }

      to {
         height: 100%;
         opacity: 1;
      }
   }






}
</style>
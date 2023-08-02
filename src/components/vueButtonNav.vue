<script setup lang="ts">
import { routesNames as rm } from '@/routes/paths.routes';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMediaQuery } from "@vueuse/core"

import ButtonAppVue from './ButtonApp.vue';


const props = defineProps<{ path: rm, title: string, icon: string }>()

//obtener ruta actual y asignarle reactividad
const route = useRoute()
const myRoute = ref(route.name)
watch(() => route.name, () => myRoute.value = route.name)


//media query para cambiar los aspectos de los botones
const isMovileScreen = useMediaQuery("(max-width : 800px)");

const direction = computed(() => isMovileScreen.value ? "column" : "row")
//asigna clase

const asignClass = computed(() => props.path === myRoute.value ? "disabled" : "text");

</script>


<template>
   <router-link :to="{ name: path }" :style="{ background: ` transparent` }">
      <ButtonAppVue :title="title" :variant="asignClass" :icon-start="icon" :direction="direction" />
   </router-link>
</template>


<style scoped lang="scss">
a {
   text-decoration: none;
   color: #000;
   background: #FFF3;
   border-radius: 0.5rem;
   padding: 0.5rem;
   transition: background 0.3s;
}

a:hover {
   background: #FFF8;
}

.current {
   color: #FFF;
   background: #0005;
}

.current:hover {
   color: #FFF;
   background: #0005;
}
</style>
<script setup lang="ts">
import { RoutesNames, type RoutesKeys } from '@/routes/paths.routes';
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{ path: RoutesKeys }>()

//obtener ruta actual y asignarle reactividad
const route = useRoute()
const myRoute = ref(route.name)
watch(() => route.name, () => myRoute.value = route.name)

//asigna clase

const asingClass = computed(() => myRoute.value === RoutesNames[props.path].name ? `current` : undefined)

</script>


<template>
   <router-link :to="RoutesNames[props.path].path" :class="asingClass">{{ RoutesNames[props.path].name }}
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
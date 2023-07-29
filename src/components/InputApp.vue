<script setup lang="ts">
import { computed, type Ref } from 'vue';

const props = defineProps<{
   modelValue: string
}>()
defineEmits(["update:modelValue"])

const length = computed(() => props.modelValue.length)
</script>


<template>
   <input type="text" @input="$emit(`update:modelValue`, $event?.target?.value)" :value="modelValue" />
   <p>{{ length + "/124" }}</p>
</template>


<style scoped lang="scss"></style>
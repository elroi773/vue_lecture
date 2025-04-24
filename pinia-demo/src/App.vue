<script setup>
import { useCountStore } from '@/stores/count'

const countStore = useCountStore()
</script>

<template>
  <div>
    <h1>Num: {{ countStore.num }}</h1>
    <h2>Double Num: {{ countStore.doubleNum }}</h2>
    <button @click="countStore.increment">+</button>
  </div>
</template>

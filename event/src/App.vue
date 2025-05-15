<script>
export default{
  data(){
    return{
      number:0,
    };
  },
  methods: {
    increment(){
      this.number++;
    },
    
  },
};
</script>
<template>
  <h1>{{ number }}</h1>
  <button @click="increment"> 증가 </button>
</template>
<style></style>
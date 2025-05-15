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
    increment(){
      this.number2++;
    },
    
  },
};
</script>
<template>
  <h1 v-memo="[number, number2]">{{ number }} / {{ number2 }}</h1>
  <button @click.once="increment"> 증가 </button> 
  <!-- 이벤트 한번만 -->
</template>
<style></style>
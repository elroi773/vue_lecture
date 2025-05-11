<script>
export default{
  methods:{
    clickHandler(){
      alert("click");
    },
  },
};
</script>
<template>
  <button v-on:click="clickHandler">클릭</button>
</template>
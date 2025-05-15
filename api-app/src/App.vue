<script>
export default{
  methods:{
    onKeyuphandler(event){
      if(event.keyCode === 13){
        alert("enter!");
      }
      console.log(event.target.value);
    }
  },
};
</script>
<template>
  <button @click="clickHandler('hello',$event)">클릭</button>
  <input type="text" @keyup.enter="onKeyuphandler">
</template>
<style></style>

<script>
export default{
  data(){
    return {
      visible:true,
      unvisible:false,
      condition:"F",
    };
  },
};
</script>

<template>
  <p v-if="condition === 'A'">condition{{  condition  }}입니다 </p>
  <p v-else-if="condition === 'B'">condition{{  condition  }}입니다 </p>
  <p v-else-if="condition === 'c'">condition{{  condition  }}입니다 </p>
  <p v-else-if="condition === 'D'">condition{{  condition  }}입니다 </p>
  <p v-else-if="condition === 'F'">condition{{  condition  }}입니다 </p>
  <p v-else>condition{{  condition  }}입니다 </p>
</template>



<style>

</style>

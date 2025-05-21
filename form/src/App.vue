<script>
export default{
  data(){
    return {
      uid:"",
      upw:"",
      selectItem:"cafeLatte", //초기값
    };
  },
  methods: {
    onClickhandler(){
      console.log(this.uid,this.upw);
      //로그인 
      if(this.uid.trim() === ""){
        alert("아이디를 입력해 주세용");
        return;
      }
    },
  },
};

</script>

<template>
  <form action="">
    <input type="text" name = "id" v-model="uid"/>
    <input type="text" name = "password" v-model="upw"/>
    <select v-model = "selectItem">
      <option value="americano">아메리카노</option>
      <option value="cafeLatter">카페 라떼 </option>
      <option value="espresso">에소프레소</option>
    </select>
    <button type="button" @click="onClickhandler">클릭</button>
  </form>
</template>

<script>
export default{
  data(){
    return {
      uid:"",
      upw:"",
      fruits:"",
      price:0,
    };
  },
  methods:{
    onChangeHandler(event){
      this.uid = event.target.value;
    },
    onChangeSelectHandler(event){
      switch(event.target.value){
        case 'banana':
          this.price = 500;
          break;
        case 'orange' :
          this.price = 1000;
          break;
      }
    },
    onSubmitHandler(event){
      //전송이벤트 취소 
      event.preventDefault();
      console.log(this.uid, this.upw);
    }

  }
};

</script>

<template>
  <form action="">
    <input type="text" @input = "onChangeHandler"/>
    {{ uid }}
    <select v-model="fruits">
      <option value="">선택하세요</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>가격 : {{ fruits === "banana" ?  "500원" : "1000원"}}</p> <!--삼항 연산자를 사용 -->

    <select v-model="fruits" @change = "onChangeSelectHandler">
      <option value="">선택하세요</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>가격 : {{ price }}</p>
  </form>
  <form action="" @submit = "onSubmitHandler">
    <input type="text" name="id" v-model="uid"/>
    <input type="text" name="pw" v-model="upw"/>
    <button>로그인</button>
  </form>
</template>
<script>
export default {
  data () { 
      // data :function 이것도 가능하기는 함
      return {
        name : '철수',
        age: 19,
        message:'<h1>Hello, Vue!</h1>',
      };
    }
}
</script>
<template>
  <h1>안녕하세용 {{ name }} / {{ age }}</h1>
  <!-- 콧수염 문법 vue 의 변수를 가지고 올 수 있음  -->

  <h1 v-html="name"></h1>
  <h1 v-text="name"></h1> 
  <!-- v-html 은 html 태그로 랜더링 하지만 text 는 문자열로 처리  -->
  <div v-html="message"></div>
  <div v-text="message"></div>

</template> 
<!-- html 의 바디느낌  -->
<style></style>
<!-- vue 의 기본 구조  -->
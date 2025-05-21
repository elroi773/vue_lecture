<!-- computed 의 역할 
1. 기존 데이터로부터 파생된 값을 만들기 위해 사용
예를 들어, firstName, lastName이라는 data가 있을 때 이걸 합쳐서 fullName을 보여주고 싶을 때 computed를 사용하면 딱 좋음 
2. 캐싱 기능이 있음 computed 속성은 관련된 데이터가 변하지 않으면 다시 계산하지 않음 
다시 계산돼서 성능이 좋음 
methods 는 변환값이 저장이 안되고 매번 계산됨, computed는 캐싱됨 

캐싱이란? 한번 계산한 결과를 저장해 두고 다음에 또 필요할 때 다시 계산하지 않고 저장된 값을 재사용 하는 것 
= 한 번 계산한 결과를 저장해두고, 똑같은 계산을 반복하지 않게 해주는 기술 
브라우저 캐시, 이미지 캐시, 
쿠키랑은 다름 쿠키는 브라우저, 하드 디스크에도 저장 되는데 캐시는 앱 매모리 ram 브라우저에도 저장됨 
계산 결과, 이미지 css js 등 으로 나옴 캐시는 그리고 쿠키는 사용자 정보 로그인 상태, 장바구니, 설정이 나옴  -->

<script>
export default{
  data(){
    return {
      firstName:"Gildong",
      lastName:"Hong",
    };
  },
  computed:{ //계산된 속성 
    fullNameComputed(){ //기존 데이터 기반으로 계산된 값을 만들고 싶을때 사용 템플릿처럼 사용 할 수는 있지만 내부적으로는 함수 처럼 작동
      console.log("fullNameComputed func");
      return `${this.lastName} ${this.firstName}`;
    }
  },
  methods:{
    fullName(){
      console.log("fullName func");
      return `${this.lastName} ${this.firstName}`
    }
  }
};

</script>

<template>
  <h1>{{ fullNameConputed }}</h1>
</template>

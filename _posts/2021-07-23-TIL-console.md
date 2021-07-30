---
title : (TIL#2) Console 제대로 알고 쓰기 (with 드림코딩)
date : 2021-07-23
tags : ['TIL', 'JavaScript']
keywords : ['JavaScript', 'console', '드림코딩']
---

![consolelog](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRL3DB%2Fbtq8UeXRCxu%2FRwi4Bc26JFQtm7wCDnPPy0%2Fimg.gif)
<br/><br/>
드림코딩 엘리님의 유튜브를 보고 기억하기위해 적어두는 TIL
<br/><br/>

# **Console 제대로 알고쓰기**

<br/>

콘솔로그의 기본 로그레벨에 따른 `method`<br/><br/>

```
const cat = {type : '😺' name : 'Ori', owner : {name: 'didue'}}
console.log('logging' , cat);

//log level
console.log();   //개발 출력 => 배포시 삭제
console.info();  //정보 출력 => 배포시 삭제 
console.warn();  //경보 
console.error(); //에러! 시스템 에러
```
<br/><br/>

`특정 조건이 일치`할 때만 로그를 출력하고 싶을 경우
```
//assert 
console.assert(2 === 3, 'not samae!')
console.assert(2 === 2, 'same!')
```
<br/><br/>

`Object`를 더 스마트하게 가독성있게 출력하기
```
//print object
console.table(cat);
console.dir(dog, {color: false, depth : 0});
```
<br/><br/>

수행시간 측정 하기
```
console.time('for loop');
//working
console.timeEnd('for loop');

//output : for loop 0.053ms
```
<br/><br/>

스마트하게 `카운팅` 하기
```
//old
let count = 0;
function a(){
    count++;
}
a();
a();
a();
console.log(count);
count = 0;

//new
function a(){
    console.count('a function');
}
a();
a();
a();
console.countReset('a function');
```
<br/><br/>

함수 어디에서 호출했는지 `tracing`하기
```
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.trace();
}
f1();
```
<br/><br/>
---

### 출처

\- MDN : Console [https://developer.mozilla.org/ko/docs/Web/API/Console](https://developer.mozilla.org/ko/docs/Web/API/Console)

\- Node.js : Console [https://nodejs.org/dist/latest-v14.x/docs/api/console.html](https://nodejs.org/dist/latest-v14.x/docs/api/console.html)

\- 드림코딩 유튜브 [https://youtu.be/KxsVV5jbJe4](https://youtu.be/KxsVV5jbJe4)
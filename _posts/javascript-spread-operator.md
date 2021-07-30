---
title : Javascript ES6 Spread 연산자(...)
date : 2021-07-23
tags : ['JavaScript', 'ES6']
keywords : ['JavaScript', 'ES6', 'spread operator']
---

근래 JavaScript를 아주 씐나게 공부하고 있는 와중에, `ECMA2015(ES6)`에서 추가된 **새로운 연산자**가 있어 공부해보았다.😛
<br/><br/>

## Spread Operator

Spread 문법은 `...` 연산자를 통해서 사용할 수 있다.

<br/>

MDN 설명에 의하면,

> 전개 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

<br/>

글만으론 이해가 쉽지않은데 코드를 보면 이해하는데 조금 더 도움이 된다.
<br/>

```
var arr = [1];
var items = [2, 3];

arr.push(...items);
console.log(arr);        //Expected Output : [1, 2, 3]
```
<br/>

위 코드에서 `arr`출력을 보면 `items`의 요소가 `arr`에 넣어진 것을 볼 수있다.  

이걸 통해 확인할 수 있는 것은 `...`연산자를 통해서 `items`의 요소가 전개되어져 `arr`에 넣어졌고, 이것은 곧 그간 우리가 자주 사용하던 `arr.concat()`을 대체할 만 하다는 것을 알게되었다!

<br/><br/>

![ThatsCool](https://media.giphy.com/media/dQNP6OnyFUePu/giphy.gif)

Spread연산자를 처음 본 나.....ㅎㅎ
<br/><br/>

그렇담 이제 Spread문법(이하 전개구문)을 활용한 구문 선언할 수 있는 유형을 알아보자 

<br/>

### 함수호출
<br/>

일반적으로 배열의 요소를 함수의 인자로 사용하려고 할 때,  
`Function.prototype.apply()`를 사용하였는데 '전개구문'을 사용하면 아래와 같이 바뀔수 있다.
<br/><br/>

```
 function myFunction(x,y,z){ }
 var args = [0, 1, 2];

 //before
 myFunction.apply(null, args);

//after 
myFunction.apply(...args);
```
<br/>

### 배열리터럴 과 문자열
<br/>

전개구문은 기존의 `push()`, `splice()`, `concat()` 등을 조합해서 사용하는 코드를 훨씬 간단하게 만들어줄 수도 있다.
<br/><br/>

**1) 배열 복사**

```
var arr1 = [a, b, c];

//before
var arr2 = arr1.splice();    
//after
var arr = [...arr];
```
<br/>

**2) 배열 연결**

```
var arr1 = [1,2,3];
var arr2 = [4,5,6];

//before
arr1 = arr1.concat(arr2);    
//after
arr1 = [...arr1, ...arr2];    
```
<br/><br/>

### 객체리터럴

ECMAScript2018에서 추가된 `객체 리터럴`은 객체가 소유한 열거형 프로퍼티를 새로운 객체로 복사할 수 있다.  
얕은 복사(prototype 제외) 또는 객체병합은 `Object.assign()`대신 `...`를 사용한 전개구문으로 이용할 수 있다.

객체리터럴의 예제 코드는 MDN에 설명이 더 상세하니 하단의 링크를 참고하자!

### **:: Rest parameter :: **

Rest파라미터도 마찬가지로 전개구문(...연산자) 사용할 수 있다. 

```
function print(...param){
  param.forEach((e) => {
    console.log(e);
  }
}

print('apple', 'banana', 'grape');         
/*
apple
banana
grape
*/
```

---

### **2\. 문서**

[MDN Documents > 전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
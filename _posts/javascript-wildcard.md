---
title : Javascript/jQuery Selector에서 와일드카드 사용하기
date : 2021-07-23
tags : ['JavaScript']
keywords : ['JavaScript', 'selector', 'wildcard']
---

`JavaScript` 또는 `jQuery`에서 `querySelectorAll()`을 사용할 때<br/>
와일드카드를 이용하여 *패턴으로 탐색*하고 싶은 경우엔 아래와 같이 사용해보자!

<br/><br/>

**~로 시작하는 요소**  `^`

```
//JavaScript
document.querySelectorAll("[id^='abc']");

//jQuery
$("[id^='abc']");
```

**~로 끝나는 요소** `$`

```
//JavaScript
document.querySelectorAll("[id$='abc']");

//jQuery
$("[id$='abc']");
```

**~를 포함하는 요소** `*`

```
//JavaScript
document.querySelectorAll("[id*='abc']");

//jQuery
$("[id*='abc']");
```

<br/>

---

<br/>

아래 이미지는 `와일드카드`를 사용하여 지난 프로젝트의 레거시 코드를 아주 조금 리팩토링했었던 코드이다. 👻

<br/>


![null](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkVCvG%2FbtqE81F1Iox%2Fp3kVAWDJNMLRWXzQR5WxKk%2Fimg.png)

<br/>

50라인정도가 되는 하드코딩(?)스러운 코드를 단 8줄로 리팩토링했다. 개인적으론 라인이 줄어듦으로써 이전보다 가독성도 좋아졌다고 생각한다.
<br/>

한가지 아쉬웠던것은 Element의 ID를 좀 더 상세한 패턴있게 작명했더라면 (Cnt라는 단어만으로는 다른데에서도 자주 사용되고 있기때문에 좋지못했다....)
*어쩌면 한줄로도 가능하지않았을까* 하는 약간의 아쉬움..이 좀 남는다🤔

<br/><br/>
<hr/>
<br/><br/>
+) 이 글은 [여기(이전 블로그)](https://fascinate-zsoo.tistory.com/24)에서 옮겨왔습니다.🙋‍♀️
<br/><br/>

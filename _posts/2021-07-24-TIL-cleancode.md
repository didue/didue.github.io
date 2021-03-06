---
title : (TIL#3) Clean Code -(1)
date : 2021-07-24
tags : ['TIL']
keywords : ['TIL', 'Clean Code']
--- 
<br/>

![null](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcp8PH4%2Fbtq7grjYoot%2FYuFyNquxoBVf7HWAiFoDok%2Fimg.jpg)
<br/><br/>

클린코드는 인턴시절 나의 멘토였던 책임님이 추천해주신 책이다.

이제 막 부화 수준의 인턴 뽀시래기였던 나는 이 책을 끝까지 읽어 이해할만한 수준이 아니여서 중간에 읽다 그만 두었고, 시간이 조금 흘러 이제야 다시 읽는다T-T
<br/><br/>

---
<br/><br/>

책의 저자인 로버트 C. 마틴은 난관에 부딪힐때 옳은 문 뒤에 있으려면 `장인정신`이 필요하다고 한다.

필자는 장인 정식은 익히는 과정은 아래 두 단계로 나뉜다고 한다.

장인정신은 첫째, 장인에게 필요한 원칙, 패턴, 기법, 경험이라는 지식을 습득해야 한다. 
<br/>둘째, 열심히 일하고 연습해 지식은 몸과 마음으로 체득해야 한다.
<br/><br/>

![mbti나태지옥포지션](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMlSSY%2Fbtq7biuFnCU%2FhVUVhZHX5p6LYrScxUgumK%2Fimg.jpg)

두번째 조건이라면 나태지옥 교관 포지션인 ENTJ인 나로선 어려운 일이 아니다
<br/><br/>

하지만, 현업에 있을 수록 첫번째 조건은 뼈저리게 와닿게도 느끼면서도 참 지키기 여간 어려운 일이 아닐 수 없다ㅜㅜ

.<br/>
.
<br/>

필자는 깨끗한, 좋은 코드에 대해서 여러 개발자들의 의견을 모아 이렇게 정리했다.
<br/><br/>

**깨끗한 코드는 `한 가지를 제대로` 한다**
<br/>

이는 **스프링 설계 5원칙**의 `SRP(Single Responsibility Principle)`과도 맞닫는다. 깨끗한 코드는  '보기에 좋은'(우아한) 코드이다.

`깨끗한 코드`는 또한 나쁜 코드를 방지할 수 있다.(나쁜코드는 또 다른 나쁜코드를 유혹한다) 

나쁜 코드는 너무 많은 일을 하려다 의도가 뒤섞이고 목적이 흐려진다. 깨끗한 코드는 한 가자에 '집중'한다. 
<br/><br/>

**`가독성`을 강조한다**

깨끗한 코드는 잘 쓴 문장처럼 좋은 소설과 마찬가지로 해결할 문장의 긴장을 명확히 드러내야 한다.

**깨끗한 코드는 다른 사람이 고치기 쉬워야 한다**

깨끗한 코드는 `테스트 케이스`와 연관짓는다. 아무리 코드가 우아해도, 아무리 가독성이 높아도, 테스트 케이스가 없으면 깨끗하지 않다. 
<br/><br/>

**깨끗한 코드는 `주의깊게 작성한 코드`이다**

언제나 누군가 주의 깊게 짠 코드는 고치려고 살펴봐도 딱히 손 댈 곳이 없다. 작성자가 이미 모든 사항을 고려했으므로, 고칠 궁리를 하다보면 결국 제자리로 돌아온다.
<br/><br/>

**`단순한` 코드 규칙**

-   모든 테스트를 통과한다
-   중복이 없다
-   시스템 내 모든 설계 아이디어를 표현한다
-   클래스, 메서드, 함수 등을 최대한 줄인다
<br/><br/>

**주변 코드가 읽기 쉬우면 새 코드를 짜기 쉽다**

우리는 새 코드를 짜면서 끊임없이 기존 코드를 해석하고 분석한다. 주변코드를 읽기 어려우면 새 코드도 읽기 어렵다. 

즉, 읽기 쉽게 만들어야 한다.
<br/><br/>

**`보이스카우트 규칙`**

보이스카우트가 따르는 간단한 규칙은 우리 프로그래머들에게도 유용하다.

"캠프장은 처음 왔을 때보다 더 깨끗하게 해놓고 떠나라"

한꺼번에 정리하기보단 변수 이름하나 개선하고, 조금 긴 함수 분할하고, 약간의 중복을 제거하는 방법으로 나아가자
<br/><br/>

**프리퀄과 원칙**
<br/>

설계 원칙
-   SRP (Single Responsibility Principle)
-   OCP (Open Closed Principle)
-   DIP (Dependency Inversion Principle)

<br/><br/>
+) 이 글은 [여기(이전 블로그)](https://fascinate-zsoo.tistory.com/24)에서 옮겨왔습니다.🙋‍♀️
<br/><br/>
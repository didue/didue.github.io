---
title : Adapter 패턴
date : 2021-08-26 
keywords : ['Java', '디자인패턴',  'Adapter패턴']
tags : ['Java', '디자인패턴',  'Adapter패턴']
---

![java](https://blog.kakaocdn.net/dn/bSV6cj/btqGyJ5fpVF/vTEjIKZtaGARh6qQdHzHIK/img.png)
<br/><br/>

## **Adapter(어댑터) 패턴**
<br/>

> `어댑터 패턴`이란 한  클래스의 인터페이스를 클라이언트에서 사용하고자 하는 다른 인터페이스로 변환한다. 어댑터를 이용하면 인터페이스 호환성 문제 때문에 같이 쓸수 없는 클래스들을 연결해서 쓸 수 있다.

<br/>

더 쉽게 이해하기 위해 전기콘센트로 비교하면 쉽다.<br/>
한국의 전기 표준 플러그는 220V로 110V를 사용하는 일본의 전원 플러그에 바로 연결하여 사용할 수 없다. 때문에 우리는 `어댑터`를 통해 `변환`하여 사용한다. 마찬가지로 자바 디자인 패턴의 `어댑터`는 어떤 인터페이스에서 다른 인터페이스가 필요로 하는 형태로 `변환`하여 준다고 볼 수 있다. 

<br/>

### **어댑터패턴의 장점과 단점**

- 장점  
  + 기존 클라이언트 사이드의 코드 수정을 최소화 할 수 있다. 
  + 클라이언트는 연동 부분을 몰라도, 새로운 코드의 기능을 일관되게 사용 가능하다.

- 단점 
  + 어댑터를 클래스에서 통일 시켜주는 부분을 하나씩 구현해야 한다.
  +  

- 활용
  + 기존 코드에 새로운 코드(Third party library)을 연동하여 사용하려 할 때, 두 코드의 인터페이스가 달라 하나로 통일하고 싶은 경우 
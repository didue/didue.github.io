---
title : SpringBoot @GeneratedValue 알아보기
date : 2021-07-30
tags : ['SpringBoot']
keywords : ['SpringBoot', 'jpa', 'hibernate', '@GeneratedValue']
---

## @Id와 @GeneratedValue 어노테이션

`JPA`에서 기본키는 직접 할당과 자동 생성으로 매핑한다. 

- 직접 할당 : `@Id` 사용 
- 자동 생성 : `@Id`와 `@GeneratedValue`를 사용하여 기본키 생성을 `DB`에 위임하도록 한다
<br/><br/>

`@Id`는 해당 프로퍼티가 테이블의 `PK`임을 명시하는 것을 나타낸다. 속성에 `@Id`를 붙여주면 객체의 필드에 직접 접근하게 되는 것이다. <br/>
`@GeneratedValue`는 `PK`의 값을 자동 생성 전략을 명시하는데 사용한다. 옵션 속성으로 `generator`와 `strategy`가 있다. 

<br/>

## @GeneratedValue 생산 전략

자동 생성 전략의 속성 값은 아래와 같다. 

<br/>

Mode        |   동작 설명
---         |   :---:
`auto`      |   JPA가 알아서 하도록 위임
`identity`  |   기본키 생성을 DB에게 위임 
`sequence`  |   DB에서 `sequence`를 지원하면 사용(그렇지 않을경우 `table`모드)
`table`     |   DB에 KEY용 테이블이 생김(hibernate_sequence)
<br/>

### Generated.AUTO 속성


### Generated.IDENTITY 속성


### Generated.SEQUENCE 속성


### Generated.TABLE 속성
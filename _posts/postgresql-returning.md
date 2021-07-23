---
title : (Postgresql) Returning 구문 정보 리턴 받기
date : 2021-07-23
tags : []
keywords : []
---

![POSTGRESQL](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfhdXW%2Fbtq665WfGR8%2FQX4BBDAwhiz52sGi08Ychk%2Fimg.png)
<br/><br/>

PostgreSQL에는 `DML(INSERT, UPDATE, DELETE)` 실행 후, affected rows 갯수 대신 정보를 반환해주는 구문이 있다.

그것이 바로 `RETURNING` 구문이다

사용방법은 **아주아주** 간단하다!!  

`INSERT, UPDATE, DELETE`문 뒤에 `RETURNING *` 을 쓰면 실행 결과 ROWS를 반환한다.  

<br/>

이 흥미로운 문법을 아래의 활용 예제를 보면서 `RETURNING` 을 어떻게 쓸 수 있는지 자세히 살펴보자👩🤟

<br/>

---

## Examples
<br/>

### 활용1. SELECT KEY
<br/>

`spring` 환경에서 우리는 `insert(혹은 update)`에서 SQL 실행 후 특정 값을 반환하고 싶을 때, 
대게의 경우에 mybatis(혹은 ibatis)의 `<selectKey>`를 이용하여 이렇게 썼을 것이다.
```
//old
<insert>
    INSERT INTO BOARD(BOARD_ID, TITLE, CONTENT)
    VALUES('A01', '게시글 타이틀', '게시글 내용')
    <selectKey keyProperty="" resultType="" order="AFTER" >
        SELECT BOARD_ID
    </selectKey>        
</insert>
```
<br/><br/>

하지만 `PostgreSQL` 에서는 mybatis없이 이렇게도 쓸 수 있다!

```
//new
<insert>
    INSERT INTO BOARD(BOARD_ID, TITLE, CONTENT)
    VALUES('A01', '게시글 타이틀', '게시글 내용')
    RETURNING BOARD_ID
</insert>
```
<br/><br/>

확실히 `insert`안에 `select`가 들어가있는것 보다 가독성도 좋아보이고,  
`반환(RETURNING)`한다는 의미와 해달 컬럼이 더 잘 전달된다.
<br/><br/>

![https://jjalbot.com/media/2020/03/QPPbAIEl7V/SY9jdwKFd.jpeg](https://jjalbot.com/media/2020/03/QPPbAIEl7V/SY9jdwKFd.jpeg)

편안~
<br/><br/><br/>

### 활용2. UPSERT
<br/>

두번째 활용 예는 `UPSERT`이다. <br/>
많은 사용자들이 알듯이 PostgreSQL에는 오라클의 `MERGE`문이 없다 T-T  
그래서 오라클의 그것과 같은 동작을 위해 우리는 PostgreSQL의 `WITH`를 활용할 수 있다.

<br/>

```
//update할 row가 없으면 insert 하는 upsert(merge)문

WITH UPSERT AS (                            
    UPDATE BOARD
    SET TITLE = '게시글 타이틀 수정'
        , CONTENT = '게시글 내용 수정'
    WHERE BOARD_ID = 'A01'
    RETURNING *
)
INSERT INTO BOARD(
    BOARD_ID
    , TITLE
    , CONTENT
)
SELECT
    BOARD_ID
    , TITLE
    , CONTENT
WHERE NOT EXISTS ( SELECT * FROM UPSERT )
```
<br/><br/>


PostgreSQL의 `UPSERT`문은 [여기](https://didue.github.io/postgresql-upsert/)에서 이전에 한번 다룬적이 있으니, 두 SQL을 비교해보면서 본인의 상황에 적절한 것을 골라서 써볼 수 있도록 하자!
<br/><br/>
+) 이 글은 [여기(이전 블로그)](https://fascinate-zsoo.tistory.com/24)에서 옮겨왔습니다.🙋‍♀️
<br/><br/>

---

#### **참고**

-   PostgreSQL With : [https://www.postgresql.org/docs/9.4/queries-with.html](https://www.postgresql.org/docs/9.4/queries-with.html)
-   PostgreSQL Insert Multi-Rows : [https://www.postgresqltutorial.com/postgresql-insert-multiple-rows/](https://www.postgresqltutorial.com/postgresql-insert-multiple-rows/)
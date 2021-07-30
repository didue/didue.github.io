---
title : (Postgresql) UPSERT 사용하기
date : 2021-07-23
tags : ['PostgresQL']
keywords : ['PostgresQL', 'UPSERT']
---

List가 없이 에디터 하나로 insert/update를 해야하는 게시판을 작성하는 업무가 있어서 찾아보다가 `UPSERT`라는 것을 알게 되었다!

`UPSERT` 는 일종의 `MERGE`문 같은 개념으로(~~postgresql은 merge가 없음......~~)
**행이 없으면(존재하지않으면) INSERT하고 존재하면 UPDATE하는 문법**이다.

<br/>
PostgresQL의 공식 Document에 내용이 너무 잘 정리되어있어서 그 내용을 정리하며 복습해보려 한다.
<br/>

---

<br/>

## PostgresQL의 UPSERT
<br/>

postgresQL에서 사용하는 UPSERT문법은 아래와 같다!

`Insert`문 다음에 존재하는지 확인할 `target`과 타겟 확인 이후 `action` 순으로 작성한다.
기본 구문 형태는 아래와 같이 사용한다.
```
INSERT INTO table_name(column_list) 
VALUES(value_list)
ON CONFLICT target action;
```
<br/>


### Target

-   (column name) : 컬럼명
-   ON CONSTRAINT 제약이름 : unique 제약의 이름
-   WHERE 절

### Action

-   DO NOTIHING : 아무것도 수행하지 않음
-   DO UPDATE SET ~~~ : 테이블 일부 필드의 업데이트

<br/>


※ ON CONFLICT절은 PostgresQL9.5 이상에서만 사용할 수 있다!
<br/><br/><br/>

---

<br/>


## Example
<br/>


이제 예제를 보면서 이해해보자. 아래 `DDL`문에서 정의하는 <b>customers라는 테이블</b>이 있다고 할 때

```
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    customer_id serial PRIMARY KEY,
    name VARCHAR UNIQUE,
    email VARCHAR NOT NULL,
    active bool NOT NULL DEFAULT TRUE
);
```
<br/>

`unique` 속성이 있는 name 컬럼의 값이 이미 존재한다면, 아무것도 수행하지 않도록하는 SQL은 아래와 같이 쓸 수 있다.

```
INSERT INTO customers (NAME, email)
VALUES('Microsoft','hotline@microsoft.com') 
ON CONFLICT ON CONSTRAINT customers_name_key 
DO NOTHING;
```
<br/><br/>

제약조건말고 컬럼명(name)으로도 동일한 수행을 하도록 작성할 수 있다.
```
INSERT INTO customers (name, email)
VALUES('Microsoft','hotline@microsoft.com') 
ON CONFLICT (name) 
DO NOTHING;
```
<br/><br/>

마지막으로 이미 존재하는 대상에 대해서는 `UPDATE`하도록
`ACTION`을 주는 SQL은 `DO 절` 뒤에 수행될 UPDATE문을 작성하면 된다!
```
INSERT INTO customers (name, email)
VALUES('Microsoft','hotline@microsoft.com') 
ON CONFLICT (name) 
DO 
   UPDATE SET email = EXCLUDED.email || ';' || customers.email;
```
<br/><br/>

---

<br/><br/>

(+) 개인적으로 현업에서 `ON CONFLICT`보다 더 자주 사용하는  
`RETURNING`문을 활용한 UPSERT도 있으니 비교해보고 상황에 맞는것을 사용해보자!


[\[PostgreSQL\] Returning 구문으로 정보 리턴 받기
](https://didue.github.io/postgresql-returning/)

<br/><br/>
+) 이 글은 [여기(이전 블로그)](https://fascinate-zsoo.tistory.com/24)에서 옮겨왔습니다.🙋‍♀️
<br/><br/>

---
<br/><br/>

### 참고

-   [PostgresQL API Document](https://www.postgresqltutorial.com/postgresql-upsert/)
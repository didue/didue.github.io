---
title : 코드 품질관리 SonarQube 도입기(1) - 설치하기
date : 2021-07-27
tags : ['sonarqube', 'til', 'linux', 'postgresql']
keywords : ['sonarqube', 'til', 'linux', 'postgresql']
---

좋은 코드, 좋은 시스템에 대한 꿈과 갈망은 늘 마음속에 품었으나 하드코딩 난무하는 `레거시코드`와 `통계지옥`에 치이고 약간은 타성에 젖어가고 있는 2년 n개월차 개발자쯤.. <br/>
[이글](https://sogoagain.github.io/2020/03/08/%EB%A0%88%EA%B1%B0%EC%8B%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%A0%90%EC%A7%84%EC%A0%81%EC%9C%BC%EB%A1%9C-%EA%B0%9C%EC%84%A0%ED%95%9C-%EA%B2%BD%ED%97%98/)이 저에게 뭔가 `trigger`가 되어서 추진력을 생기게 해주었습니다! 글 내용 중 가장 와닿았던 부분은 
> * 레거시 코드는 다른 사람이 "처음" 작성해야 하는 처지였음을 잊지 말아야 한다. 
> * 레거시 코드를 만난다고 실망에 그칠 것이 아닌 적극적으로 개선시키는 태도가 필요하다.

라는 부분 이었습니다. 가끔 1-2년 전에 제가 쓴 코드를 보고도 '아니 이건 누가 이렇게 짰담?' 하는 경우가 두어번 정도 있었기 때문에 더욱 더 공감되는 부분입니다. 
<br/><br/>

그래서 지금 운영 유지보수로 업무하고 있는 프로젝트에도 `SonarQube`를 도입하여 코드 품질을 개선하고자 했던 경험을 공유합니다. 레거시 코드를 개선하며 프로젝트 코드품질을 `클린`하게 만들어가며 스스로 `코드를 대하는 태도`에 대하여도 다시금 아로새겨보는 계기로 삼고자 합니다. 
<br/>




## SonarQube Web 설정하기 

### sonar.properties

#### jdbc 설정
```
sonar.jdbc.username=sonar
sonar.jdbc.password=XXXXXXXX
```

```
#----- PostgreSQL 8.x or greater
# If you don't use the schema named "public", please refer to http://jira.sonarsource.com/browse/SONAR-5000
sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube
```

#### WEB서버 설정
```
sonar.web.javaOpts=-Xmx3096m -Xms2048m -XX:+HeapDumpOnOutOfMemoryError
```

```
#0.0.0.0 = localhost
sonar.web.host=0.0.0.0
sonar.web.port=9000:
```





---
<br/>

### 참고

- sonarsource Community [https://community.sonarsource.com/](https://community.sonarsource.com/)
- sonarQube 설치하기 [https://info-lab.tistory.com/183](https://info-lab.tistory.com/183)
- PostgresQL 가이드북 [http://www.devkuma.com/books/pages/1459](http://www.devkuma.com/books/pages/1459)
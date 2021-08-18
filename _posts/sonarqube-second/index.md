---
title : 코드 품질관리 SonarQube 도입기(2) - 실행하기
date : 2021-08-17
tags : ['TIL', 'SonarQube', 'PostgresQL']
keywords : ['sonarqube', 'TIL', 'Linux', 'PostgresQL']
---

![](https://media.vlpt.us/images/3rd-big/post/6304e3ad-127b-4392-8a0b-da0c942bb556/sonarqube-logo@2x.png)
<br/><br/>

## SonarScanner 

소나큐브 설치 도입기였던 [이전 게시글](https://didue.github.io/sonarqube-first/)에 이어서 이번에는 `SonarScanner(소나스캐너)` 설치하여 코드분석을 실행해보겠습니다.
<br/>

`소나스캐너`는 소나큐브가 버그나 취약점 등 코드 분석과 자동 리뷰할 수 있도록 코드를 읽는 스캐너입니다. 
<br/><br/>

### 1. 소나스캐너 설치

소나큐브 설치와 마찬가지로 [소나소스 다운로드](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)페이지에서 원하는 타입에 맞추어 `소나스캐너`를 설치합니다. 

*`maven 또는 gradle` 프로젝트를 쓰시는 분들은 `dependency`를 통해서 프로젝트에 설치*하시거나 *`jenkins`의 플러그인으로 설치*하실 수 있습니다. 하지만 저는 서버에 직접 설치하는 방법으로 해보겠습니다!
<br/><br/>

```
#설치경로 이동
cd /opt

#소나스캐너 설치 
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-linux.zip

#압축해제
unzip sonar-scanner-cli-4.6.2.2472-linux.zip

#디렉토리명 변경
rename sonar-scanner-cli-4.6.2.2472-linux sonar-scanner

#환경변수 등록
export PATH=$PATH:/opt/sonar-scanner/bin
```
<br/>

### 2. 소나스캐너 프로젝트 설정
소나스캐너 설치가 완료되었다면 소나큐브 웹 콘솔을 통해 프로젝트를 등록하는 일은 선행해야 합니다. 프로젝트 생성은 '' 메뉴에서 추가할 수 있습니다.

![웹콘솔 사진]()
<br/><br/>

이제 소나큐브 웹 콘솔에 프로젝트 등록을 마쳤다면 소스코드가 있는 프로젝트의 `root 경로`에 `sonar-project.properties`라는 설정파일을 생성하여 조금 전 만든 소나큐브 프로젝트 설정파일을 아래와 같이 작성하여 줍니다.

![소나스캐너프로젝트 파일 이미지]()
<br/><br/>

```
# 소나큐브에서 등록한 프로젝트 key
sonar.projectKey=my:project

# 소나큐브에서 등록한 프로젝트 이름
sonar.projectName=My project
# 프로젝트 버전
sonar.projectVersion=1.0
 
# 스캔할 소스 범위 (defaults : .)
#sonar.sources=.
 
# 소스코드 인코딩(default : UTF-8)
#sonar.sourceEncoding=UTF-8
```
<br/>

### 3. 소나스캐너 실행
자, 이제 모든 준비가 끝났습니다. 이제 `sonar-project.properties` 파일이 있는 경로에서 아래의 command로 소나스캐너를 실행하여 우리 프로젝트의 코드를 스캔해봅시다!
<br/><br/>

```
sonar-scanner -Dsonar.login=myAuthenticationToken
```
<br/>

*Tada!* 이제 소나큐브 콘솔에 프로젝트의 코드 분석 결과가 나타날 것 입니다. 
여기까지 소나스캐너 설치는 완료되었습니다. 
소나큐브를 활용하여 코드 리팩토링하여 코드를 개선한 경험에 대한 내용은 `(3편)활용편`에서 곰방 다시 돌아오겠습니다💁‍♀️

<br/>

<hr/>
<br/>

### 참고

- [sonarqube docs 9.0](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)
- [sonarqube scanner documentation](https://plugins.jenkins.io/sonar/)
- [무작정따라하기 블로그](https://dololgun.github.io/sonarqube/sonarqube/)
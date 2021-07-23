---
title : Java8 스트림(Stream) API 이용하기 - map/filter/distinct
date : 2021-07-23
tags : ['Java', 'Java8', 'Stream']
keywords :  ['Java', 'Java8', 'Stream', 'map', 'filter', 'distinct']
---


Java8에서 선보인 Stream API를 근래 업무에서 너무 편하게 잘쓰고있어서 정리해보려 한다.

필요의 순간에 아주 유용하게 쓸 수 있는 API니 잘 알아두자!


## Java Stream

기존에 자바 Collection이나 Array의 요소를 가공할 때는 `loop(for, foreach)`를 사용해서 요소를 골라내는 작업을 했다면, `Stream`은 **람다형(함수형 인터페이스)** 으로 간단하게 요소를 처리할 수 있도록 한다



**장점**

- 코드의 양을 줄여 간결하게 표현
- 손쉬운 병렬처리(multi-threading)

<br/>

---
<br/>

## Stream 사용법
<br/>

<p style="font-size:16px; font-weight:bold; color:#000;"><span style="background-color:#FFFF99;">객체집합</span>.<span style="background-color:#00FFCC;">스트림생성</span>.<span style="background-color:#CCCCFF;">중개연산</span>.<span style="background-color:#66CCFF;">최종연산</span></p>


이러한 형태의 기본문법으로 사용한다.
<br/><br/>


### 스트림 생성

`Collection`과 `Array`와 같은 **객체집합**으로 스트림을 생성한다.

이외에도 다양한 방법으로 스트림을 생성할 수 있다.
( ※ 참고 사이트가 도움이 될 수 있습니다😊)
<br/><br/>

### 중개연산

`중개연산`은 원소를 가공하는 연산으로서 자주 사용하게되는 메소드를 정리해보았다.
<br/>

<table style="border-collapse: collapse; width: 100%; height: 99px;" border="1" data-ke-style="style13" data-ke-align="alignLeft"><tbody><tr style="height: 20px;"><td style="width: 16.8217%; text-align: center; height: 20px;">Method</td><td style="width: 31.124%; text-align: center; height: 20px;">Description</td><td style="width: 52.0542%; text-align: center; height: 20px;">etc.</td></tr><tr style="height: 19px;"><td style="width: 16.8217%; text-align: center; height: 19px;">map</td><td style="width: 31.124%; height: 19px; text-align: left;">특정조건의 요소의 값 반환(연산)</td><td style="width: 52.0542%; height: 19px; text-align: left;">요소들의 대,소문자 변형</td></tr><tr style="height: 20px;"><td style="width: 16.8217%; text-align: center; height: 20px;">filter</td><td style="width: 31.124%; height: 20px; text-align: left;">조건에 맞는 요소만 필터링</td><td style="width: 52.0542%; height: 20px; text-align: left;">길이제한, 특정문자 포함단어 취득 등의 작업</td></tr><tr style="height: 20px;"><td style="width: 16.8217%; text-align: center; height: 20px;">sorted</td><td style="width: 31.124%; height: 20px; text-align: left;">요소 정렬</td><td style="width: 52.0542%; height: 20px; text-align: left;">요소들을 정렬&nbsp;</td></tr><tr style="height: 20px;"><td style="width: 16.8217%; text-align: center; height: 20px;">distinct</td><td style="width: 31.124%; height: 20px; text-align: left;">요소 중복 제거</td><td style="width: 52.0542%; height: 20px; text-align: left;">중복되지 않은 요소들로 정제하는 작업</td></tr></tbody></table>
<br/><br/>


**_filter()_**

요소에서 특정 원소를 `filtering`하는 메소드로써, `List`나 `Array`에서 원치 않게 `null`(혹은 공백 "")이 들어올 경우 등의 손쉽게 처리할 수 있습니다.
```
//원래의 배열
String[] fruits = {"apple", "grape", "orange" , null, "banana", ""};
//null요소를 제거된 새로운 배열
String[] existed = {};

//stream().filter()
existed = Arrays.stream(fruits).filter(item -> isNotNull(item))
                .toArray(String[]::new);
                
//결과 
// ["apple", "grape", "orange", "banana"]
```
<br/><br/>

**_distinct()_**

`distinct` 메소드로 원소의 중복을 쉽게 처할 수 있습니다.
```
//원래의 배열
String[] fruits = {"apple", "grape", "orange" , "grape", "banana", "banana"};
//null요소를 제거된 새로운 배열
List<String> distincted = new ArrayList<>();

//stream().distinct()
distincted = Arrays.asList(elements).stream().distinct().collect(Collectors.toList());

//출력
distincted.forEach(System.out::println);

//Result :
//apple
//grape
//orange
//banana
```
<br/>

**최종연산**

`최종연산`은 스트림 요소들을 *다시 모으거나, 값을 세는 등* 앞선 `중개연산`을 통해 가공한 *스트림 요소를 마무리하는 단계*이다.

<br/>

**_collet()_**

스트림의 값들을 다시 모아주는 메소드.  `toMap`, `toSet`, `toList`로 다시 `Collection`으로 바꿔준다.

```
/**
 * 중복요소 제거
 * @param key
 * @param target
 * @return
 */
public List<String> distinctElements(List<Map<String, Object>> resultData, String key){ 
	
	List<String> target = mkListFromMap(resultData, key);
	
	if(target != null){
		target = target.stream().filter(distinctByKey(value-> value)).collect(Collectors.toList());
	}
	
	return target;
}

private <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
	
	Map<Object,Boolean> seen = new ConcurrentHashMap<>();
	return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
}
```
<br/>

위 코드는 최근 업무에서 Stream을 사용하여 작성한 중복요소 제거코드이다. 앞서 작성한 내용들을 응용한 부분이니 이해하여보고 다시 본인만의 스타일대로 응용해보는것도 좋을것같다^\_^

<br/><br/>
+) 이 글은 [여기(이전 블로그)](https://fascinate-zsoo.tistory.com/24)에서 옮겨왔습니다.🙋‍♀️
<br/><br/>
<hr/>
<br/><br/>

\- 참고사이트 

https://docs.oracle.com/javase/8/docs/api/index.html

https://futurecreator.github.io/2018/08/26/java-8-streams/

https://dpdpwl.tistory.com/81
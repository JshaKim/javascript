/*
자바의 경우 정수와 실수를 구분해 int, long,float,double 등과 같은 다양한 숫자 타입을 제공한다.
하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
 */

//자바의 변수 표현식
//자료형 변수명= 10;

Number();  /*숫자형 데이터 생성하거나 변환할때 쓰는 생성자 함수*/ 
var integer =10; //int, short, byte, long
var double  =10.0; //
var negative = -10;
var int = 10;



console.log("10"+"10");
console.log(Number("10") * "10");
console.log()   /* 출력안함(빈줄출력) */
console.log(10 === 10.0);  //값과 자료형이 같음 ===// 값같음 ==
console.log(typeof (10/4));

/* 
Infinity : 양의 무한대
-Infinity: 음의 무한대
NaN : 산술 연산 불가
 */

console.log(10/0);
console.log(10/-10);
console.log(1*'문자열'); 

// document -> htrml 문사 파일을 가져옴
document.write('js를 시작했어요');


// 1. js 대소문자 구분
//  날ㅉ빠 객체
new Date();
// new date(); <- 에러

// 2. 코드 한줄 작성후 세미콜론;
document.write("h1");
document.write("Bye");

// 3. 큰따옴표 작은따옴표 겹침 주의 
// 앞에 백슬래쉬 붙여주거나 작은따옴표 추가

document.write("선생님이 '필기 해' 라고 말씀하셧다");
document.write("선생님이 \"필기 해\" 라고 말씀하셧다");

//변수 선언

var age = 18; // <- 이제 사용하지 맙시다~~~


// es6(ECma2015)\
// 변수 -> 제할당(수정) 가능/불가능

// 생성과 동시에 할당 핗수 
const age2  = 18; // constant : 상수  수정이 절대 불가능한 데이터 

// age2 = 23; (에러 발생, 재할당 불가능한데 했음)

// let 수정 및 재할당 자요로움
let age3 = 18;
age3 = "20살부터 성인";
console.log(age3); // 브라우저의 console 영역에 문자열 출력

// js에서 사용하는 자료형
// 1.문자형
let firstname = "jason";
// 문자열 데이터의 html 태그를 포함해서 출력 시 태그로 인식한다.
let lastname = "<h1>Evans</h1>";

// 2. 숫자형 -> Number 

let age5 = Number("18");  // 문자열 데이터(숫자만 읶는) -> Nember 자료형으로 형변환
let age6 = Number("18살"); // 문자열 데이터 강제변환 얼마든지 가능하지만 문자가 포함이되있으면 NAN을 리턴함
 
// 3.논리형
let isLogined = true;
isLogined = false;

let check = Boolean(""); // truthy, fulsy 의 개념이 존재한다!
// 앵간해서는 값이 붙어있다 -> true 반환함
// null,0,undifiend,"",NAN, ... -> false 반환함 
 
// 4.빈 데이터(null, undifined)

let tmp; // undifined 변수에 값을 등록하지 못한 상태 (의도 X)
let tmp2 = null; // null: 변수에 저장된 데이터를 비울떄 (의도 O)

// 자료형이 뭔데? -> typeof
// string, number, boolean, undifined -> typof 출력 시 본인 자료형 그대로
// typof NAN => Number
// typof null -> object (객체) (null 이라는 이름의 자료형)

// 변수 선언시 주의사항

let $num1,_num2,num3;































































































































































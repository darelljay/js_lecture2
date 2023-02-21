
// 문자열  String 

// 문자열 객체 생성
let str1 = "hello";
str1 = new String("hello world world");

console.log(str1.charAt(1)); // 인덱스 번호에 해당되는 문자 반환
console.log(str1[1]); // 마치 배열처럼 처리 가능

// 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
// 없으면 -1 반환 
console.log(str1.indexOf("world"));

// 오른쪽에서부터 일치하는 문자를 찾아!
console.log(str1.lastIndexOf("world"));

// 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 찾은 문자 반환\
// 없으면 null 반환 
console.log(str1.match("world"));

// 왼쪽부터 원하는 문자를 찾아 제일 먼저 찾은 문자를 치환
// 원본을 건드리지 않음 새로운 문자열 반환
console.log(str1.replace("world","javascript"));
console.log(str1);

// indexOf(): 문자열과 일치하는 데이터
//  vs
//  search() : 문자열, 정규표현식(문자 패턴)과 일치하는 데이터
// 특정 문자를 포함하는 여부 체크 -> (ex 비밀번호에 허용되는 특수문자) 
console.log(str1.search("world"))


// slice(a, b) : a개의 문자를 자르고 b번째 이후에  문자를 자른 후 남은 문자 반환  
// 원본건드리지 않고 새로운 문자 반환 
// -1의 경우 위에서부터 첫번째 글자 

const str = 'The quick brown fox jumps over the lazy dog';

console.log(str.slice(31)); // the lazy dog
console.log(str.slice(4,19)); // quick brown fox
console.log(str.slice(-4)); // dog 
console.log(str.slice(-9,-5)); // lazy

// substring(a,[ b]) : 문자열 a~b까지를 반환 (b번째 인덱스는 포함하지 않음)
// 원본을 건드리지 않고 새로운 문자열을 반환 
// 만약 b를 입력하지 않은 ㄱ경우, 끝까지~
console.log(str.substring(4,9));

//  구분 문자를 기준으로 문자 데이터를 쪼게서 배열에 저장 후 변환
const result = str.split("");
console.log(result);

// 문자열 -> 전부 대문자 
// 원본을 건드리지 않고 새로운 문자열을 반환한데 

console.log(str1.toUpperCase());
// 문자열 -> 전부 소문자  
console.log(str1.toLowerCase());


// 글자 수 속성(필드)
console.log(str1.length); 

console.log(str1.concat(" 2023!"));
console.log(str1+" 2023!");

// trim() : 문자열의 양쪽 공백을 제거           
const str2 =  "                        hello                ";
console.log(str2.trim());

// 2.브라우저 객체 모델(BOM)
// window : 가장 최상위 객체
// documentm screnn locatuion history navigator

// window 객체의 메서드 종류
// URL 전달받은 페이지를 새 창에 표시 
// window.open("https://www.naver.com","naver","width=500, height=500, left=50,top=50,scrollbar=no");
// alert(): 메시지를 표시하는  경고창, 확인을 눌러야 다음 코드 진행

//prompt("전달할메세지(기본겂)") -> 문자열 데이터 반환
// const user_input = prompt("당신의 이름은?","김다렐")

// confirm("전달할 메시지") -> boolean 데이터 반환 
// const user_confirm = confirm("둘중에 하나만 골라 yes or yes");

// alert("로그인을 먼저 해주세요")
// window.location.href = 'https://www.naver.com/'

// setInterval(함수,시간) : 계속해서 일정 시간 간격으로 함수를 호출
// setTimeout(함수,시간) : 단 한번 일정 시간이 흐른 후 함수를 호출
const sayHelloForASecond = setInterval(() => {
    console.log("인녕하세요!");
},1000);

function sayHello(){
    console.log("hello");
}

clearInterval(sayHelloForASecond);

// 전달하는 요소는 함수의 이름!!! (괄호를 붙이면 xxx)
const theOtherHello = setInterval(sayHello,1000);

// clear~ 를 통해 함수 제거 가능 
clearInterval(theOtherHello);

// screen : 사용자의 모니터 정보(pc, 모니터,테블릿)
console.log(screen.width);
console.log(screen.height);

// alert(screen.width + " "+ screen.height );

// location : 브라우저와 관련된 현재 URL에 대한 정보, 새로소침 메서드를 호출

console.log(location.href); // 현재 접속중인  URL 
console.log(location.host); // 호스트(서버주소) & 포트번호 반환 
// location.reload();

// location.href 지정하여 화면 이동 가능 
// location.href = "https://www.naver.com"; 

// history : 사용자사 방문한 사이트의 기록, 이전 방문, 다음 방문 한번씩 제어 가능
// history.length: 방문 기록에 저장된 목록 개수 
history.back(); // 이전 방문 사이트로 이동
history.forward(); // 다음 방문 사이트로 이동 만약 다음 사이트가 없으면 이동안함  

// navigator : 햔재 사용자가 사용하는 브라우저의 정보, 운영체제의 정보 
navigator.language;
console.log(navigator.onLine); // 유저의 온라인 여부를 boolean값으로 반환 

// 3. 문서 객체[ 모델(DOM) : HTML 문서 구조 -> jquery

// 함수 : js 코드의 묶음, function 키워드를 사용하거나, arrow 함수 형태
// 데이터를 전달하여 사용할수 있으며, 실행 결과를 반환할 수도 있다!

// 호이스팅(hoisting) : 물건을 끌어올린다 사전적 저으이
// 함수를 정의하기 전에 먼저 호출해도 문제 없음
// 가장 기본적적인 함수 정의 방법에만 적용이 된다 
sayHi()

// 1.함수 정의 방법 
function sayHi(){
    console.log('hi~~~~~~~`')
}
// 2. 익명 함수

const sayHI2 = function(){
    console.log("hi~~~~~~~~2")
}

// 3. es6에서 등장한 화살표 함수

const sayHi3 = () =>{
    console.log('h1~~~~3')
}

// 4. function 생성자 : 안좋음. 알고는 있되 사용은 하지 말자 
// const sayHi4 = new ('name','console.log("h1~~~")')

//  매개변수: 함수를 실행하기 위해 필요한 값을 
//  함수 외부에서 내부로 전달하기 위해 싸움!

//  매개변수 parameter -> 함수를 정의할떄 함수 내부에서 변수처럼 사용,
// 인수 arguments -> 함수를 호출할떄 지정, 갯수 타입에 제한이 없음

// 함수 매개뱐수의 기본값 or undifined일떄만 적용    
function add(x,y){
    console.log(x=0,y=0); // 전달받은 값이 없다면 undifined 있으면 그 값을 리턴한다 

    x = x || 0;
    y = y || 0;


    return x+y;
}

// 매개변수는 최대 3개를 넘지 말자 
const student = {
    name:"darell",
    age:18,
    height:181,
    score:100
}

function printStudent(student){
    student.name = "jason"
    console.log(student.name)
}

printStudent(student)
// 함수 호출 
let res =  add(1,2);

// js에서의 함수!! -> 매개변수 개수 <-> 인수의 개수 일치하는 체크 x 
// 인수가 부족(덜 전달) -> 함수 내부에서는 부족한 데이터는 undifined처리
// 인수가 과함(더 전달) -> 무시 (버러지 않고, arguments 객체에 저장)
console.log(add(1))

// 화살표 함수 조금 더 자세히 - Rest
// teturn 생략된 상태!
const multiply = (x,y) =>  x*y;

// 만약 매개변수가 1개인 경우 괄호 생략 가능
// 함수의 몸체가 1개인 경우, {} 생략 가능 
const func1 = x => {console.log(x)};

// 만약 매개변수가 없으면, 괄호 반드시 적어줘야 끝!
const func2 = () => {};

// 객체를 반화하는 경우 반드시 ()로 감싸주자
// {} -> {return _______}와 동일
const func3 = (id,pw) => ({id, pw});
console.log(func3("darell",'jason1234'))

// 화살표 함수 vs 일반 함수
// 1.중복된 매개변수 이름 선언 여부
function f1(a,a){
    return a+a;
}
// 화살표 함수는 중복된 매개변수 이름 허용 하지 않음
// const arrowF1 = (a,a) => a+a;

// 화살표 함수는 this,arguments, super 사용 불가
// this: 자기 자신(객체 본인)
// super: 부모(객채가 상속받는 부모 객체)

// arguments를 사용할 수 없다? -> 기번 인자가 불가능? -> xxxx
// 화살표 함수: <Rest 파라미터> 방식을 사용

// Rest 파라미터 : 함수에 전달된 인수들을 배열로 전달하는 방법
// rest는 반드시 마지막 요소 단 1개만 사용 가능,
function f2(...params){
    console.log(params);
    // ES6 부터 등장한 Rest요소를 사용하여 바로 배열 메서드 사용 
    return  params.filter(num=>num>=5);
  
}
console.log(f2(1,2,3,4,5,6,7));

// ES6에서 도입! 스프레드(spread) 문법 -> "..."
// 하나로 뭉쳐져 있는 여러 값의 집합을 펼처서 개별적인 값의 목록으로 만듦!
// spread 사용 가능 대상 : Array,String,DOM 컬랙션 
// 순회할 수 있는 이터러블에서 사용 가능~~~
//  for of 사용 가능한, 순회할 수 있는 이터러블에서 사용 가능~~~
console.log(...[1,2,3])
console.log(..."goodbye~~~")

//스프레드 문법의 결과는 값이 아니다!
// cosnt list = ...[1,2,3];
// console.log(...{name:"darell",age:20}); (객체는 for of 반복 X)

// 1.함수 호출시 인수에서 사용하는 경우
console.log(Math.max(1,2,3,4,5));
const numbers = [1,2,3,4,5,6,7,8,9,10,11,23,23,43,421,433,123412,421];
console.log(Math.max(...numbers));  // 점점점을 빼면 NaN 값이 넘어옴 

// 2. 배열 내부에서 사용하는 경우
//concat 대신
console.log([1,2].concat([3,4])) // ~Es5
const arr = [...[1,2],...[3,4]] // ES6
console.log(arr)

// splice를 좀더 잘 쓰기 위해 
// splice : 어떤 배열의 중간에 다른 배여르이 요소를 추가하거나 제거하기 위해 사용
const arr1 = [1,4];
const arr2 = [2,3];

// [1,2,3,4]를 만들자 
arr1.splice(1,0,...arr2); //[1,[2,3],4]

// 배열의 복사를 위해 slice를 사용했음 (ES5)
// (동일한 값을 갖는, 완전히 새로운 배열을 생성하는것)
const origin = [10,20];
const copy = origin.slice();

const trendopy = [...origin]; //ES6

// 객체가 내부에서 사용되는 경우 
const obj1 = {x:1,y:2};
const copryObj = {...obj1};

const marged = {x:1,y:2,...{a:3,b:4} }


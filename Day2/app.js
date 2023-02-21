
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
const user_confirm = confirm("둘중에 하나만 골라 yes or yes");

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

alert(screen.width + " "+ screen.height );

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
  

// 직접 선택자 
// 전체(*), 아이디(#), 클래스(.), 요소명,그룹(,) 선택자 

// 전체
// $("*").css("border","1px solid black")

// 아이디
// 체이닝 기법: 선택한 요소에 대한 메서드를 연속해서 사용 "";로 끝내기 
// $("#title").css("background-color","red").css("color","white");

// 클래스 
// jQuery는 해다오디는 요소들 싹                     
$(".greet").css("color","red")

// 요소명 (Tag 이름)
// $("h2").css("color","blue");

// 그룹 (,)
// $("h2,h1").css("color","blue")

// 종속 선택자 -> 선택한 요소의 id/class 값이 일치하는 요소\
// Tag.class     / Tag#id  띄어쓰기 x (띄어쓰기 하는 순간 하위 태그가 선택 됨)    
// $("h2.greet").css("color","purple")

//




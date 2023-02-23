// 이벤트 : 유저가 웹사이트에 방문하여 하는 모든 동작 
// 이벤트 핸들러: 이벤트가 발생했을 때 코드를 실행시키는 것

// 이벤트 등록 : 하나의 이벤트만 등록(listen) / 여러개의 이벤트를 등록 
// ex.  요소  더블클릭했을때 / 요소에 마우스 포인터를 올렸을떄 

// $("요소 선택).이벤트종류(이번트핸들러 필수)
// $("#btn").click(function() {
//     alert("클릭됨")
// });


// 이벤트의 종료들 
//  로딩 이벤트
// load() ready() error()

//  마우스 이벤트
// click() dbclick()
// mouseout() hover()
// mousedown() mouseup() mouseEnter() mouseLeave() mouseMove()
//scroll

// 포커스 이벤트
// focus() 
// fucusin() focusout()
// blur() 
// change()

// 키보드 이벤트 
// keypress()
// keydown() keyup()

// 단독 이베트 등록 방법 
// $("요소선택").이벤트등록메서드(이벤트핸들러 함수)

// function btnClickHandler(){
//     console.log("클릭됨")
// }

// $("#btn").click(btnClickHandler)

// 그룹 이벤트 등록 메서드
//  1. 
// $("요소선택").on("이벤트종류" 이벤트종류",function){})
// 2.
// $("요소선택").on({"이벤트종류1 "이벤트종류2":function() {}
// })
//  3. 
// $("요소선택").on({
    // "이벤트종류1":function() {},
    // "이벤트중류2": function() {}
// })
// btn요소에 마우스를 올리거나 키보드를 사요해서 버튼에 포커스를 맞출 떄
$("#btn").on("mouseover focus",function() {
    console.log("이벤트 발생");
});

//2. 
$("#btn").on({
    "mouseover focus":function () {
        console.log("이벤트 발생2")
    },
});

// 3.
$("#btn").on({
    "mouseover":function(){console.log("이벤트 발생3")},
    "focus":function(){console.log("이벤트 발생3")}
})

// 강제로 이벤트를 발생시키기
// 사용자에 의해 이벤트x 핸들러에 의해 이벤트 o 

// 1.$("이벤트 대상").단독이벤트등록메서드();\
// 2.$("이벤트 대상").trigger("이벤트 종류")
$("#btn").click()
$("#btn").trigger("click")

// 이벤트를 제거하는 메서드 : off()
// $("이벤트 대상").off("제거람 이벤트의 종류"); <- 이벤트1 이벤트2 이벤트3
$("#btn").off("click mouseover focus");

////////////////////////////////////////////////////////////

// 로딩 이밴트
// 유저가 브라유저에서 HTML 문서를 요청하여 html 문서의 로딩이 완료되는 순간!!

// ready() : 유저가 사이트를 방문할떄 요청한 html 문서 (document)의 로딩이 완료된 순간 이벤트 
// $(document).ready(function(){
//     console.log($("img").height());
// });
// load() : 외부에서 연동된 소스(ifram,img,video)의 로딩이 끝났을 떄 
// jquery 3.0 기준 on()을 통해서면 
// $(window).on('load',function(){
//     console.log($("img").width());
// });

// 마우스 이벤트
// $("img").click(function(){
//     console.log("클릭됨");
// });

// $("img").dblclick(function(){
//     console.log("더블클릭됨")
// })
// $("img").dblclick(); 강제 이벤트 발생

// a 태그나 form태그의 기본 이벤트를 차단하는 방법
// $("a").click(function(event){
//     event.preventDefault(); // 기본 이벤트 차단 
//     console.log(event);
//     console.log("a 태그 클릭됨");
// });

$("button").click(function (event){
    // event.preventDefault();
    console.log('제출버튼 클릭됨');

    return false; // 기본 이벤트 차단 바법 2번째 
});

// mouseOver() / mouseOut() / hover()
// mouseOver() : 선택한 요소에 마우스를 올릴 떄마다
// $("a").mouseover(function(){
//     console.log("mouseover()")
// })

// mouseOut()  : 선택한 요소에서 마우스가 벗어날 떄마다

// $("a").mouseout(function(){
//     console.log("mouseOut")
// })

// hover() : 선택한 요소에서 마우스가 올라가거나 벗어났을때 각각
// 올라갈떄 / 벗어날떄 따로 핸들러를 실행시킬 수 있음
// $("a").hover(
//     function(){
//     console.log("mousein")},
//     function(){
//         console.log("mouseOut")
//     }
// )

// mouseenter() / mouseleav() 메서드
// mouseenter() : 대상 요소에 경계범위에서 마우스가 들어올때
// mosueleave() : 대상 요소의 경계범위에서 마우스가 온전히 나갈때 


///////////////////////// mouseover() mouseout() : 이벤트 버블링 발생
// 작게 부모요소에서 이벤트가 전달되어 내가 target 으로 설정한 요소애
// 실제 이벤트가 발생한 요소가 다를 수 있음
// preventDefault 사용 가능

// mouseenter() mouseleave() 메서드는 버블링이 발생하지 않음 
// 내가 성정한 **해당 요소에서만 ** 이벤트가 발생
// preventDefault 사용 불가

// $("#box_1").mouseout(function(){
//     console.log('mouseout() 이벤트 발생')
//     $("#box_1").css("background-color","yellow")
// })

// $("#box_1").mouseover(function(){
//     $("#box_1").css("background-color","green")

// })

// $("#box_2").mouseenter(function(){
//     $("#box_2").css("background-color","violet")

// })

// $("#box_2").mouseleave(function(){
//     console.log("mouseleave() 이벤트 발생")
//     $("#box_2").css("background-color","salmon")
// })

// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault
//     console.log(e.eventPhase);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log('------------------------------')
// });

// document.querySelector("p").addEventListener("click",function(e){
//     e.preventDefault
//     console.log(e.eventPhase);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log('------------------------------')
// });

// document.querySelector("div").addEventListener("click",function(e){
//     e.preventDefault
//     console.log(e.eventPhase);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log('------------------------------')
// });

// mousemove() : 선택한 요소 안에서 마우스를 움직일떄 발생
// $(document).mousemove(function(event){

//    const x =  event.pageX;
//    const y = event.pageY

//    $(".zonex").text(x);
//    $(".zoney").text(y)
// })

// scroll() : 스크롤 이벤트
// scrollTop() :선택한 요소 집합의 첫 번째 요소의 수직 스크롤 바의 위치를 얻거나, 선택된 요소의 수직 스크롤 바의 위치를 인수로 전달받은 값으로 설정한다.
// scrollLeft() : 선택한 요소 집합의 첫 번째 요소의 수평 스크롤 바의 위치를 얻거나, 선택된 요소의 수평 스크롤 바의 위치를 인수로 전달받은 값으로 설정한다.

// $(window).on("scroll", function(){
//     $(".top").text($(this).scrollTop());
//     $(".right").text($(this).scrollLeft());
// })

// 포커스 이벤트
// 포커스 : 마우스로 a / input 태그를 클릭 or Tab 누를 떄 생성

$("#user_id, #user_pw").on("focus",function(){
    $(this).css("background-color","salmon");
})
$("#user_id,#user_pw").on("blur",function(){
    $(this).css("background-color","skyblue");
})
// focusin,focusout -> 버블링을 통해 전파 
//  focus() : 대사 요소로 포커스가 이동시
//  blur() : 대상 요소에서 다른 요소로 포커스가 이동 시
//  focusin() : 대상 요소의 하위 요소 중 입력 요소로 포커스 이동시
// focusout() : 대사 요소의 하위 요소 중 입력 요소에서 외부 요소로 포커스 이동 시

// 키보드 접근성을 고려해서 프론트앤드 코드를 짜자
// 마우스 & 키보드 
$("button").on("mouseout blur",function(){

})


// change(): 선택한 폼 요소의 value값의 변화를 감지 
$("select").on("change",function(){
    $(".result").text($(this).val())
})

// 키보그 이벤트 
// keydown() : 키보드를 눌렀을때 (거의 모든 키를 받아옴)
// keyup() : 키보드를 눌렀다 때는 순간 (기능키,(f1~f12),Alt,CLRl,SHIFT,....등은 받아오지 않음)

// keypress() : 키보드를 눌렀을 떄 

$("#user_input").keydown(function(){
   console.log($(this).val());
})

// 유저가 방향키 입력했을떄 해당 방향키 관련 처리 
function keyEventHandler(e){
    let result = ""
    switch(e.keyCode){
        case 37:
            result = "left"
            break;
        case 38:
            result = "top"
            break;
        case 39:
            result = "Right"        
            break;
        case 40: 
            result = "buttom"    
            break;         
    }
    if (result) $("#user_input").val(result)
} 

$(document).keydown(keyEventHandler);

// 그룹 이벤트 등록 및 삭제 
// on() : 2개 이상의 이벤트를 등록.  사용 방식에 따라 이벤트를 등록한 다음
//  동적으로 생성되거나 복제한 요소에도 이벤트가 적용                                                                                                                     

// bind() : 2개 이상의 이벤트를 등록

// delegate() : 선택한 요소의 하위 요소에 이벤트를 등록!
// 사용 방식에 따라 이벤트를 등록한 이후에
// 동적으로 생성되거나, 복제한 요소에도 이벤트가 적용

// one() : 1개 이사으이 이벤트를 등록
// 지정한 이벤트 1번 발생 시 자동 해재

// of() : on() 메서드로 등록한 이벤트를 제서
// unbund() : bind() 메서드로 등록한 이벤트롤 제거
// undelegate() :  delegate() 메서드로 등록한 이벤트를 제거
var id = document.querySelector('#id');
var pw1 = document.querySelector('#pswd1');
var pwMsg = document.querySelector('#alertTxt');
var pwImg1 = document.querySelector('#pswd1_img1');

var error=document.querySelectorAll('.error_next_box');
console.log(error)

/* id.addEventListener('focusout',function(){
    checkId();
}) */

id.addEventListener('focusout',checkId);

function checkId(){
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    // console.log(id.value)
    //.test()메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true또는 false로 반환합니다.
    //정규식.test(검사할 문자)
    console.log(idPattern.test(id.value));
    if(id.value === ""){
        
        error[0].innerHTML="필수 정보입니다."
        error[0].style.display="block";
    }else if(!idPattern.test(id.value)){
        error[0].innerHTML="5~20자의 영문 소문자, 대문자, 숫자와 특수기호(_),(-)만 사용가능합니다."
        error[0].style.display="block";
    }else{
        error[0].innerHTML="멋진 아이디네요."
        error[0].style.color="#08a600"
        error[0].style.display="block";
    }
}
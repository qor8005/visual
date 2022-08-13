var scrollBody=$('.fix_motion');
var scrollHeight;//스크롤의 높이
var sectionOffsetTop;
var sectionScrollTop;
var scrollRealHeight;//스크롤의 실제움직이는 높이
var winScrollTop;//스크롤바의 높이
var scrollPercent;//스크롤 백분률값
var percent;

function scrollFunc(){
   scrollHeight= scrollBody.height(); //세션2 높이를 가져오겠다

   //offset 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시킵니다.
   //var jb = $( 'h1' ).offset();
   //는 h1 요소의 좌표를 변수 jb에 저장합니다.
   sectionOffsetTop=scrollBody.offset().top; //세션2 탑으로 이동하겠다
   console.log(sectionOffsetTop)
   console.log("탑"+$(window).scrollTop()) //현재 높이 퍼센트 말고 표시
   
   scrollRealHeight = scrollHeight-$(window).height(); //다른 페이지 제외한 진짜 세션2 높이
   sectionScrollTop=$(window).scrollTop() - sectionOffsetTop; //??
   
   scrollPercent=sectionScrollTop/scrollRealHeight; //??
   console.log("일"+ scrollPercent) //보고있는 페이지(section)

   percent = scrollPercent * 100; //현재 퍼센트

   contentIn();
}


//2세션 0~100%일때 동작하는거
function contentIn(){
    var deviceImg = $('.fix_motion .slide .child');
    var imgWidth= deviceImg.width();//100vw
    console.log("%"+ percent);
    if(percent>=0 && percent <25){
        $('.fix_motion .slide .child1').addClass('active');
        slideChage(imgWidth * 0);
    }
    if(percent>=25 && percent <50){
        $('.fix_motion .slide .child2').addClass('active');
        slideChage(imgWidth * 1);
    }
    if(percent>=50 && percent <75){
        $('.fix_motion .slide .child3').addClass('active');
        slideChage(imgWidth * 2);
    }
    if(percent>=75){
        $('.fix_motion .slide .child4').addClass('active');
        slideChage(imgWidth * 3);
    }
    if(percent<0){
        $('.fix_motion .slide .child').addClass('active');
        
    }
}


//??
function slideChage(moveX){
    var slide=$('.fix_motion .slide');
    slide.css({transform:'translateX(' + -moveX + 'px)'})
}


//??
scrollFunc();
$(window).scroll(function(){
    scrollFunc();  
});
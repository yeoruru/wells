'use strict';
  $(document).on('click', 'a[href="#"]', function(e){
      e.preventDefault();
  });
//고정헤더, 사이드바 이벤트
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();
//윈도우창 조절시에 이벤트
$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollTop > 890) { //스크롤탑이 200이상일때부터 헤더고정
        $('nav').addClass('on');
        $('section.pad').css({'margin-top': '80px'});
    } else {
        $('nav').removeClass('on');
        $('section.pad').css({'margin-top': '0px'});
    }
}


//gnb
$(function() {
	$('.gnb > li > a.open').on('mouseenter focus', function(){
		var index = $('.gnb > li > a.open').index($(this));
		$('.gnb .inner').css({'display': 'none'});
		$('.gnb .inner:eq(' + index + ')').slideDown(100);
		$('nav .bg').css({'height': '50px'});
		$('.gnb > li > a').removeClass('on');
		$(this).addClass('on');
	});
	$('nav').on('mouseleave', function() {
		$('.gnb .inner').slideUp(100);
		$('nav .bg').css({'height': '0px'});
		$('.gnb > li > a').removeClass('on');
	});
	$('.gnb > li > a:eq(3)').on('mouseenter focus', function(){
		$('.gnb .inner').css({'display': 'none'});
		$('nav .bg').css({'height': '0px'});
		$('.gnb > li > a').removeClass('on');
	});
});

//위로가기
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});  

//웰스스토리 스크롤이동 이벤트
$(function() {            
    $('.gnb .inner.b a').on('click', function() {
        var index = $('.gnb .inner.b a').index($(this));
		//alert(index);
        var top = $('.story section:eq(' + (index + 0) + ') ').offset().top;
        $('html, body').animate( { scrollTop : (top - 80) }, 400 );  
    });     
});  

/*
//소비자리뷰 리스트
$(window).on('load', function () {
    load('#js-load', '8');
    $(".btnWrap .button").on("click", function () {
        load('#js-load', '8', '.btnWrap');
    })
});
 
function load(id, cnt, btn) {
    var girls_list = id + " .js-load:not(.active)";
    var girls_length = $(girls_list).length;
    var girls_total_cnt;
    if (cnt < girls_length) {
        girls_total_cnt = cnt;
    } else {
        girls_total_cnt = girls_length;
        $('.btnWrap .button').hide()
    }
    $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}

*/



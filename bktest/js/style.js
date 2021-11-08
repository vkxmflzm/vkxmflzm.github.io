$(function(){
  
  $('.menu-btn').click(function() {
    $('.header-box').toggleClass('open-nav');
    $(this).toggleClass("is-active");
  });

  

  // // 레이어팝업
  // function layerPopEvent() {
  // 	$("body").on('click', '.open-pop', function(event){
  // 		event.preventDefault();
  // 		$("body").addClass('pop-wrapper');
  // 		$targetID = $(this).attr('data-target');
  //     $targetID = $('.'+$targetID);
  //     $targetID.addClass('layerPop').addClass('open');
  // 	});

  // 	$('.pop-close,.dim:not(.none)').on('click', function(event){
  // 		event.preventDefault();
  // 		$("body").removeClass('pop-wrapper');
  //     $('.layerPop').removeClass('open');
  // 	});
  // };
  // layerPopEvent();
    
  
  
  // 상단 메뉴 고정
  // var $header = $('.header');
  // var $h2 = $('.task-container');  
  // $(window).scroll(function(){
  //   var $currentSct = $(this).scrollTop();
  //   var $offset = 164;

  //   if($currentSct > $offset){
  //       $header.addClass('sticky');
  //       $h2.addClass('sticky');
  //   }else{
  //       $header.removeClass('sticky');
  //       $h2.removeClass('sticky');
  //   } 
  // });

  //언어선택 off
	$('.linkLang_area').mouseleave(hideLangMenu);//마우스 사용
});


//언어선택 보이기
function showLangMenu(){
	$('body').addClass("displayLangPopup");
	setTimeout(function(){
		$('.linkLang_ul').addClass("langPopupOn");
	},100);
}
//언어선택 닫기
function hideLangMenu(){
	$('.linkLang_ul').removeClass("langPopupOn");
	setTimeout(function(){
		$('body').removeClass("displayLangPopup");
	},500);
}

$('.family-link button').on('click', function(){
    $('.family-link ul').stop().slideToggle(400);
});
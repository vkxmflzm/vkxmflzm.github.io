$(function(){
  //mainMenu
	$("#mainMenuOpen").on("click",function(event){
    event.preventDefault();
    $("#wrap").addClass("menu-on");
    $('#mainMenu .dim').show();
  });

  $("#mainMenu .pop-close, #mainMenu .dim").on("click",function(event){
    event.preventDefault();
    $("#wrap").removeClass("menu-on");
    $('#mainMenu .dim').hide();
  });

  // 레이어팝업
  function layerPopEvent() {
  	$("body").on('click', '.open-pop', function(event){
  		event.preventDefault();
  		$("body").addClass('pop-wrapper');
  		$targetID = $(this).attr('data-target');
      $targetID = $('.'+$targetID);
      $targetID.addClass('layerPop').addClass('open');
  	});

  	$('.pop-close,.dim:not(.none)').on('click', function(event){
  		event.preventDefault();
  		$("body").removeClass('pop-wrapper');
      $('.layerPop').removeClass('open');
  	});
  };
  layerPopEvent();
    
  // 파일 필드
  function fileBox(){
    var fileTarget = $('.filebox .upload-hidden');
    fileTarget.on('change', function(){ // 값이 변경되면
      if(window.FileReader){ // modern browser
        var filename = $(this)[0].files[0].name;
      } else { // old IE
        var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
      }
    // 추출한 파일명 삽입
    $(this).siblings('.upload-name').val(filename);
   });
  }
  fileBox();
  
  // 상단 메뉴 고정
  var $header = $('.header');
  var $h2 = $('.task-container');  
  $(window).scroll(function(){
    var $currentSct = $(this).scrollTop();
    var $offset = 164;

    if($currentSct > $offset){
        $header.addClass('sticky');
        $h2.addClass('sticky');
    }else{
        $header.removeClass('sticky');
        $h2.removeClass('sticky');
    } 
  });

  //레벨0 팝업
  function infoPopup(){
    // 로딩 표시
    showPopup();
    // 로딩 숨기기
    setTimeout(hidePopup());
  }
  function showPopup(){
    $("#infoPopup").show();
  }
  function hidePopup(){
    $("#infoPopup").delay(1000).fadeOut(500,"linear");
  }
  infoPopup();
});
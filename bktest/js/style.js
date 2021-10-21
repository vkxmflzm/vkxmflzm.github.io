$(function(){
  //mainMenu
	$("#mainMenuOpen").on("click",function(){
    $("#wrap").addClass("menu-on");
    $('#mainMenu .dim').show();
  });

  $("#mainMenu .pop-close, #mainMenu .dim").on("click",function(){
    $("#wrap").removeClass("menu-on");
    $('#mainMenu .dim').hide();
  });

  // 레이어팝업
  var layerPop = {
  	open: function( targetID ){
  		targetID = $('.'+targetID);
  		var wrap = targetID.parents('.layerPop');

  		targetID.show();
  		wrap.show();
  	},
  	close: function(){
  		$('.layerPop').hide();
    }
  };

  function layerPopEvent() {
  	$("body").on('click', '.open-pop', function(event){
  		event.preventDefault();
  		$("body").addClass('pop-wrapper');
  		targetID = $(this).attr('data-target');
  		layerPop.open(targetID);
  	});

  	$('.pop-close,.dim:not(.none)').on('click', function(event){
  		event.preventDefault();
  		$("body").removeClass('pop-wrapper');
  		layerPop.close();
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
  // var $mainBack = $('.main-back');
  $(window).scroll(function(){
    var $currentSct = $(this).scrollTop();
    var $offset = 166;

    if($currentSct > $offset){
        $header.addClass('sticky');
        $h2.addClass('sticky');
        // $mainBack.addClass('sticky');
    }else{
        $header.removeClass('sticky');
        $h2.removeClass('sticky');
        // $mainBack.removeClass('sticky');
    }

    
  });
});
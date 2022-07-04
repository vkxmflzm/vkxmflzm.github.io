// $('.linkLang_area').mouseleave(hideLangMenu);
// function showLangMenu(){
// 	$('body').addClass("displayLangPopup");
// 	setTimeout(function(){
// 		$('.linkLang_ul').addClass("langPopupOn");
// 	},100);
// }
// function hideLangMenu(){
// 	$('.linkLang_ul').removeClass("langPopupOn");
// 	setTimeout(function(){
// 		$('body').removeClass("displayLangPopup");
// 	},500);
// }

// const langArea = document.getElementById("langArea");
// const linkLangOpenBtnArea = document.getElementById("linkLangOpenBtnArea");
// const linkLangArea = document.getElementById("linkLangArea");

// linkLangOpenBtnArea.addEventListener("mouseover", () => {
// 	document.body.classList.add("displayLangPopup");
// 	setTimeout(function(){
// 		linkLangArea.classList.add("langPopupOn");
// 	},100);
// });

// linkLangOpenBtnArea.addEventListener("mouseout", () => {
// 	linkLangArea.classList.remove("langPopupOn");
// 	setTimeout(function(){
// 		document.body.classList.remove("displayLangPopup");
// 	},500);
// });

let header = document.querySelector(".header");

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop > 0) {
    header.classList.add("down");
  } else {
    header.classList.remove("down");
  }
};

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// //언어선택 보이기
// function showLangMenu(){
// 	$('body').addClass("displayLangPopup");
// 	setTimeout(function(){
// 		$('.linkLang_ul').addClass("langPopupOn");
// 	},100);
// }
// //언어선택 닫기
// function hideLangMenu(){
// 	$('.linkLang_ul').removeClass("langPopupOn");
// 	setTimeout(function(){
// 		$('body').removeClass("displayLangPopup");
// 	},500);
// }

$('#linkLangOpenBtnArea').click(function() {
  $('#linkLangArea').toggleClass('langPopupOn');
  $(this).toggleClass("is-active");
});

// $('.sub-down').on('click', function() {

//   function slideDown(target) {
//     slideUp();
//     $(target).addClass('on').next().slideDown();
//   }

//   function slideUp() {
//     $('.sub-down').removeClass('on').next().slideUp();
//   }

//   $(this).hasClass('on') ? slideUp() : slideDown(this);

// });
$('#mainMenuOpen').click(function() {
  $("#header").toggleClass("drop");
  $(this).toggleClass("is-active");
});

$(".sub-down").on("click",function(e){
  var $this = $(this);
  if(!$this.hasClass("on")){
      $this.addClass("on");
      $this.children(".service-dropbox").stop(true, true).slideDown(300);
      $this.siblings("li").removeClass("on");
      $this.siblings("li").find(".service-dropbox").stop(true, true).slideUp(300);
  }else{
      $this.removeClass("on");
      $this.children(".service-dropbox").stop(true, true).slideUp(300);
  }
});
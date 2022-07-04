$(function(){
    let style = {
      init: function () {
          this.svgFn();
      },
      svgFn: function () {
          let Path = document.querySelector(".cls-5");
          let length = Path.getTotalLength();
          
          console.log(length);
  
          let text = $('.text');
          let line = $('polyline');
          let lineCircle = $('.line-circle');
          let yellowCircle = $('.yellow-circle');
          let pinkCircle = $('.pink-circle');
          let grayCircle = $('.gray-circle');
          let grayLine = $('.gray-line');
          let centerCircle = $('.center-circle');
  
  
          function lineAnimationFn () {
              lineCircle.eq(0).addClass('on');
              setTimeout(function() {
                  line.addClass('on');
                  yellowCircle.addClass('on');
              }, 200)
              setTimeout(function() {
                  lineCircle.eq(1).addClass('on');
                  centerCircle.eq(0).show(200);
              }, 400)
              setTimeout(function() {
                  lineCircle.eq(2).addClass('on');
                  grayLine.addClass('on');
                  centerCircle.eq(1).show(200);
                  centerCircle.eq(4).show(200);
              }, 600)
              setTimeout(function() {
                  lineCircle.eq(3).addClass('on');
                  grayCircle.addClass('on');
                  text.css({opacity:1,transform:'translateY(0)'});
                  centerCircle.eq(2).show(200);
                  centerCircle.eq(5).show(200);
              }, 800)
              setTimeout(function() {
                  lineCircle.eq(4).addClass('on');
                  pinkCircle.addClass('on');
                  centerCircle.eq(3).show(200);
                  centerCircle.eq(6).show(200);
              }, 1000)
  
            }
            lineAnimationFn();
        }
    }
    style.init();
 
    function clickedBtn(){
      // 로딩 표시
      showLoading();
      // 로딩 숨기기
      setTimeout(hideLoading());
    }
    function showLoading(){
      $("#mainLoading").show();
    }
    function hideLoading(){
      $("#mainLoading").delay(2500).fadeOut(500,"linear");
    }
    clickedBtn();
});
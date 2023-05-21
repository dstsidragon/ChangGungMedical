

$(function () {
////////banner文字特效 /////////////
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1500,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=300'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
////////banner文字特效 END/////////////

////////back to top/////////////
  var $win = $(window);

  var $backToTop = $('.js-back-to-top');

  // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕

  $win.scroll(function () {

    if ($win.scrollTop() > 100) {

      $backToTop.show();

    } else {

      $backToTop.hide();

    }

  });

  // 當用戶點擊按鈕時，通過動畫效果返回頭部

  $backToTop.click(function () {

    $('html, body').animate({ scrollTop: 0 }, 200);

  });
////////back to top END/////////////


//往下滑
  $("#downTo").click(function() {
    $('html, body').animate({
        scrollTop: $("#service").offset().top -400,
    }, 2000);
});

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 200) {
//     if ($(".goTop").hasClass("hide")) {
//       $(".goTop").toggleClass("hide");
//     }
//   } else {
//     $(".goTop").addClass("hide");
//   }
// });

});

scrollToTop();

//回到頂部
function scrollToTop() {
  $(window).scrollTop(0);

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
}

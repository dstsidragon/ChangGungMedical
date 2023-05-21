

$(function () {

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
//監聽選單點擊後 收起畫布
$('.offcanvas .dropdown-item').click(()=>{
  event.preventDefault();
  let top = $('#'+event.target.href.split('#')[1]).offset().top;//取得點擊的毛點座標
  $('html, body').scrollTop(top - 97);
 $('#btn-closeoffcanvas').trigger('click');
});


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

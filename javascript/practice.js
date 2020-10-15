$(function(){
  
  // トップへ戻るボタン
  $('#to-top').click(function(){
    $('html,body').animate(
    {'scrollTop':0},500);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1800){
      $('#to-top').fadeIn(500);
    } else {
      $('#to-top').fadeOut(500);
    }
  });

  // カテゴリスムーススクロール
  $('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // ヘッダーの高さを取得
    let h = $('header').outerHeight();
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする?はifの省略
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得(最後にヘッダー分高さをマイナス)
    let position = $(target).offset().top - h;
    // ターゲットの位置までspeedの速度で移動
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
  // ハンバーガーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
   });

});
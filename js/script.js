
window.onload = function () {
    //        ロード後に実行
    $(".tell-head-sp").addClass("tell-head-common-active");
};


setTimeout(function(){
    $(".tell-head-pc").addClass("tell-head-common-active");
}, 0.5*1000);
//        時間差で実行




$(function () {
    if (window.matchMedia( "(min-width: 768px)" ).matches) {
        var $body = $('.side-inner'),
            $navTypeA = $('.main'),
            navTypeAOffsetTop = $navTypeA.offset().top;


        $(window).on('scroll', function () {
            if($(this).scrollTop() > navTypeAOffsetTop) {
                $body.addClass('is-fixed');
            } else {
                $body.removeClass('is-fixed');
            }
        });
    };
});


$(function () {

    $("#slick-slide-control00").empty();
    $("#slick-slide-control01").empty();
    $("#slick-slide-control02").empty();
    $("#slick-slide-control03").empty();
    $("#slick-slide-control04").empty();
    //        $("button").empty();
});

$('.slide').slick({
    autoplay:true,
    autoplaySpeed:4000,
    speed: 2000, 
    fade: true,
    dots:true, // インジケーターを表示
    prevArrow: false,
    nextArrow: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
    //                ボタンのカスタマイズ記述
    //        prevArrow: '<img src="img/arrow_prev.png" class="slide-arrow prev-arrow">',
    //        nextArrow: '<img src="img/arrow_next.png" class="slide-arrow next-arrow">'
});

//スワイプしたときの停止を防ぐ    
$('.slide').on('swipe', function(event, slick, currentSlide, nextSlide){
    $('.slide').slick('slickPlay');
});


$(window).bind("load", function(){

    // 現在ページのURL取得
    var url   = location.href;

    // 現在ページとマッチしたなら実行
    if(url == "https://tentucare.com/"){
        $(".nav-first").addClass("nav-active");

        document.title="【公式】民間救急搬送・テンツーケア | 全国どこへでも対応！";
        $(function(){
            $("meta[name ='description']").attr('content','テンツーケアは24時間ご対応可能な民間救急搬送サービスです。武蔵野市を中心に都内全域、関東・関西など、日本全国どこへでも搬送が可能です。');
            $("meta[name ='keyword']").attr('content','テンツーケア,介護タクシー,民間救急搬送,介護タクシー 都内,介護タクシー 武蔵野市,介護タクシー 転院 武蔵野市,民間救急搬送 武蔵野市,介護タクシー 全国対応');
        });
    }
    
    if(url == "https://tentucare.com/index.html"){
        $(".nav-first").addClass("nav-active");

        document.title="【公式】民間救急搬送・テンツーケア | 全国どこへでも対応！";
        $(function(){
            $("meta[name ='description']").attr('content','テンツーケアは24時間ご対応可能な民間救急搬送サービスです。武蔵野市を中心に都内全域、関東・関西など、日本全国どこへでも搬送が可能です。');
            $("meta[name ='keyword']").attr('content','テンツーケア,介護タクシー,民間救急搬送,介護タクシー 都内,介護タクシー 武蔵野市,介護タクシー 転院 武蔵野市,民間救急搬送 武蔵野市,介護タクシー 全国対応');
        });
    }

});






//    一部文字があるか否かで判定する別パターン
$(window).bind("load", function(){

    // URLにマッチする文字列が含まれていたら実行

    if(document.URL.match("/instrument.html")) {
        $(".nav-second").addClass("nav-active");

        document.title="【公式】民間救急搬送・テンツーケア 搬送器具について";
        $(function(){
            $("meta[name ='description']").attr('content','テンツーケアの「搬送器具」について記載してあります。予め必要な器具をご確認の上、スタッフまでお申し付けください。');
            $("meta[name ='keyword']").attr('content','テンツーケア,介護タクシー,民間救急搬送,搬送器具,リフト付き車両,正弦波電源,ストレッチャー・リクライニング,車いす,吸引機,酸素・吸引機,防護マスク,法定感染症防護服');

        });
    }

    if(document.URL.match("/process.html")) {
        $(".nav-third").addClass("nav-active");

        document.title="【公式】民間救急搬送・テンツーケア 搬送の流れについて";
        $(function(){
            $("meta[name ='description']").attr('content','テンツーケアの「搬送の流れ」について記載してあります。初めて搬送サービスをご利用さる方や、テンツーケアでのご予約の流れなどもご確認いただけます。');
            $("meta[name ='keyword']").attr('content','テンツーケア,介護タクシー,民間救急搬送,介護タクシー 全国対応,介護タクシー 関東 搬送,搬送の流れ');

        });
    }

    if(document.URL.match("/information.html")) {
        $(".nav-last").addClass("nav-active");

        document.title="【公式】民間救急搬送・テンツーケア お知らせについて";
        $(function(){
            $("meta[name ='description']").attr('content','テンツーケアの「お知らせ」について記載してあります。');
            $("meta[name ='keyword']").attr('content','テンツーケア,介護タクシー,民間救急搬送,テンツーケア お知らせ');
        });
    }

});



$(function(){
    $('.popup-image').magnificPopup({
        type: 'image'
    });
});
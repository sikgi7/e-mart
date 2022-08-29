 // 페이드인 아웃
$(function(){
    $('.inner-fade').innerfade ({
       animationtype:'fade',
       timeout:1900 }); });

 // 레이어팝업
       $(function(){
    $('.layerPopup').on('click',function(){
        $('#popup').fadeIn(); });
    $('.close').on('click',function(){
        $('#popup').fadeOut(); }); });

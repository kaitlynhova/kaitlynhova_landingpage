// A $( document ).ready() block.
$( document ).ready(function() {
  $("#leftbox").hover(function(){
    $("#left-overlay").addClass('left-overlay');
    $(".left-text").css('display', 'none');
    $("#left-overlay-text").removeClass('no-show');
    $('.braintextleft').css('top','-35px');
  });
  $("#leftbox").mouseleave(function(){
    $("#left-overlay").removeClass('left-overlay');
    $(".left-text").css('display', 'block');
    $("#left-overlay-text").addClass('no-show');
    $('.braintextleft').css('top','-40px');
  });
});

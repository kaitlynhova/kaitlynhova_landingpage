// A $( document ).ready() block.
$( document ).ready(function() {
  $("#leftbox").hover(function(){
    $("#left-overlay").addClass('left-overlay');
    $(".left-text").css'opacity', '.5');
    $("#left-overlay-text").removeClass('no-show');
    $('.braintextleft').css('top','-35px');
  });
  $("#leftbox").mouseleave(function(){
    $("#left-overlay").removeClass('left-overlay');
    $(".left-text").css('opacity', '1');
    $("#left-overlay-text").addClass('no-show');
    $('.braintextleft').css('top','-40px');
  });

  $("#rightbox").hover(function(){
    $("#right-overlay").addClass('right-overlay');
    $(".right-text").css('display', 'none');
    $("#right-overlay-text").removeClass('no-show');
    $('.braintext').css('top','-35px');
  });

  $("#rightbox").mouseleave(function(){
    $("#right-overlay").removeClass('right-overlay');
    $(".right-text").css('display', 'block');
    $("#right-overlay-text").addClass('no-show');
    $('.braintext').css('top','-40px');
  });

});

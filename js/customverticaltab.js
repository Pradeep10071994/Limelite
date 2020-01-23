var hidHeight;
var scrollBarHieghts = 40;
var heightOfList = function(){
  var itemsHeight = 0;
  $('.list li').each(function(){
    var itemHeight = $(this).outerHeight();
    itemsHeight+=itemHeight;
  });
  return itemsHeight;
};
var heightOfHidden = function(){
  return (($('.wrapper').outerHeight())-heightOfList()-getTopPosi())-scrollBarHieghts;
};
var getTopPosi = function(){
  return $('.list').position().top;
};
var reAdjust = function(){
  if (($('.wrapper').outerHeight()) < heightOfList()) {
    $('.scroller-down').show();
  }
  else {
    $('.scroller-down').hide();
  }
  if (getTopPosi()<0) {
    $('.scroller-up').show();
  }
  else {
    $('.item').animate({top:"-="+getTopPosi()+"px"},'slow');
    $('.scroller-up').hide();
  }
}
reAdjust();
$(window).on('resize',function(e){  
  reAdjust();
});
$('.scroller-down').click(function() {
  $('.scroller-up').fadeIn('slow');
  $('.scroller-down').fadeOut('slow');
  $('.list').animate({top:"+="+heightOfHidden()+"px"},'slow',function(){
  });
});
$('.scroller-up').click(function() {
  $('.scroller-down').fadeIn('slow');
  $('.scroller-up').fadeOut('slow');
  $('.list').animate({top:"-="+getTopPosi()+"px"},'slow',function(){
  });
});
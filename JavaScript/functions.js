

function parallax(item, offset) {
  item.css({'top' : (Dvars.wScroll/offset)+ 'px' });
};

function buttonClick(button, scroll){
  button.click(function(){
    $(window).scrollTop(scroll.offset().top)
  });
};

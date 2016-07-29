function setVars(){
  vars = {
    parallaxElems : [
      $('#main_logo_container'),
      //$('#scroled_ellems'),
    ]
  }
};

function dynamicVars(){
  Dvars = {
    wHeight : $(window).height(),
    wScroll : $(window).scrollTop(),
  }
};

function parallax(item, offset) {
  item.css({'top' : (Dvars.wScroll/offset)+ 'px' });
};


$(document).ready(function() {
  setVars();

  $(window).scroll(function() {

    dynamicVars();
    parallax(vars.parallaxElems[0],2);
    //parallax(vars.parallaxElems[1],0);

    if(Dvars.wScroll>125){
      $('.navbar-default').addClass('navbar-default_2');
    }else {
      $('.navbar-default').removeClass('navbar-default_2');
    }

  });
});

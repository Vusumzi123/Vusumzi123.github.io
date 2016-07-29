function setVars(){
  vars = {
    parallaxElems : [
      $('#main_logo_container'),
      //$('#scroled_ellems'),
    ],
    navBar : $('.navbar-default')
  }
};

function dynamicVars(){
  Dvars = {
    wHeight : $(window).height(),
    wWidth : $(window).width(),
    wScroll : $(window).scrollTop(),
  }
};

function parallax(item, offset) {
  item.css({'top' : (Dvars.wScroll/offset)+ 'px' });
};


$(document).ready(function() {
  setVars();
  dynamicVars();

  if (Dvars.wWidth>770) {
    vars.navBar.css({'position' : 'fixed'});
    $(window).scroll(function() {

      dynamicVars();
      parallax(vars.parallaxElems[0],2);
      //parallax(vars.parallaxElems[1],0);

      if(Dvars.wScroll>125){
        vars.navBar.addClass('navbar-default_2');
      }else {
        vars.navBar.removeClass('navbar-default_2');
      }
    });
  }else {
    vars.navBar.addClass('navbar-default_2');
  }




});

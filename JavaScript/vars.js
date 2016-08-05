function setVars(){
  vars = {

    navElems :[
      $('#homeNv'),
      $('#UsNv'),
      $('#contactNv'),
    ],

    pageElems : [
      $('#logo_header'),
      $('#article_1'),
      $('#beer_persicope'),
      $('#article_2'),
      $('#footer'),
    ],

    parallaxElems : $('#main_logo_container'),
    navBar : $('.navbar-default'),
    brandBtn : $('#brand_btn'),

  }
};

function dynamicVars(){
  Dvars = {
    wHeight : $(window).height(),
    wWidth : $(window).width(),
    wScroll : $(window).scrollTop(),
  }
};

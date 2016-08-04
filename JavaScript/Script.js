
$(document).ready(function() {

  setVars();
  dynamicVars();

  buttonClick(vars.brandBtn, vars.pageElems[2]);
  buttonClick(vars.navElemes[0], vars.pageElems[0]);
  buttonClick(vars.navElemes[1], vars.pageElems[2]);
  buttonClick(vars.navElemes[2], vars.pageElems[4]);

  if (Dvars.wWidth>770) {
    vars.navBar.css({'position' : 'fixed'});
    $(window).scroll(function() {

      dynamicVars();
      parallax(vars.parallaxElems,2);
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

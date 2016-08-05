

function parallax(item, offset) {
  item.css({'top' : (Dvars.wScroll/offset)+ 'px' });
};

function buttonClick(button, scroll){
  button.click(function(){
    $(window).scrollTop(scroll.offset().top);
  });
};

function responsive(){
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
};

//funcion para cambiar la activación de botones en la barra de
//navegación al desplasar la barra de desplazamiento
function scrolling(){
  if(Dvars.wScroll >= 0 && Dvars.wScroll < vars.pageElems[1].offset().top){
    vars.navElems.forEach(deactivate);
    vars.navElems[0].parent().addClass("active");
  }else if(Dvars.wScroll >= vars.pageElems[1].offset().top && Dvars.wScroll < vars.pageElems[3].offset().top + 700){
    vars.navElems.forEach(deactivate);
    vars.navElems[1].parent().addClass("active");
  }else {
    vars.navElems.forEach(deactivate);
    vars.navElems[2].parent().addClass("active");
  }

};

function deactivate(item, index) {
  item.parent().removeClass("active");
}


$(document).ready(function() {

  setVars();
  dynamicVars();


  buttonClick(vars.brandBtn, vars.pageElems[2]);
  buttonClick(vars.navElems[0], vars.pageElems[0]);
  buttonClick(vars.navElems[1], vars.pageElems[2]);
  buttonClick(vars.navElems[2], vars.pageElems[4]);

  responsive();
  $(window).scroll(scrolling);
});

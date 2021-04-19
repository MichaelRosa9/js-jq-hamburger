$(document).ready(function(){

  var dropdown_menu = $(".hamburger-menu");

  //clicco l'icona del burger menu per mostrare il menu dropdown
  $(".header-right > a").click(function(){
    dropdown_menu.show();
  })
  //clicco l'icona "X" per far sparire il menu dropdown
  $(".hamburger-menu > a").click(function(){
    dropdown_menu.hide();
  })
  
})

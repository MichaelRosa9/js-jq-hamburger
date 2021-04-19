$(document).ready(function(){

  var dropdown_menu = $(".hamburger-menu");
  var menu = menu();


  
  //funzione che attiva e disattiva il menu burger
  function menu(){
    //clicco l'icona del burger menu per mostrare il menu dropdown
    $(".header-right > a").click(function(){
      dropdown_menu.show();
    })
    //clicco l'icona "X" per far sparire il menu dropdown
    $(".hamburger-menu > a").click(function(){
      dropdown_menu.hide();
    })
    
  }
})

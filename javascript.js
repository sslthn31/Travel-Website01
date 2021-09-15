//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
function KlikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}
$(document).ready(function () {
  var width = $(window).width();
  if (width < 600) {
    KlikMenu();
  }
})
// cek lebar
$(window).resize(function(){
var width = $(window).width();
if(width > 599){
menu.css("display","block");
} else{
menu.css("display","none")
}
klikMenu();
});

//scroll effect
$(document).ready(function () {
var scroll_pos = 0;
$(document).scroll(function(){
  scroll_pos = $(this).scrollTop();
  if(scroll_pos > 0){
  $("nav").addClass("white");
  $("nav img.black").show();
  $("nav img.white").hide();
} else {
  $("nav").removeClass("white");
  $("nav img.black").hide();
  $("nav img.white").show();
  }
})
});
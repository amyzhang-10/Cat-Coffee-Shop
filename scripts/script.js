const body = document.body;
const hamburger = document.getElementById("menu_btn");
const nav = document.getElementById("main-navigation");

hamburger.addEventListener("click", function() {
  body.classList.toggle("show");
  nav.classList.add("activated");
});
const mql = window.matchMedia("(max-width: 800px)");

mql.addListener(removeTransition);

function removeTransition(e) {
  if (e.matches) {
    body.classList.remove("show");
    nav.classList.remove("activated");
  }
}

hamburger.addEventListener("mousedown", function(e) {
  e.preventDefault();
});
const back_to_top_btn=document.getElementById("back-to-top-button");

window.onscroll=function(){
  if(window.pageYOffset>100){
      back_to_top_btn.classList.add("show");
  }else{
    back_to_top_btn.classList.remove("show");
  }
}
back_to_top_btn.addEventListener('click',scrollToTop);

function scrollToTop(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}

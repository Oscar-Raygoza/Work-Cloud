window.onscroll = function() { scrollMenuFixed() };

scrollMenuFixed();
function scrollMenuFixed() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    document.getElementById("menu-fixed").className = "menu-fixed blur";
         else 
    document.getElementById("menu-fixed").className = "menu-fixed";

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    document.getElementById("banner-img-index").className = "banner-img animateScrollMove";
         else 
    document.getElementById("banner-img-index").className = "banner-img";

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) 
    document.getElementById("banner-img-index-down").className = "banner-img animateScrollMove";
         else 
    document.getElementById("banner-img-index-down").className = "banner-img";

}


var toggleMenu = document.getElementById("toggle-menu");

        toggleMenu.addEventListener('click',()=>{
          toggleMenu.classList.toggle('nav-is-visible');
});









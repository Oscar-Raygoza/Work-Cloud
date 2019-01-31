window.onscroll = function() { scrollMenuFixed() };

scrollMenuFixed();
function scrollMenuFixed() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    document.getElementById("menu-fixed").className = "menu-fixed blur";
         else 
    document.getElementById("menu-fixed").className = "menu-fixed";
    
}
window.onscroll = function() { scrollMenuFixed() };

scrollMenuFixed();
function scrollMenuFixed() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    document.getElementById("menu-fixed").className = "menu-fixed blur";
         else 
    document.getElementById("menu-fixed").className = "menu-fixed";

    /*
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    document.getElementById("banner-img-index").className = "banner-img animateScrollMove";
         else 
    document.getElementById("banner-img-index").className = "banner-img";

    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) 
    document.getElementById("banner-img-index-down").className = "banner-img animateScrollMove";
         else 
    document.getElementById("banner-img-index-down").className = "banner-img";
     */
}


var toggleMenu = document.getElementById("toggle-menu");

        toggleMenu.addEventListener('click',()=>{
          toggleMenu.classList.toggle('nav-is-visible');
});




/* Cuenta regresiva a la finalizacion del proyecto */
  
  let tiempo = {}; 
  let clock = new Date("2019-12-7 9:00:00 PM");
  let intervalo = window.setInterval(mostrar_hora, 1); 
  let i = 0; 
  
  function mostrar_hora(){
    var now = new Date();  
    
    tiempo.meses = document.getElementById('meses');
    tiempo.meses.innerHTML = clock.getMonth() - now.getMonth() + '<spam id="data-date"> MM</spam>'; 

    tiempo.dias = document.getElementById('dias');
    tiempo.dias.innerHTML = clock.getDay() - now.getDay() + '<spam id="data-date"> DD</spam>';; 
     
    tiempo.horas = document.getElementById('hora');
    tiempo.horas.innerHTML = clock.getHours() - now.getHours()+ '<spam id="data-date">HH</spam>';; 
    
    tiempo.minuto = document.getElementById('minuto');
    tiempo.minuto.innerHTML = clock.getMinutes()+60 - now.getMinutes() + '<spam id="data-date">MIN</spam>';;

    tiempo.segundos = document.getElementById('segundo')
    tiempo.segundos.innerHTML = "0" + clock.getSeconds()+60 - now.getSeconds() + '<spam id="data-date">SS</spam>';;
  
  }





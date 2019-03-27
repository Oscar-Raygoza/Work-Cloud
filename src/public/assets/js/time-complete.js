
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

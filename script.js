const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');


let currentDate = new Date(); // Me quedo con la fecha actual
let birthday = new Date(2025, 3, 19, 1, 1)
let goalDate = new Date(birthday); // Año, mes (enero==0), día, hora, minutos¡
let days, hours, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000); //Llama al contador cada segundo, es decir, ejecuta funcion cada segundo
countdown();

function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.floor(totalSeconds) <= 0) {
    clearInterval(countdownInterval);
    //showProduct();
    document.body.classList.add("birthday");
    document.querySelector("#birth").style.display = "none";
    document.querySelector(".countdown-container").style.display = "none";
    document.querySelector("#happyBirthday").style.display = "inline"
    secondsElement.innerHTML = 0;
    return;
  }

  //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
  //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
  //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

  // Ajusto las estaciones del año
  var currentMonth = currentDate.getMonth();
  var season = "";
  if (currentMonth >= 8 && currentMonth <= 10) {
      season = "autumn";
    } else if (currentMonth >= 11 || currentMonth <= 1) {
      season = "winter";
    } else if (currentMonth >= 2 && currentMonth <= 4) {
      season = "spring";
    } else {
      season = "summer";
  }

// Agregar la clase correspondiente al body de la página
document.body.classList.add(season);

};

function showProduct() {
    
  felicidades.classList.remove('nocolor-img');
  //Paramos el intervalo que se estaba ejecutando
  
}



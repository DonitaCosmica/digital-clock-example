
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const secondsDot = document.querySelector('.secDot');
const minuteDot = document.querySelector('.minDot');
const hourDot = document.querySelector('.hrDot');

const hoursNumber = document.getElementById('hours');
const minutesNumber = document.getElementById('minutes');
const secondsNumber = document.getElementById('seconds');
const horario = document.getElementById('dia-noche');

setInterval(() => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let zonaHoraria = hours >= 12 ? "PM" : "AM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = (hours < 10) ? "0" + hours : hours.toString();
    minutes = (minutes < 10) ? "0" + minutes : minutes.toString();
    seconds = (seconds < 10) ? "0" + seconds : seconds.toString();

    hoursNumber.innerText = hours;
    minutesNumber.innerText = minutes;
    secondsNumber.innerText = seconds;
    horario.innerText = zonaHoraria;

    hh.style.strokeDashoffset = 510 - (510 * hours) / 12;
    mm.style.strokeDashoffset = 630 - (630 * minutes) / 60;
    ss.style.strokeDashoffset = 760 - (760 * seconds) / 60;

    secondsDot.style.transform = `rotateZ(${seconds * 6}deg)`
    minuteDot.style.transform = `rotateZ(${minutes * 6}deg)`
    hourDot.style.transform = `rotateZ(${hours * 30}deg)`
});
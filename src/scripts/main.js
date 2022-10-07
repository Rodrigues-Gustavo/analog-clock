import { digitalElement, secondsElement, minutesElement, hoursElement, weekElement } from './variables.js'
const html = document.querySelector('html');
const checkbox =  document.querySelector('#switch');

function toggle() {
    checkbox.addEventListener('change',() => {
        html.classList.toggle('light-mode')
    });
}

toggle();

const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
];

const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
];

const updateClock = () => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let date = now.getDate()
    let day = now.getDay();
    let month = now.getMonth();


    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    weekElement.innerHTML =  `${days[day]}, ${date} ${months[month]}`;

    let secondDeg = ((360 / 60) * second) - 90;
    let minuteDeg = ((360 / 60) * minute) - 90;
    let hourDeg = ((360 / 12) * hour) + ((30/60) * minute) - 90;

    secondsElement.style.transform = `rotate(${secondDeg}deg)`;
    minutesElement.style.transform = `rotate(${minuteDeg}deg)`;
    hoursElement.style.transform = `rotate(${hourDeg}deg)`;
}

const fixZero = time => time < 10 ? `0${time}` : time;


setInterval(updateClock, 1000);
updateClock();
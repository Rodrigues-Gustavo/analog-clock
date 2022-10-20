import { secondsElement, minutesElement, hoursElement, weekElement, digitalElement } from './variables.js'
const html = document.querySelector('html');
const checkbox =  document.querySelector('#switch');

function toggle() {
    checkbox.addEventListener('change',() => {
        html.classList.toggle('light-mode')
    });
};

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

const setRotation = (element,rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const updateClock = () => {
    const currentDate = new Date();
    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;
    const digitalSeconds = currentDate.getSeconds();
    const digitalMinutes = currentDate.getMinutes();
    const digitalHours = currentDate.getHours();
    const date = currentDate.getDate()
    const day = currentDate.getDay();
    const month = currentDate.getMonth();

    setRotation(secondsElement, secondsPercentage);
    setRotation(minutesElement, minutesPercentage);
    setRotation(hoursElement, hoursPercentage);

    digitalElement.innerHTML = `${fixZero(digitalHours)}:${fixZero(digitalMinutes)}:${fixZero(digitalSeconds)}`;
    weekElement.innerHTML =  `${days[day]}, ${date} ${months[month]}`;
};

const fixZero = time => time < 10 ? `0${time}` : time;

updateClock();
setInterval(updateClock, 1000);
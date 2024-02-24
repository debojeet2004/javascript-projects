let [hour, minutes, second, milseconds] = [0,0,0,0];

const start = document.querySelector(`#start`);
const pause = document.querySelector(`#pause`);
const reset = document.querySelector(`#reset`);

var hrs = document.querySelector(`#hrs`);
var min = document.querySelector(`#min`);
var sec = document.querySelector(`#sec`);
var milsec = document.querySelector(`#milsec`);

let interval;

function updateTimer() {
    milseconds++;
    if (milseconds === 100) {
        milseconds = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hour++;
    }
    updateDisplay();
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
});

pause.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    [hour, minutes, second, milseconds] = [0, 0, 0, 0];
    updateDisplay();
});


function updateDisplay() {
    hrs.textContent = hour.toString().padStart(2, '0');
    min.textContent = minutes.toString().padStart(2, '0');
    sec.textContent = second.toString().padStart(2, '0');
    milsec.textContent = milseconds.toString().padStart(3, '0');
}

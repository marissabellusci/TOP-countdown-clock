let countdown;
const timerDisplay = document.querySelector('.display__time-left');

const buttons = document.querySelectorAll('.timer__button');
const form = document.querySelector('form');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    if(secondsLeft < 0){
        clearInterval(countdown);
        return;
    }
    displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
    timerDisplay.textContent = display; 
    console.log(minutes, remainderSeconds);
}

function startTimer(){
    clearInterval(countdown);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click',function(e){
    seconds = e.target.dataset.time;
    startTimer(e);
}));

form.addEventListener('submit', function(e){
    console.log('ok');
    e.preventDefault();
    seconds = this.minutes.value * 60;
    startTimer();
});

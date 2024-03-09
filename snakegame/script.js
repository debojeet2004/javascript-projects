const playground =  document.querySelector('.playground');
const Score =  document.querySelector('#score');
const Highscore =  document.querySelector('#Highscore');
console.log(Score, Highscore)

let foodX ,foodY;
let snakeX=5, snakeY=10;
let snakeBody=[]
let velX = 0, velY = 0;
let GameOver = false;
let setIntervalID;
let score = 0;

//getting highscore from localstorage
let highscore = localStorage.getItem('Highscore') || 0;
Highscore.innerHTML = `Highscore: ${highscore}`;


const changefoodposition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    if (e.key === "ArrowUp" && velY != 1) {
        velX = 0;
        velY = -1;
    }else if(e.key==="ArrowDown" && velY != -1){
        velX = 0;
        velY = 1;
    }else if(e.key==="ArrowLeft" && velX != 1){
        velX = -1;
        velY = 0;
    }else if(e.key==="ArrowRight" && velX != -1){
        velX = 1;
        velY = 0;
    }
    initGame();
}

const handelGameOver = ()=>{
    clearInterval(setIntervalID);
    alert("Game Over!");
    location.reload();
}

const initGame = () => {
    if(GameOver) return handelGameOver();
    let html = `<div class="food" style="grid-area:${foodY}/${foodX} "></div>`;
    snakeX += velX;
    snakeY += velY;
    // Check if snake eats food
    if (snakeX === foodX && snakeY === foodY) {
        changefoodposition();
        snakeBody.unshift([foodX, foodY]); // Add food to the front of the snakeBody array
        score++; // Score increases by 1
        Score.innerHTML = `Score: ${score}`;

        highscore = score >= highscore ? score : highscore;
        localStorage.setItem('Highscore',highscore),
        Highscore.innerHTML = `Highscore: ${highscore}`;
    }
    // Update snake's body positions
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = [...snakeBody[i - 1]];
    }
    snakeBody[0] = [snakeX, snakeY];
    // Check if snake hits its own body
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            GameOver = true;
            return;
        }
    }
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        GameOver = true;
        return;
    }
    // Render snake's body
    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="snake" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]} "></div>`;
    }
    playground.innerHTML = html;
};

changefoodposition();
setIntervalID = setInterval(initGame, 120);

document.addEventListener('keydown', changeDirection);

const choices = [ "rock", "papers", "scissors" ];

const  playerDisplay = document.querySelector('#playerDisplay')
const  computerDisplay = document.querySelector('#computerDisplay')
const  resultDisplay = document.querySelector('#resultDisplay')


console.log(playerDisplay)
console.log(computerDisplay)
console.log(resultDisplay)


function PlayGames(playerchoice){

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice)
    let result = '';

    if(playerchoice === computerChoice){
        result = 'It is a tie'
      }
      else {
        switch(playerchoice){
          case "rock":
          result = (computerChoice === "scissors") ? "You Win" : "You Lose"
          break;
          case "paper":
          result = (computerChoice === "rock") ? "You Win" : "You Lose"
          break;
          case "scissors":
          result = (computerChoice === "paper") ? "You Win" : "You Lose"
          break;
        }
      }

      playerDisplay.innerText = `${playerchoice}`
      computerDisplay.innerText = `${computerChoice}`
      resultDisplay.innerText = ` ${result}`

      

}
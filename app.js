let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerSelection = null;
let computerSelection = null;

rockButton.addEventListener("click", function(){
    playerSelection = "rock"
    computerChoice()
    gamePlay(playerSelection, computerSelection)
    
})

paperButton.addEventListener("click", function(){
    playerSelection = "paper"
    computerChoice()
    gamePlay(playerSelection, computerSelection)
})

scissorsButton.addEventListener("click", function(){
    playerSelection = "scissors"
    computerChoice()
    gamePlay(playerSelection, computerSelection)
})

let selections = ["rock", "paper", "scissors"]
let winningPairs= [
    {
        winner: "rock",
        loser: "scissors"
    },
    {
        winner: "paper",
        loser: "rock"
    },
    {
        winner: "scissors",
        loser: "paper"
    }
]
  
function computerChoice(){
  computerSelection  = selections[Math.floor(Math.random() * selections.length)]

} 

function gamePlay(player, computer){
    for (let pair of winningPairs) {
        if ((player === pair.winner) && (computer === pair.loser)) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            playerWins++
            document.getElementById("playerWins").innerHTML = playerWins;
            break
        } else if (player === computer){
            console.log(`It's a tie! ${computerSelection} and ${playerSelection}`)
            tieGames++ 
            document.getElementById("ties").textContent = tieGames;
            break
        } else if ((player === pair.loser) && (computer === pair.winner)) {
            console.log(`You lost! ${computerSelection} beats ${playerSelection}`)
            computerWins++
            document.getElementById("computerWins").textContent = computerWins;
            break
        }
    }
}

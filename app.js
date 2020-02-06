let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerSelection = null;
let computerSelection = null;

rockButton.addEventListener("click", function(){
    playerSelection = "Rock"
    computerChoice()
    gamePlay(playerSelection, computerSelection)
    
})

paperButton.addEventListener("click", function(){
    playerSelection = "Paper"
    computerChoice()
    gamePlay(playerSelection, computerSelection)
})

scissorsButton.addEventListener("click", function(){
    playerSelection = "Scissors"
    computerChoice()
    gamePlay(playerSelection, computerSelection)
})

let selections = ["Rock", "Paper", "Scissors"]
let winningPairs= [
    {
        winner: "Rock",
        loser: "Scissors"
    },
    {
        winner: "Paper",
        loser: "Rock"
    },
    {
        winner: "Scissors",
        loser: "Paper"
    }
]
  
function computerChoice(){
  computerSelection  = selections[Math.floor(Math.random() * selections.length)]

} 

function gamePlay(player, computer){
    for (let pair of winningPairs) {
        if ((player === pair.winner) && (computer === pair.loser)) {
            document.getElementById("gameDisplay").textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            playerWins++
            document.getElementById("playerWins").textContent = playerWins;
            break
        } else if (player === computer){
            document.getElementById("gameDisplay").textContent = `It's a tie! You both chose ${playerSelection}.`
            tieGames++ 
            document.getElementById("ties").textContent = tieGames;
            break
        } else if ((player === pair.loser) && (computer === pair.winner)) {
            document.getElementById("gameDisplay").textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
            computerWins++
            document.getElementById("computerWins").textContent = computerWins;
            break
        }
    }
}

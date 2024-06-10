function getComputerChoice(){
  let probability = Math.random();
  if(probability < 1/3) {
    return "Rock"
  } else if (probability < 2/3 && probability >= 1/3) {
    return "Paper"
  } else {
    return "Scissors"
  }
}


function playRound(humanChoice, computerChoice){
      if(humanScore == 5 || cmpScore == 5 ) {
      return "Ended";
    }
    webCompChoice.innerHTML = `Computer Choice: ${computerChoice}`

    if(humanChoice == "Rock" && computerChoice == "Scissors"){
      alert("You've won! Rock beats Scissors")
      humanScore += 1;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") { 
      alert("You've won! Scissors beats Paper")
      humanScore += 1;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
      alert("You've won! Paper beats Rock")
      humanScore += 1;
    } else if (humanChoice == computerChoice) { 
      alert("It's a draw")
    } else {
      alert(`You've lost, ${computerChoice} beats ${humanChoice}`)
      cmpScore += 1 ;
    }
}
// ----------------------------------- // 

const webHumanScore = document.getElementById("humanScore");
const webCompScore = document.getElementById("compScore");
const webCompChoice = document.getElementById("compChoice");
const winner = document.getElementById("winner"); 

let cmpScore = 0;
let humanScore = 0;

function Update() { 
  webCompScore.innerHTML = `Computer Score: ${cmpScore}`;
  webHumanScore.innerHTML= `Your Score: ${humanScore}`;
  if (humanScore == 5 ){
    winner.innerHTML = "You're the winner!";
  } else if(cmpScore == 5) { 
    winner.innerHTML = "You've Lost";
  }
}



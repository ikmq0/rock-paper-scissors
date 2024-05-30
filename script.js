function getComputerChoice(){
  let probability = Math.random();
  console.log(probability)
  if(probability < 1/3) {
    return "rock"
  } else if (probability < 2/3 && probability >= 1/3) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice(){
  const choice = prompt("1: Rock \n2: Paper \n3: Scissor \n Pick a number");
  if( choice == 1) {
    return "rock"
  } else if ( choice == 2) {
    return "paper"
  } else if (choice == 3) { 
    return "scissors"
  } else { 
    alert("Check your input")
    return "no choice"
  }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors"){
      alert("You've won! Rock beats scissors")
      return 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") { 
      alert("You've won! Scissors beats paper")
      return 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      alert("You've won! Paper beats rock")
      return 1;
    } else if (humanChoice == computerChoice) { 
      alert("It's a draw")
      return null;
    } else {
      alert(`You've lost, ${computerChoice} beats ${humanChoice}`)
      return 0;
    }
}




function playGame(){
  var humanScore = 0;
  var computerScore = 0;

  for(let i = 0;i < 5;i++) { 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const round = playRound(humanSelection,computerSelection)
    if ( round == 0 ) { 
      computerScore +=1;
    } else if (round == 1) { 
      humanScore += 1;
    } else {
      computerScore +=1;
      humanScore += 1;
    }
  }

  if (humanScore > computerScore) {
    alert("You've won in the game!! ")
  } else if ( computerScore > humanScore) { 
    alert("You've lost in the game :(")
  } else {
    alert("No one won, it's a draw ")
  }
}

playGame()

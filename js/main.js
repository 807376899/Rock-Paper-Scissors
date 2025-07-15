//get a random int
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//transform int to Rock Paper Scissors
function getChoice(num){
    switch(num){
        case 0: return "rock";
        case 1:return "paper";
        case 2:return "scissors"
    }
}

function getComputerChoice(){
    let choice=getRandomInt(3);
    return getChoice(choice);
}

function getHumanChoice(){
    let userInput = prompt("input your choice：");
    userInput=userInput.toLowerCase();
    return userInput;
}
function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        console.log("Tie!")
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"||humanChoice=="scissors"&&computerChoice=="paper"||humanChoice=="paper"&&computerChoice=="rock"){
        humanScore++;
        console.log("You win! "+humanChoice+" beats "+ computerChoice);
    }
    else{
        computerScore++;
        console.log("You lose! "+computerChoice+" beats "+ humanChoice);
    }

}
function playGame(){

    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`human score: ${humanScore}; computer score: ${computerScore}`)
    }
    if(humanScore>computerScore){
        console.log("You win this round!");
    }
    else if(humanScore<computerScore){
        console.log("You lose this round!");
    }
    else{
        console.log("This round is tie!");
    }
}
//console.log("human choice:"+getHumanChoice());
//console.log("computer choice:"+getComputerChoice());
let humanScore=0;
let computerScore=0;
playGame();



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
    rounds++;
    if(humanChoice==computerChoice){
        showRoundResult("It's a tie!", humanChoice, computerChoice);
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"||humanChoice=="scissors"&&computerChoice=="paper"||humanChoice=="paper"&&computerChoice=="rock"){
        humanScore++;
        showRoundResult("You win!", humanChoice, computerChoice);

    }
    else{
        computerScore++;
        showRoundResult("You lose!", humanChoice, computerChoice);
    }

}
function showRoundResult(result,humanChoice, computerChoice){
    const roundsDiv = document.querySelector('.rounds');
    const resultDiv = document.createElement('div');
    const humanScoreSpan = document.querySelector('#human-score');
    const computerScoreSpan = document.querySelector('#computer-score');

    resultDiv.className = 'result';
    resultDiv.textContent = `Round ${rounds}: ${result} - You chose ${humanChoice}, Computer chose ${computerChoice}. 
    Your score: ${humanScore}, Computer score: ${computerScore}`;
    roundsDiv.insertBefore(resultDiv, roundsDiv.firstChild);

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}
function resetGame(){
    const roundsDiv = document.querySelectorAll('.result');
    const finalResultDiv = document.querySelector('.final-result');
    roundsDiv.forEach(div => {
        div.remove();
    }); 
    finalResultDiv.textContent = '';
    humanScore=0;
    computerScore=0;
    rounds=0;
}
let humanScore=0;
let computerScore=0;
let rounds=0;
let reset=false;
let buttons=document.querySelector('.buttons');
buttons.addEventListener('click',(event)=>{
    let target=event.target;
    if(reset){
        resetGame();
        reset=false;
    }
    const computerSelection = getComputerChoice();
    const humanSelection=target.id;
    playRound(humanSelection, computerSelection);
    if(humanScore===5||computerScore===5){
        const finalResult= document.querySelector('.final-result');
        const promptText = document.createElement('p');
        
        if(humanScore===5){
            finalResult.textContent = `Game Over! \nYou won the game after ${rounds} rounds.
            click the button to play again.`;
            reset=true;        
        }else{
            finalResult.textContent = `Game Over! \nYou lost the game after ${rounds} rounds.`;
            promptText.textContent = "Click any button to play again.";
            finalResult.appendChild(promptText);
            reset=true;
        }
        
    }
})




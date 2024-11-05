window.onload = function(){

    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;


    let optionBtns = document.querySelector(".optionBtns");

    optionBtns.addEventListener("click", (event) => {
            let target = event.target;
    
            switch(target.innerText) {
                case "Rock":
                    if(roundCount <= 4){
                    playRound("rock");
                    roundCount++;}
                    break;
                case "Paper":
                    if(roundCount <= 4){
                    playRound("paper");
                    roundCount++;}
                    break;
                case "Scissors":
                    if(roundCount <= 4){
                    playRound("scissors");
                    roundCount++;}
                    break;
            }
        });

        

        let showResult = document.createElement("p");
        document.getElementById("results").appendChild(showResult);

        let showScore = document.createElement("p");
        document.getElementById("results").appendChild(showScore);

        let showOverallScore = document.createElement("p");
        document.getElementById("results").appendChild(showOverallScore);
    
    function playRound (humanInput){       

        let computerChoice = getComputerChoice();
        let humanChoice = humanInput;
        let result = "";        
    

        function getComputerChoice () {
            const computerChoice = Math.random();
            if (computerChoice <= 1/3) return "rock";
            else if (computerChoice > 1/3 && computerChoice <= 2/3) return "paper";
            else if (computerChoice > 2/3 && computerChoice <= 1) return "scissors";
         };


     if (humanChoice === "rock" && computerChoice === "rock") result = "Tie! Both chose Rock!";
     else if (humanChoice === "rock" && computerChoice === "paper") result = "You lose! Paper beats Rock!";
     else if (humanChoice === "rock" && computerChoice === "scissors") result = "You win! Rock beats Scissors!";
     
     else if (humanChoice === "paper" && computerChoice === "paper") result = "Tie! Both chose Paper!";
     else if (humanChoice === "paper" && computerChoice === "scissors") result = "You lose! Scissors beats Paper!";
     else if (humanChoice === "paper" && computerChoice === "rock") result = "You win! Paper beats Rock!";
     
     else if (humanChoice === "scissors" && computerChoice === "scissors") result = "Tie! Both chose Scissors!";
     else if (humanChoice === "scissors" && computerChoice === "rock") result = "You lose! Rock beats Scissors!";
     else if (humanChoice === "scissors" && computerChoice === "paper") result = "You win! Scissors beats Paper!";
      
     if (result === "You lose! Paper beats Rock!" || result === "You lose! Scissors beats Paper!" || result === "You lose! Rock beats Scissors!") computerScore++;
     else if (result === "You win! Rock beats Scissors!" || result === "You win! Paper beats Rock!" || result === "You win! Scissors beats Paper!") humanScore++;


    let message = `Computer chose: ${computerChoice}!` + " " + `You chose: ${humanChoice}!`
    let scoreMessage = `you: ${humanScore}` + " " + `computer: ${computerScore}`

        showResult.innerHTML = result + " " + message;
    
        showScore.innerHTML = scoreMessage;


     let overallScore = "";
if (humanScore === computerScore) overallScore = `Tie! You won: ${humanScore}, Computer won: ${computerScore}`
if (humanScore > computerScore) overallScore = `You Win! You won: ${humanScore}, Computer won: ${computerScore}`
if (humanScore < computerScore) overallScore = `You Lose! You won: ${humanScore}, Computer won: ${computerScore}`

if (roundCount === 4){
    showOverallScore.innerHTML = overallScore;
}


}

     

};










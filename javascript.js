
/*
function rock () {
    const humanChoice = "Rock";
    let computerChoice = getComputerChoice();
   
    function getComputerChoice () {
        const computerChoice1 = Math.random();
        let computerChoice = ""
        if (computerChoice1 <= 1/3) return "Rock";
        else if (computerChoice1 > 1/3 && computerChoice1 <= 2/3) return "Paper";
        else if (computerChoice1 > 2/3) return "Scissors";
    }

    if (computerChoice === "Rock") return "Computer chose Rock! Tie!";
    else if (computerChoice === "Paper") return "Computer chose Paper! Lose!";
    else if (computerChoice === "Scissors") return "Computer chose Scissors! Win!";
}

function paper () {
    const humanChoice = "Paper";
    let computerChoice = getComputerChoice();

    function getComputerChoice () {
        const computerChoice1 = Math.random();
        let computerChoice = ""
        if (computerChoice1 <= 1/3) return "Rock";
        else if (computerChoice1 > 1/3 && computerChoice1 <= 2/3) return "Paper";
        else if (computerChoice1 > 2/3) return "Scissors";
    }

    if (computerChoice === "Rock") return "Computer chose Rock! Win!";
    else if (computerChoice === "Paper") return "Computer chose Paper! Tie!";
    else if (computerChoice === "Scissors") return "Computer chose Scissors! Lose!";
}

function scissors () {
    const humanChoice = "Scissors";
    let computerChoice = getComputerChoice();

    function getComputerChoice () {
        const computerChoice1 = Math.random();
        let computerChoice = ""
        if (computerChoice1 <= 1/3) return "Rock";
        else if (computerChoice1 > 1/3 && computerChoice1 <= 2/3) return "Paper";
        else if (computerChoice1 > 2/3) return "Scissors";
    }

    if (computerChoice === "Rock") return "Computer chose Rock! Lose!";
    else if (computerChoice === "Paper") return "Computer chose Paper! Win!";
    else if (computerChoice === "Scissors") return "Computer chose Scissors! Tie!";
}
*/

/*
user picks an option (R/P/S)
computer randomly generates an option
compare the options and produce result
display result
*/

playGame()

 function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    
    function playRound (){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let result = "";

        function getComputerChoice () {
            const computerChoice = Math.random();
            if (computerChoice <= 1/3) return "rock";
            else if (computerChoice > 1/3 && computerChoice <= 2/3) return "paper";
            else if (computerChoice > 2/3 && computerChoice <= 1) return "scissors";
         };

         function getHumanChoice () {
            const humanChoice = prompt("Choose your weapon! Rock, paper, or scissors?").toLowerCase();
            return humanChoice    
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

     console.log(result),
     console.log(`Computer Chose: ${computerChoice}!`),
     console.log(`You Chose: ${humanChoice}!`),
     console.log(`you: ${humanScore}`),
     console.log(`computer: ${computerScore}`);

     }

let overallScore = "";
if (humanScore === computerScore) overallScore = `Tie! You won: ${humanScore}, Computer won: ${computerScore}`
if (humanScore > computerScore) overallScore = `You Win! You won: ${humanScore}, Computer won: ${computerScoreScore}`
if (humanScore < computerScore) overallScore = `You Lose! You won: ${humanScore}, Computer won: ${computerScore}`

alert(overallScore)
     

};









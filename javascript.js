/*
user picks an option (R/P/S)
computer randomly generates an option
compare the options and produce result
display result
*/


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



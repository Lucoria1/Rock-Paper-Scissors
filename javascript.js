/*
user picks an option (R/P/S)
computer randomly generates an option
compare the options and produce result
display result
*/


function getComputerChoice () {
    const computerChoice = Math.random();
    if (computerChoice <= 1/3) return "Rock";
    else if (computerChoice > 1/3 && computerChoice <= 2/3) return "Paper";
    else if (computerChoice > 2/3) return "Scissors";
}

let humanChoice = "";

function rock () {
    return "Rock";
}

function paper () {
    return "Paper";
}

function scissors () {
    return "Scissors"
}



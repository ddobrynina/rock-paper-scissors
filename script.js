function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);
    let choice = "";
    if(number === 0)
    {
        choice = "rock";
    }
    else if(number === 1)
    {
        choice = "paper";
    }
    else if(number === 2)
    {
        choice = "scissors";
    }

    return choice
}

function playRound(computerSelection, playerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    let win = 0;
    if(computerSelection===playerSelection)
    {
        alert("You Tie!");
        win = 0.5;
    }
    else if(computerSelection === "rock" && playerSelection === "scissors")
    {
        alert("You lose! Rock beats scissors!");
    }
    else if(computerSelection === "scissors" && playerSelection ==="paper")
    {
        alert("You lose! Scissors beats paper!");
    }
    else if(computerSelection === "paper" && playerSelection === "rock")
    {
         alert("You lose! Paper beats rock!");
    }
    else if(computerSelection === "scissors" && playerSelection === "rock")
    {
        alert("You win! Rock beats scissors!");
        win = 1;
    }
    else if(computerSelection === "rock" && playerSelection === "paper")
    {
        alert("You win! Paper beats rock!");
        win = 1;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors")
    {
        alert("You win! Scissors beats paper!");
        win = 1;
    }
    return win
}

function game()
{
    let winCount = 0;
    
    for (let i = 0; i < 5; i++) 
    {
        let playerSelection =  window.prompt("Rock, Paper, Scissors?");
        let computerSelection = getComputerChoice();
        let win = playRound(computerSelection,playerSelection);
        winCount+=win;
        console.log(winCount);
    } 
    if(winCount<2.5)
    {
        alert("You lost!");
    }
    else if(winCount === 2.5)
    {
        alert("You tied!");
    }
    else if(winCount>2.5)
    {
        alert("You won!");
    }
}
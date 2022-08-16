

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
    let win = 0;
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');

    if(computerSelection===playerSelection)
    {
        
        content.textContent = "You Tie!";
        win = 0.5;
    }
    else if(computerSelection === "rock" && playerSelection === "scissors")
    {
        content.textContent = "You lose! Rock beats scissors!";
    }
    else if(computerSelection === "scissors" && playerSelection ==="paper")
    {
        content.textContent = "You lose! Scissors beats paper!";
    }
    else if(computerSelection === "paper" && playerSelection === "rock")
    {
        content.textContent = "You lose! Paper beats rock!";
    }
    else if(computerSelection === "scissors" && playerSelection === "rock")
    {
        content.textContent = "You win! Rock beats scissors!";
        win = 1;
    }
    else if(computerSelection === "rock" && playerSelection === "paper")
    {
        content.textContent = "You win! Paper beats rock!";
        win = 1;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors")
    {
        content.textContent = "You win! Scissors beats paper!";
        win = 1;
    }
    container.appendChild(content);
    return win
}

function game(winCount)
{ 
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');

    if(winCount%5 <2.5)
    {
        content.textContent = "You lost!";
    }
    else if(winCount%5 === 2.5)
    {
        content.textContent = "You tied!";
    }
    else if(winCount%5 >2.5)
    {
        content.textContent = "You won!";
    }
    container.appendChild(content);
}


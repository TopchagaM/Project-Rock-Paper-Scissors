let roundResoult = document.createElement('div');

let winPlayer = 0;
let winPC = 0;
let p;

//setting random pc choice -------------------------------------------------
function getComputerChoice()
{
    const pcChoice = ["Rock", "Paper", "Scissors"];
    let randChoice = Math.floor(Math.random()*3);
    console.log(pcChoice[randChoice])
    return pcChoice[randChoice];
}

// checking who won --------------------------------------------------------
function playRound(choice)
{
    getComputerChoice();
    c = getComputerChoice();
    c = c.toLocaleLowerCase();
    p = choice;
    p = p.toLocaleLowerCase();

    console.log(c + " 1");

    if (p == c)
    {
        roundResoult.textContent = "Draw!"
        results.appendChild(roundResoult)

    }

    else if (p == 'rock' && c == 'scissors' || p == 'scissors' && c == 'paper' || p == 'paper' && c == 'rock')
    {
        roundResoult.textContent = "You WIN!"
        results.appendChild(roundResoult)
        winPlayer++;
        console.log(winPlayer + ' WM')

    }

    else
    {
        roundResoult.textContent = "You LOSE!"
        results.appendChild(roundResoult)
        winPC++;
        console.log(winPC + ' WP')
    }

    document.getElementById("playerScore").innerHTML = winPlayer;
    document.getElementById("PCScore").innerHTML = winPC;
    
    if (winPlayer >= 5)
    {
        alert("You won the game!!!")
        winPlayer = 0;
        winPC = 0;
    }

    if (winPC >= 5)
    {
        alert("You lost the game!!!")
        winPlayer = 0;
        winPC = 0;
    }

}
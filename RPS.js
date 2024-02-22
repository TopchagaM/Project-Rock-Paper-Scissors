//setting random pc choice -------------------------------------------------
function getComputerChoice(){
    const pcChoice = ["Rock", "Paper", "Scissors"];
    let randChoice = Math.floor(Math.random()*3);
    console.log(pcChoice[randChoice])
    return pcChoice[randChoice];
}


// checking who won --------------------------------------------------------
function playRound(p, c){
    p = p.toLocaleLowerCase();
    c = c.toLocaleLowerCase();

    if (p == 'rock' && c == 'rock' || p == 'paper' && c == 'paper' || p == 'scissors' && rock == 'scissors')
        return "Draw!";

    else if (p == 'rock' && c == 'scissors' || p == 'scissors' && c == 'paper' || p == 'paper' && c == 'scissors')
        return 'You win!';

    // if we only put else it would count typos from players
    else if (p == 'rock' && c == 'paper' || p == 'scissors' && c == 'rock' || p == 'paper' && c == 'scissors')
        return "You loose!"
}

function game(){
    for(let i = 0; i < 5; i++){
        let p = prompt("Enter your choice ");
        let c = getComputerChoice();
        alert("Computer choice " + c);
        console.log(playRound(p, c))
    }
}

game();


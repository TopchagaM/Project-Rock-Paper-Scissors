function getComputerChoice(){
    let compChoice = Math.floor(Math.random(1) * 3);

    if (compChoice == 1){
        return 'rock';
    }
    else if (compChoice == 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }


}


let playerSelection = prompt("Choose your style");
const CompterSelection = getComputerChoice();

alert("Computer choose " + getComputerChoice());

function playRound(playerSelection, CompterSelection){
    playerSelection  = playerSelection.toLocaleLowerCase();
    let p = playerSelection;
    let c = CompterSelection;

    if (p === c){
        return "Draw";
    }

    else if(p==='rock' && c==='paper'){
        return "You Loose";
    }

    else if(p==='rock' && c==='scissors'){
        return "You Win";
    }
    
    else if(p==='paper' && c==='rock'){
        return "You Win";
    }

    else if(p==='paper' && c==='sicssors'){
        return "You Loose";
    }

    else if(p==='sicssors' && c==='paper'){
        return "You Win";
    }

    else if(p==='sicssors' && c==='rock'){
        return "You Loose";
    }
}


console.log(playRound(playerSelection, CompterSelection));
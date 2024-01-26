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


let p = prompt("Enter choice ");
let c = getComputerChoice();

alert("Computer choose " + getComputerChoice());

function playRound(p, c){
    p  = p.toLocaleLowerCase();
    console.log(c);



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

function game(){

    p = prompt("Enter choice");
    c = getComputerChoice();
    alert("Computer choice " + c);
    console.log(playRound(p, c));

    p = prompt("Enter choice");
    c = getComputerChoice();
    alert("Computer choice " + c);
    console.log(playRound(p, c));
    
    p = prompt("Enter choice");
    c = getComputerChoice();
    alert("Computer choice " + c);
    console.log(playRound(p, c));
    
    p = prompt("Enter choice");
    c = getComputerChoice();
    alert("Computer choice " + c);
    console.log(playRound(p, c));
    
    p = prompt("Enter choice");
    c = getComputerChoice();
    alert("Computer choice " + c);
    console.log(playRound(p, c));  

}

game();
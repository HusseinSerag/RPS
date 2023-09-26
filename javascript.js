function getComputerChoice(){
    const choice = ['rock' , 'paper' , 'scissors'];
    
    return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,ComputerSelection){
    const playerSelectionCmp = playerSelection.toLowerCase();
    
    if (playerSelectionCmp === 'rock'){
        if(ComputerSelection === 'rock'){
            return 'draw!'
        }
    }
}





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
        if(ComputerSelection === 'scissors'){
            return 'You won!, Rock crushes scissors!'
        }
        else{
            return 'you lost! , paper slips rock!'
        }
    }
    
    else{
        return 'wrong input'
    }
}




function game(){
    let numberOfGames;
    do

    {
        numberOfGames = prompt('How many rounds?')
        try{
            numberOfGames = Number(numberOfGames)
        }
        catch{
            
        }
    }
    while(!Number.isInteger(numberOfGames) || numberOfGames === null || numberOfGames === undefined || numberOfGames === 0)

    
    for(let counter = 0 ; counter < numberOfGames ; counter++){

        console.log(playRound(prompt('Your choice'),getComputerChoice()))
    }
}

game()
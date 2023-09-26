function getComputerChoice(){
    const choice = ['rock' , 'paper' , 'scissors'];
    
    return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,ComputerSelection){
    const playerSelectionCmp = playerSelection.toLowerCase();
    
    
    if (playerSelectionCmp === 'rock'){

        return rockChoice(ComputerSelection)
    }

    if(playerSelection === 'paper'){
        return paperChoice(ComputerSelection)
    }
    else{
        return 'wrong input'
    }
}

function rockChoice(ComputerSelection){
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

function paperChoice(ComputerSelection){
    if(ComputerSelection === 'paper'){
        return 'draw';
    }
    else if(ComputerSelection === 'rock'){
        return 'You won! , paper slips rock!';
    }
    else{
        return 'you lost! , scissors cut paper!'
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
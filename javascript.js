function getComputerChoice(){
    const choice = ['rock' , 'paper' , 'scissors'];
    
    return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,ComputerSelection){
    const playerSelectionCmp = playerSelection.toLowerCase();
    
    console.log(`Your choice :${playerSelection} , Computer Choice : ${ComputerSelection} `)
    
    if (playerSelectionCmp === 'rock'){

        return rockChoice(ComputerSelection)
    }

    else if(playerSelectionCmp === 'paper'){
        return paperChoice(ComputerSelection)
    }

    else if(playerSelectionCmp === 'scissors'){
        return scissorsChoice(ComputerSelection)
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

function scissorsChoice(ComputerSelection){
    if(ComputerSelection === 'scissors'){
        console.log('draw!')

    }
    else if(ComputerSelection === 'paper'){
        console.log('You won! , Scissors cuts paper')
    }
    else{
        console.log('You lost! , rock crushed scissors')
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
        console.group(`Round ${counter+1}`)
        console.log(playRound(prompt('Your choice'),getComputerChoice()))
        console.groupEnd(`Round ${counter+1}`)
    }
    
}

game()
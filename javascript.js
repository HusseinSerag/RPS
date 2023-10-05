function getComputerChoice(){
    const choice = ['rock' , 'paper' , 'scissors'];
    
    return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,ComputerSelection){
    const playerSelectionCmp = playerSelection.toLowerCase();
    
    choices.textContent = `Your choice : ${playerSelection} , Computer Choice : ${ComputerSelection} `
    
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
        return ['draw!',1]
    }
    if(ComputerSelection === 'scissors'){
        return ['You won!, Rock crushes scissors!',2]
    }
    else{
        return ['you lost! , paper slips rock!',0]
    }
}

function paperChoice(ComputerSelection){
    if(ComputerSelection === 'paper'){
        return ['draw!',1]
    }
    else if(ComputerSelection === 'rock'){
        return ['You won! , paper slips rock!',2]
    }
    else{
        return ['you lost! , scissors cut paper!',0]
    }
}

function scissorsChoice(ComputerSelection){
    if(ComputerSelection === 'scissors'){
        return ['draw!',1]

    }
    else if(ComputerSelection === 'paper'){
        return ['You won! , Scissors cuts paper',2]
    }
    else{
        return ['You lost! , rock crushed scissors',0]
    }
}

function gameover(Winner){
    buttons.childNodes.forEach(btn =>{
        btn.disabled = true
    })
    if(Winner == 'P'){
        choices.textContent = 'You won';
    }
    else{
        choices.textContent = 'Computer won'
    }
}


function game(PlayersChoice){
   
        let arr =  playRound(PlayersChoice,getComputerChoice());
        text.textContent = arr[0];
        let score = arr[1]
        if(score === 2){
            let playerScore = Number(player.textContent)
            player.textContent = playerScore+1
            if(player.textContent == '5'){
                gameover('P')
            }
        }
        else if(score == 0){
            let compScore = Number(computer.textContent)
            computer.textContent = compScore+1
            if(computer.textContent == '5'){
                gameover('C')
            }
        }
        
    
    
}



const buttons = document.querySelector('.game');
const text = document.querySelector('.text');
const choices = document.querySelector('.choices')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')

buttons.addEventListener('click', e =>{
    e.target.id === 'rock' ? game('rock') : e.target.id === 'paper' ? game('paper') : e.target.id === 'scissors' ? game('scissors') : '';
    
});


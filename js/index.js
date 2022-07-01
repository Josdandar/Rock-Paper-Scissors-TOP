let humanSelection = prompt("Please select rock, paper or scissors");


function computerPlay(selection){
    let toSelect = ["Rock", "Paper", "Scissors"]
    let computerSelection
    computerSelection = (toSelect[Math.floor(Math.random()*toSelect.length)]) 
    console.log(computerSelection)
    return computerSelection
}


function roundPlay(){
    
}


computerPlay()


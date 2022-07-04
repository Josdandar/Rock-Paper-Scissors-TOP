let humanSelection = prompt("Please select rock, paper or scissors");


function computerPlay(){
    let toSelect = ["Rock", "Paper", "Scissors"]
    let computerSelection
    computerSelection = (toSelect[Math.floor(Math.random()*toSelect.length)]) 
    console.log(computerSelection)
    return computerSelection
}


function roundPlay(human, computer){
    let humanCapitalized
    humanCapitalized = human.charAt(0).toUpperCase() + human.slice(1).toLowerCase()
    console.log(humanCapitalized)
    if(humanCapitalized == "Rock" && computer == "Rock"){
        console.log("it is a draw")
    }
    else if(humanCapitalized == "Rock" && computer == "Paper"){
        console.log("Paper wins")
    }else if(humanCapitalized == "Rock" && computer == "Scissors"){
        console.log("Rock wins")
    }
}


computerPlay()
roundPlay(humanSelection, computerPlay)


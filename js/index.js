let humanSelection = prompt("Please select rock, paper or scissors");
let computerResult 

function computerPlay(){
    let toSelect = ["Rock", "Paper", "Scissors"]
    let computerSelection
    computerSelection = (toSelect[Math.floor(Math.random()*toSelect.length)]) 
    console.log(computerSelection)
    computerResult = computerSelection
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
    }else if(humanCapitalized == "Scissors" && computer == "Scissors"){
        console.log("Its a draw")
    }else if(humanCapitalized == "Scissors" && computer == "Paper"){
        console.log("Scissors wins")
    }else if(humanCapitalized == "Scissors" && computer == "Rock"){
        console.log("Rock wins")
    }else if(humanCapitalized == "Paper" && computer == "Paper"){
        console.log("Its a draw")
    }else if(humanCapitalized == "Paper" && computer == "Rock"){
        console.log("Paper wins")
    }else if(humanCapitalized == "Paper" && computer == "Scissors"){
        console.log("Scissors wins")
    }else{
        console.warn("Choose a valid option");
    }
}


computerPlay()
roundPlay(humanSelection, computerResult)


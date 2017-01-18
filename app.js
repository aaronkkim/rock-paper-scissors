
// var paper = 3 
//function play(playerChoice) { 
//var comChoice = rock


var reason= document.getElementById('reason')
var result= document.getElementById('result')
var comChoice = Math.random()
console.log(comChoice)
if (comChoice <= .33) {
    comChoice = 'rock'
}
else if (.33 < comChoice <= .66) {
    comChoice = 'scissors'
}
else {
    comChoice = 'paper'
}
function reset(){
    
    reason.innerHTML=''
    result.innerHTML=''
}
function play(playerChoice) {
    if (playerChoice === "rock") {
        if (comChoice === "scissors") {
            result.innerHTML="<p>You Win!</p>"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else if (comChoice=== "paper") {
            result.innerHTML="<p>You Lose!</p>"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else {
            result.innerHTML="It's a Tie!"
            reason.innerHTML='Your Opponent played '+comChoice
        }

    }
    if (playerChoice === "paper") {
        if (comChoice === "rock") {
            result.innerHTML="You Win!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else if (comChoice === "scissors") {
            result.innerHTML="You Lose!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else {
            result.innerHTML="It's a Tie!"
            reason.innerHTML='Your Opponent played '+comChoice
        }

    }
    if (playerChoice === "scissors") {
        if (comChoice === "paper") {
            result.innerHTML="You Win!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else if (comChoice === "rock") {
            result.innerHTML="You Lose!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else {
            result.innerHTML="It's a Tie!"
            reason.innerHTML='Your Opponent played '+comChoice 
        }

    }
}



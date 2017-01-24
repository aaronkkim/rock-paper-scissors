
// var paper = 3 
//function play(playerChoice) { 
//var comChoice = rock


var reason = document.getElementById('reason')
var result = document.getElementById('result')

function getComChoice() {
    var comChoice = Math.random()
    if (comChoice <= .33) {
        comChoice = 'rock'
    }
    else if (comChoice <= .66) {
        comChoice = 'scissors'
    }
    else {
        comChoice = 'paper'
    }
    return comChoice
}
function reset() {

    reason.innerHTML = ''
    result.innerHTML = ''
}
function play(playerChoice) {
    var comChoice = getComChoice()
    if (playerChoice === 'rock') {
        if (comChoice === 'scissors') {
            result.innerHTML = "<p>You Win!</p>"
            reason.innerHTML = '<p>Your Opponent played ' + comChoice +'</p>'
        }
        else if (comChoice === 'paper') {
            result.innerHTML = '<p>You Lose!</p>'
            reason.innerHTML = '<p>Your Opponent played ' + comChoice + '</p>'
        }
        else {
            result.innerHTML = "<p>It's a Tie!</p>"
            reason.innerHTML = '<p>Your Opponent played ' + comChoice + '</p>'
        }

    }
    if (playerChoice === 'paper') {
        if (comChoice === 'rock') {
            result.innerHTML = '<p>You Win!</p>'
            reason.innerHTML = '<p>Your Opponent played ' + comChoice + '</p>'
        }
        else if (comChoice === 'scissors') {
            result.innerHTML = '<p>You Lose!</p>'
            reason.innerHTML = '<p>Your Opponent played ' + comChoice+ '</p>'
        }
        else {
            result.innerHTML = "<p>It's a Tie!</p>"
            reason.innerHTML = '<p>Your Opponent played ' + comChoice+ '</p>'
        }

    }
    if (playerChoice === 'scissors') {
        if (comChoice === 'paper') {
            result.innerHTML = '<p>You Win!</p>'
            reason.innerHTML = '<p>Your Opponent played ' + comChoice+'</p>'
        }
        else if (comChoice === 'rock') {
            result.innerHTML = '<p>You Lose!</p>'
            reason.innerHTML = '<p>Your Opponent played ' + comChoice+'</p>'
        }
        else {
            result.innerHTML = "<p>It's a Tie!</p>"
            reason.innerHTML = 'Your Opponent played ' + comChoice+'</p>'
        }

    }
}



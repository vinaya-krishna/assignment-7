"use strict";

var options = ["Rock", "Paper", "Scissor"];
var outputs = ["You Win", "You Lose", "Its a draw"];
var strategy = ["Rock destroys Scissor ", "Paper covers Rock ", "Scissor cuts paper "];

function getComputersChoice() {
    var randomNumber = (Math.floor(Math.random() * 10)) % 3;
    return options[randomNumber];
}


function playGame(playersChoice) {
    var computersChoice = getComputersChoice();
    var promptString;
    switch(playersChoice){
        case "Rock":
            if(computersChoice === "Scissor"){
                promptString = strategy[0] + outputs[0];

            } else if(computersChoice === "Paper"){
                promptString = strategy[1] + outputs[1];

            } else {
                promptString = "Both Selected Rock " + outputs[2];
            }
            break;
        case "Scissor":
            if(computersChoice === "Rock"){
                promptString = strategy[0] + outputs[1];
            } else if(computersChoice === "Paper"){
                promptString = strategy[2] + outputs[0];
            } else {
                promptString = "Both players selected Scissor " + outputs[2];
            }
            break;
        case "Paper":
            if(computersChoice === "Rock"){
                promptString = strategy[1] + outputs[0];
            } else if(computersChoice === "Scissor"){
                promptString = strategy[2] + outputs[1];
            } else {
                promptString = "Both players selected Paper " + outputs[2];
            }
            break;
    }
    window.alert(promptString);

}

var finish = false;
var playAgain;
while(!finish){
    var playersChoiceNum = window.prompt("Enter your choice number(1 for Rock, 2 for Paper,3 for Scissor)");
    playersChoiceNum = parseInt(playersChoiceNum, 10);
    if(playersChoiceNum <= 3 && playersChoiceNum>= 0){
        playGame(options[playersChoiceNum]);
    }
    else{
        window.alert("Bad choise");
    }
    playAgain = window.prompt("Do you want to play again (y/n)");
    if(playAgain != "y"){
        window.alert("Good bye");
        finish = true;
    }
}
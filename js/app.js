/*
    FILE: app.js
    DATE: 2022-06-21
    AUTHOR: Jordan Lindo
*/

"use strict";
// Global variables
var globalName;

/**
 * Initialize all the code when the page loads.
 */
function initialize(){
    //console.log('in initialize()');
    globalName = getName();
}

/**
 * Prompts the user for a name
 * @returns {string} name
 */
function getName(){
    let name = "";
    name = prompt("Please enter your name.");
    if(name != undefined && name.l){
        alert('Welcome '+ name + '!');
    }
    let element = document.getElementById("footer");
    element.innerHTML = "Welcome "+name;
    return name;
}

/**
 * asks a set of questions
 */
function askQuestions(){
    let score = 0;
    score += askFirstSet(score);
    score += numberGuessingQuestion(score);
    score += multipleAnswersQuestion(score);
    
    alert("Your final score was " + score + ".");
    alert('That was fun ' + globalName + ". Let's play again sometime.");

}

/**
 * Ask a set of hard coded [question, answer, specialized response]
 * with a prompt to the user increment score for correct responses
 * alert the user to the status of their answer with specialized response
 * 
 * @returns {number} score updated
 */
function askFirstSet(){
    let score = 0;
    let questions = [
        [
            "Do you think my favorite color is blue?",
            "no",
            "Blue is not my favorite color."
        ],
        [
            "Do you think I like black coffee?",
            "yes",
            "I do like coffee black."
        ],
        [
            "Do you think I like nature walks?",
            "no",
            "I do not care for nature walks."
        ],
        [
            "Do you think I enjoy baking bread?",
            "yes",
            "I do enjoy baking bread."
        ],
        [
            "Do you think I have any pets?",
            "no",
            "I do not have any pets."
        ]
    ];

    let promptMessage = getPrompt();
    for(let i = 0; i < questions.length; i++){
        let answer = prompt(questions[i][0]+" "+promptMessage).toLowerCase();
        let output = "You are incorrect. ";
        if(checkAnswer(questions[i][1], answer)){
            output = "You are correct. ";
            score++;
            if(i === 0){
                let element = document.getElementById("theBody");
                element.classList.add("first-answer-correct");
            }
        }
        alert(output+questions[i][2]);
        //console.log(output+questions[i][2]);
    }

    return score;
}

/**
 * Generates a random number between one and ten inclusive
 * and asks the user to guess a number in that range
 * 
 * @returns {number} score updated
 */
function numberGuessingQuestion(){

    //console.log("Guess a number");
    let score = 0;
    let selectedNum = Math.floor((Math.random()*10)+1);
    let guesses = 4;
    while(guesses > 0){
        let userGuess = prompt("Guess my number between 1 and 10. "
        + guesses+ " tries left.")

        if(userGuess == selectedNum){
            alert("That is correct!");
            score++;
            break;
        } else if(userGuess > selectedNum){
            alert("too high");
        } else if(userGuess < selectedNum){
            alert("too low");
        }

        guesses--;
        if(guesses === 0){
            alert("The correct answer is "+selectedNum);
        }
    }
    return score;
}

/**
 * 
 * @returns {number} the score updated
 */
function multipleAnswersQuestion(){
    //console.log("Guess a snack");
    let score = 0;
    let possibleAnswers = ["popcorn","reese's"];
    let guesses = 6;
    while(guesses > 0){
        let snackGuess = prompt("Guess my theater snacks.").toLowerCase();
        let done = false;
        for(let i = 0; i < possibleAnswers.length; i++){
            if(snackGuess == possibleAnswers[i]){
                alert("That is one of my snacks!");
                score++;
                done = true;
                break;
            }
        }
        if(done){
            break;
        } else {
            alert("That isn't one of my snacks.");
        }
        guesses--;
        if(guesses === 0){
            let resultString = "";
            for(let i = 0; i < possibleAnswers.length; i++){
                if(i > 0){
                    resultString += ", ";
                }
                resultString += possibleAnswers[i];
            }
            alert(resultString);
        }
    }
    return score;
}

/**
 * get the standard message prompt
 *
 * @returns {string} standard message prompt
 */
function getPrompt(){
    let promptMessage = "Yes or No";

    return promptMessage;
}

/**
 * Compares user input to set value, some variation allowed y or yes, n or no
 * 
 * @param {string} correctAnswer a hard coded answer
 * @param {string} userResponse the answer provided by the user
 * @returns {boolean} result of the comparison
 */
function checkAnswer(correctAnswer, userResponse){
    let result = false;
    if(correctAnswer === "yes"){
        if(userResponse === "yes" || userResponse === "y"){
            result = true;
        }
    } else {
        if(userResponse === "no" || userResponse === "n"){
            result = true;
        }
    }
    return result;

}

/*
    FILE: app.js
    DATE: 2022-06-21
    AUTHOR: Jordan Lindo
*/

"use strict";

var globalName;

/**
 * Initialize all the code when the page loads.
 */
function initalize(){
    console.log('in initializ()');
    globalName = getName();
}

function getName(){
    let name = prompt("Please enter your name.");
    alert('Welcome '+ name + '!');
    let element = document.getElementById("footer");
    element.innerHTML = "Welcome "+name;
    return name;
}

function askQuestions(){
    let firstAnswer = prompt("Do you think my favorite color is blue?");
    if(firstAnswer.toLowerCase() === "no" || firstAnswer.toLowerCase() === "n"){
        let element = document.getElementById("theBody");
        element.classList.add("first-answer-correct");
        alert("You are correct.");
        console.log("You are correct. Blue is not my favorite color.");
    } else {
        alert("You are incorrect.");
        console.log("You are incorrect. Blue is not my favorite color.")
    }
    let secondAnswer = prompt("Do you think I like black coffee?");
    if(secondAnswer.toLowerCase() === "yes" 
    || secondAnswer.toLowerCase() === "y"){
        alert("You are correct.");
        console.log("You are correct. I do like coffee black.");
    } else {
        alert("You are incorrect.");
        console.log("You are incorrect. I do like coffee black.");
    }
    let thirdAnswer = prompt("Do you think I like nature walks?");
    if(thirdAnswer.toLowerCase() === "no" 
    || thirdAnswer.toLowerCase() === "n"){
        alert("You are correct.");
        console.log("You are correct. I do not care for nature walks.");
    } else {
        alert("You are incorrect.");
        console.log("You are incorrect. I do not care for nature walks.")
    }
    let fourthAnswer = prompt("Do you think I enjoy baking bread?");
    if(fourthAnswer.toLowerCase() === "yes" || fourthAnswer.toLowerCase() === "y"){
        alert("You are correct.");
        console.log("You are correct. I do enjoy baking bread.");
    } else {
        alert("You are incorrect.");
        console.log("You are incorrect. I do enjoy baking bread.");
    }
    let fifthAnswer = prompt("Do you think I have any pets?");
    if(fifthAnswer.toLowerCase() === "no" || fifthAnswer.toLowerCase() === "n"){
        alert("You are correct.");
        console.log("You are correct. I do not have any pets.");
    } else {
        alert("You are incorrect.");
        console.log("You are incorrect. I do not have any pets.");
    }

    alert('That was fun ' + globalName + ". Let's play again sometime.");

}
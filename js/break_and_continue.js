"use strict";
/* 2.
Prompt the user for an odd number between 1 and 50.
Use a loop and a break statement to continue prompting
the user if they enter invalid input.
//  */
function userRequest() {
    var userInput = parseInt(prompt("Please enter and odd number between 1 and 50."));
    for (var x = userInput; x ; x = userRequest()) {
        if (x < 1 || x > 50) {
            alert(x + " is not within the parameters requested, please enter an Odd number between 1 and 50.");
        } else if (x % 2 === 0) {
            alert(x + " is even, please enter an Odd number between 1 and 50.");
        } else {
            alert("Thank you, " + x + " is odd");
            break;
        }
    }
}
console.log(userRequest());
/*
var usersNumber = Number(prompt("Give me an odd number between 1 and 50"));
function isNumberInRange(num){
    return num >= 1 && num <= 50;
}
function isNumberEven(num){
    return num % 2 === 0;
}
while (true){
    if (!isNumberEven(usersNumber) && isNumberInRange(usersNumber)){
       break;
    }
    usersNumber = Number(prompt("Give me an odd number between 1 and 50"));
}
console.log("Number to skip is: " + usersNumber);
*/


/* 3.
Use a loop and the continue statement to output all the odd numbers between 1 and 50,
except for the number the user entered.
 */
function exceptUserInput (){
    var usersNumber = parseInt(prompt("Please enter an odd number between 1 and 50"))
    console.log("Number to skip is: " + usersNumber);
    for (var x=1; x<=50; x++) {
        if (x === usersNumber) {
            console.log("This is where the next number goes but you chose this number, therefore; it's no longer there!")
            continue;
        } else if (x % 2 === 0) {
            continue;
        } else {
            console.log("Here is an odd number: " + x);
        }
        }
    }
    console.log(exceptUserInput());
/*
for (var i = 1; i <= 49; i += 2){

    if (i === usersNumber){
        console.log("Yikes! Skipping number: " + usersNumber);
        continue
    }
    console.log("Here is an odd number: " + i);
}
 */
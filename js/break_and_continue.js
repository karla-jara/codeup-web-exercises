"use strict";
/* 1.
Prompt the user for an odd number between 1 and 50.
Use a loop and a break statement to continue prompting
the user if they enter invalid input.
 */
function userRequest() {
    var userInput = parseInt(prompt("Please enter and odd number between 1 and 50."));

    for (var x = userInput; x <= 50; x = userRequest()) {
        if (x === 0) {
            alert(x + " is even, please enter an Odd number between 1 and 50.");
        } else if (x % 2 === 0) {
            alert(x + " is even, please enter an Odd number between 1 and 50.");
        } else {
            alert("Thank you, " + x + " is odd");
            break;
        }
    }
}
console.log(userRequest());



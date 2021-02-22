"use strict";

/*
1.2 Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

For example, showMultiplicationTable(7) should output:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
 */

// first statement is for declaring iteration variable
// Iteration is just a single loop
// second statement is for testing if we want to run the loop again
// if the second statement is true the loop will run again
// third statement is for incrementing the iteration variable
// basically this just makes an i variable go up or down at the end of the loop

function showMultiplicationTable(number) {
    for (var multipleThru10 = 1; multipleThru10 <= 10; multipleThru10++)

    {
        console.log(number + " x " + multipleThru10 + " = " + (number * multipleThru10));
    }
    }

    for (var numberToMultiply = 1; numberToMultiply <= 1; numberToMultiply++) {
        showMultiplicationTable(9)
    }


    /*
    1.3 Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


    123 is odd
    80 is even
    24 is even
    199 is odd

     */
    function getRandomNumber() {
        return Math.floor(Math.random() * (200 - 20 + 1) + 20);
    }
    for (var i = 1 ; i <= 10 ; i++)
        var randomNumber = getRandomNumber();

    if (randomNumber % 2 === 1) {
        console.log(randomNumber + " is Odd.");

    } else {
        console.log(randomNumber + " is Even.");
    }

/*
1.4 Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999
 */
for (var outerLoop = 1; outerLoop <= 9; outerLoop++) {
    var output = "";
    for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++) {
        output = output + outerLoop.toString();
    }
    console.log(output);
}
/*
1.5 Create a for loop that uses console.log to create the output shown below.

100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
*/

for (var i = 100; i >= 5; i = i - 5) {
//                        could also use i-= 5 for the last statement
    console.log(i);
}
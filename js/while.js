"use strict";
/*
2. Create a while loop that uses console.log() to create the output shown below.
    2
    4
    8
    16
    32
    64
    128
    256
    512
    1024
    2048
    4096
    8192
    16384
    32768
    65536
 */
function xTwo (){
    var i = 1
    while (i < 65536) {
        i = i * 2;
        console.log(i);
    }
}
console.log(xTwo())

/* Do While Loops
 1.   An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100
representing the amount of cones to sell before you start your loop.
Inside of the loop your code should generate another random number between 1 and 5,
simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person.
This is a way get the random numbers for this exercise.
*/
    function coneSales () {
        var conesToSell = Math.floor((Math.random() * 5) + 5);
        alert("You must sell " + conesToSell + " cones before you can go home.");
        do {
            var conesBought = Math.floor((Math.random() * 5) + 1);
            conesToSell = conesToSell - conesBought;
            alert("You sold " + conesBought + " and have " + conesToSell + " cone(s) left to sell");

            if (conesBought > conesToSell && conesToSell > 0) {
                alert("Sorry, we cannot sell " + conesBought + " we only have " + conesToSell + " left.");

                alert("Yay! I sold all my cones!");
                break;
            }

        }   while (conesToSell > conesBought && conesToSell > 0) {
            }
    }
    console.log(coneSales())

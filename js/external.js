/*This is the first HTML page that is created using an external source
It will contain different exercises that will contain a comment before the code is presented
 */

//The first part of the exercise contains a welcome message
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

// This code prompts the user for their favorite color
var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!');

/* This code asks the user to enter the number of days they will rent specified movies
It will then calculate the total cost for renting the movies based on entered data
 */
var lm = parseInt(prompt("How many days would you like to rent the Little Mermaid?"));
var bb = parseInt(prompt("How many days would you like to rent Brother Bear?"));
var h = parseInt(prompt("How many days would you like to rent Hercules?"));

var price = 3;

lm *= price;
bb *= price;
h *= price;

alert("Your total rental price is " + (lm + bb + h));

// This code will provide the total pay expected determined by the hours worked entered by the user
var google = parseInt(prompt("How many hours did you work for Google?"));
var amazon = parseInt(prompt("How many hours did you work for Amazon?"));
var facebook = parseInt(prompt("How many hours did you work for Facebook?"));

google *= 400;
amazon *= 380;
facebook *= 350;

var totalPay = alert("Your total pay is " + (google + amazon + facebook));

// This code determines whether the user may enroll in a class based on yes or no questions answered
var classFull = confirm("Is this class full?");
var scheduleConflict = confirm("Is there a conflict with your schedule?");
if ((classFull === false) && (scheduleConflict === false)) {
    alert("Great news, you can enroll!");
}
else {
    alert("Sorry you may not enroll at this time :(");
}

// The code below determines whether the user may use an offer based on questions answered
var purchasedItems = confirm("Will you purchase more than two items?");
var isPremiumMember = confirm("Are you a premium member?");
var offerValid = confirm("Is offer valid?")

if (((purchasedItems === true) || (isPremiumMember === true)) && offerValid === true);
    alert("You have a discount applied!");

else

    alert("Sorry no discount applied at this time");

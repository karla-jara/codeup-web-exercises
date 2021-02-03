console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!');

var lm = parseInt(prompt("How many days would you like to rent the Little Mermaid?"));
var bb = parseInt(prompt("How many days would you like to rent Brother Bear?"));
var h = parseInt(prompt("How many days would you like to rent Hercules?"));

var price = 3;

lm *= price;
bb *= price;
h *= price;

var total = alert("Your total rental price is " + (lm + bb + h));

var google = parseInt(prompt("How many hours did you work for Google?"));
var amazon = parseInt(prompt("How many hours did you work for Amazon?"));
var facebook = parseInt(prompt("How many hours did you work for Facebook?"));

google *= 400;
amazon *= 380;
facebook *= 350;

var totalPay = alert("Your total pay is " + (google + amazon + facebook));

var classFull = confirm("Is this class full?");
var scheduleConflict = confirm("Is there a conflict with your schedule?");
if ((classFull === false) && (scheduleConflict === false)) {
    alert("Great news, you can enroll!");
}
else {
    alert("Sorry you may not enroll at this time :(");
}

var purchasedItems = confirm("Will you purchase more than two items?");
var isPremiumMember = confirm("Are you a premium member?");
var offerValid = confirm("Is offer valid?")

if ((purchasedItems === true) || (isPremiumMember === true)) && offerValid === true;
{
    alert("You have a discount applied!");
} else {
    alert("Sorry no discount applied at this time");
}